export function validarCpf(cpf: string): boolean {
  const invalidCpf = [
    "11111111111",
    "22222222222",
    "33333333333",
    "44444444444",
    "55555555555",
    "66666666666",
    "77777777777",
    "88888888888",
    "99999999999",
  ];

  if (cpf.length !== 11) {
    return false;
  }

  if (invalidCpf.includes(cpf)) {
    return false;
  }

  let sum = 0;
  let remainder;

  for (let i = 1; i <= 9; i++) {
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }

  remainder = (sum * 10) % 11;

  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  }

  if (remainder !== parseInt(cpf.substring(9, 10))) {
    return false;
  }

  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }

  remainder = (sum * 10) % 11;

  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  }

  if (remainder !== parseInt(cpf.substring(10, 11))) {
    return false;
  }

  return true;
}

export const validarCnpj = (cnpj: string): boolean => {
  const invalidCnpj: string[] = [
    "00000000000000",
    "11111111111111",
    "22222222222222",
    "33333333333333",
    "44444444444444",
    "55555555555555",
    "66666666666666",
    "77777777777777",
    "88888888888888",
    "99999999999999",
  ];

  if (cnpj.length !== 14) {
    return false;
  }

  if (invalidCnpj.includes(cnpj)) {
    return false;
  }

  let tamanho: number = cnpj.length - 2;
  let numeros: string = cnpj.substring(0, tamanho);
  const digitos: string = cnpj.substring(tamanho);
  let soma: number = 0;
  let pos: number = tamanho - 7;

  for (let i: number = tamanho; i >= 1; i--) {
    soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
    if (pos < 2) {
      pos = 9;
    }
  }

  let resultado: number = soma % 11 < 2 ? 0 : 11 - (soma % 11);

  if (resultado !== parseInt(digitos.charAt(0))) {
    return false;
  }

  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;

  for (let i: number = tamanho; i >= 1; i--) {
    soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
    if (pos < 2) {
      pos = 9;
    }
  }

  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

  if (resultado !== parseInt(digitos.charAt(1))) {
    return false;
  }

  return true;
};

export const validarTelefone = (telefone: string): boolean => {
  if (telefone.length < 14) {
    return false;
  }

  return true;
};
