const personalDomains = new Set(['gmail.com', 'googlemail.com', 'hotmail.com', 'hotmail.com.br', 'outlook.com', 'outlook.com.br', 'live.com', 'live.com.br', 'msn.com', 'yahoo.com', 'yahoo.com.br', 'ymail.com', 'icloud.com', 'me.com', 'aol.com', 'uol.com.br', 'bol.com.br', 'terra.com.br', 'proton.me', 'protonmail.com', 'mail.com']);

export function validCorporateEmail(value: string) {
  const email = value.trim().toLowerCase();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && !personalDomains.has(email.split('@')[1]);
}

export function validCnpj(value: string) {
  const cnpj = value.toUpperCase().replace(/[.\/\-\s]/g, '');
  if (!/^[A-Z0-9]{12}\d{2}$/.test(cnpj) || /^(.)\1{13}$/.test(cnpj)) return false;
  const digit = (base: string) => {
    let weight = 2;
    let sum = 0;
    for (let i = base.length - 1; i >= 0; i--) {
      sum += (base.charCodeAt(i) - 48) * weight;
      weight = weight === 9 ? 2 : weight + 1;
    }
    const remainder = sum % 11;
    return String(remainder < 2 ? 0 : 11 - remainder);
  };
  return digit(cnpj.slice(0, 12)) === cnpj[12] && digit(cnpj.slice(0, 13)) === cnpj[13];
}

export function maskCnpj(value: string) {
  const raw = value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 14);
  return raw.replace(/^(.{2})(.)/, '$1.$2').replace(/^(.{2})\.(.{3})(.)/, '$1.$2.$3').replace(/^(.{2})\.(.{3})\.(.{3})(.)/, '$1.$2.$3/$4').replace(/^(.*\/.{4})(.)/, '$1-$2');
}

export function validPhone(value: string) {
  const phone = value.replace(/\D/g, '');
  const codes = ['11','12','13','14','15','16','17','18','19','21','22','24','27','28','31','32','33','34','35','37','38','41','42','43','44','45','46','47','48','49','51','53','54','55','61','62','63','64','65','66','67','68','69','71','73','74','75','77','79','81','82','83','84','85','86','87','88','89','91','92','93','94','95','96','97','98','99'];
  return /^\d{2}9\d{8}$/.test(phone) && codes.includes(phone.slice(0, 2));
}
