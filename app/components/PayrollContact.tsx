"use client";

import { useRef, useState, type FormEvent } from 'react';
import { FaArrowRight, FaCheck } from 'react-icons/fa6';
import { formspreeEndpoint } from '../lib/formspree';
import { maskCnpj, validCnpj, validCorporateEmail, validPhone } from '../lib/payroll-contact';

const roles = ['RH', 'Financeiro', 'Diretoria ou sócio', 'Outro'];
const volumes = ['Até 50', '51 a 200', '201 a 1.000', 'Mais de 1.000'];
const flows = ['Portal bancário e arquivo de remessa', 'Transferências individuais', 'Plataforma integrada ao ERP', 'Mais de um processo ou instituição', 'Quero entender as alternativas'];
const priorities = ['Agilidade no pagamento', 'Comprovantes e conciliação', 'Integração com ERP', 'Abertura de contas para o time', 'Condições comerciais da folha', 'Revisão completa do processo'];

function Options({ values }: { values: string[] }) {
  return <><option value="">Selecione</option>{values.map(value => <option key={value}>{value}</option>)}</>;
}

export function PayrollContact() {
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');
  const started = useRef(false);
  const pending = useRef(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;
    const form = event.currentTarget;
    const input = (name: string) => form.elements.namedItem(name) as HTMLInputElement;
    input('cnpj').setCustomValidity(validCnpj(input('cnpj').value) ? '' : 'Informe um CNPJ válido.');
    input('email').setCustomValidity(validCorporateEmail(input('email').value) ? '' : 'Use o e-mail corporativo da empresa.');
    input('phone').setCustomValidity(validPhone(input('phone').value) ? '' : 'Informe um celular com DDD e nove dígitos.');
    if (!form.reportValidity()) return;
    const body = new FormData(form);
    body.set('origin_page', window.location.pathname);
    const search = new URLSearchParams(window.location.search);
    for (const key of ['utm_source', 'utm_medium', 'utm_campaign']) {
      const value = search.get(key) || '';
      body.set(key, /^[a-zA-Z0-9_ .-]{1,120}$/.test(value) ? value : '');
    }
    pending.current = true;
    setSending(true);
    setError('');
    try {
      const response = await fetch(form.action, { method: 'POST', headers: { Accept: 'application/json' }, body });
      if (!response.ok) throw new Error('Submission rejected');
      window.gtag?.('event', 'generate_lead', { form_id: 'pagamento_folha', solution_kind: 'Pagamento de folha' });
      form.reset();
      setDone(true);
    } catch {
      setError('Não foi possível confirmar o envio. Seus dados foram mantidos nesta página. Tente novamente em instantes.');
    } finally {
      pending.current = false;
      setSending(false);
    }
  }

  if (done) return <div className="payroll-confirmation" role="status"><FaCheck aria-hidden="true" /><h3>Solicitação recebida.</h3><p>O Ewerton ou alguém do time retorna em até 1 dia útil pelos dados informados.</p><p>O próximo passo é entender a operação e as prioridades da empresa, sem contratação automática.</p><a className="button" href="/diagnostico-folha">Conhecer o diagnóstico de folha <FaArrowRight aria-hidden="true" /></a></div>;

  return <form id="payroll-form" className="payroll-contact-form" action={formspreeEndpoint} method="POST" onSubmit={submit} aria-busy={sending} onFocusCapture={() => {
    if (started.current) return;
    started.current = true;
    window.gtag?.('event', 'contact_form_start', { form_id: 'pagamento_folha' });
  }}>
    <div className="payroll-form-grid">
      <label>Nome completo<input name="name" autoComplete="name" maxLength={120} required /></label>
      <label>Seu cargo<select name="role" required><Options values={roles} /></select></label>
      <label>Empresa<input name="company" autoComplete="organization" maxLength={160} required /></label>
      <label>CNPJ<input name="cnpj" placeholder="00.000.000/0000-00" autoComplete="off" maxLength={18} required onChange={event => { event.currentTarget.value = maskCnpj(event.currentTarget.value); event.currentTarget.setCustomValidity(''); }} /></label>
      <label>E-mail corporativo<input name="email" type="email" autoComplete="email" maxLength={160} required onChange={event => event.currentTarget.setCustomValidity('')} /></label>
      <label>WhatsApp com DDD<input name="phone" type="tel" autoComplete="tel-national" placeholder="(11) 99999-9999" maxLength={16} required onChange={event => { const digits = event.currentTarget.value.replace(/\D/g, '').slice(0, 11); event.currentTarget.value = digits.replace(/^(\d{2})(\d)/, '($1) $2').replace(/^(\(\d{2}\) \d{5})(\d)/, '$1-$2'); event.currentTarget.setCustomValidity(''); }} /></label>
      <label>Número de funcionários<select name="employees" required><Options values={volumes} /></select></label>
      <label>Como a folha é paga hoje?<select name="payroll_flow" required><Options values={flows} /></select></label>
      <label>O que mais precisa melhorar?<select name="priority" required><Options values={priorities} /></select></label>
    </div>
    <label>Contexto da empresa <small>Opcional</small><textarea name="message" rows={4} maxLength={3000} placeholder="Conte o que precisa melhorar. Não envie dados pessoais de colaboradores nem documentos sensíveis." /></label>
    <label className="payroll-consent"><input type="checkbox" name="consent" value="Autorizo o contato sobre pagamento de folha e li a política de privacidade" required /><span>Autorizo o contato da Hirayama sobre minha solicitação e li a <a href="https://www.hirayamacorretora.com.br/politica-de-privacidade/" target="_blank" rel="noreferrer">política de privacidade</a>.</span></label>
    <input type="hidden" name="solution_kind" value="Pagamento de folha" /><input type="hidden" name="_subject" value="Gestão de Benefícios | Solicitação de análise de pagamento de folha" /><input type="hidden" name="origin_page" value="/pagamento-de-folha" />
    <label className="payroll-honeypot" aria-hidden="true">Não preencha<input name="_gotcha" tabIndex={-1} autoComplete="off" /></label>
    <button className="button" type="submit" disabled={sending}>{sending ? 'Enviando...' : 'Quero avaliar minha folha de pagamento'} <FaArrowRight aria-hidden="true" /></button>
    {error ? <p role="alert" className="payroll-form-error">{error}</p> : <p className="payroll-form-note" role="status">O Ewerton ou alguém do time fala com você em até 1 dia útil.</p>}
    <noscript><p>O envio abre a confirmação do Formspree. Ative o JavaScript para receber a confirmação aqui no site.</p></noscript>
  </form>;
}
