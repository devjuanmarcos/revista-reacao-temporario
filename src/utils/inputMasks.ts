import { UseFormSetValue } from "react-hook-form";

export const telefoneMask = (
  event: React.ChangeEvent<HTMLInputElement>,
  setValue: UseFormSetValue<any>,
  type?: string
) => {
  const input = event.target as HTMLInputElement;
  let value = input.value.replace(/\D/g, "");

  let formattedValue = "";

  if (value.length >= 1) {
    formattedValue = `(${value.slice(0, 2)}`;
  }
  if (value.length >= 3) {
    formattedValue += `) ${value.slice(2, 7)}`;
  }
  if (value.length >= 8) {
    formattedValue += `-${value.slice(7, 11)}`;
  }

  setValue(type as string, formattedValue, { shouldDirty: true });
};

export const telefoneFixoMask = (
  event: React.ChangeEvent<HTMLInputElement>,
  setValue: UseFormSetValue<any>,
  type?: string
) => {
  const input = event.target as HTMLInputElement;
  let value = input.value.replace(/\D/g, "");

  let formattedValue = "";

  if (value.length >= 1) {
    formattedValue = `(${value.slice(0, 2)}`;
  }
  if (value.length >= 3) {
    formattedValue += `) ${value.slice(2, 6)}`; // Removido um dígito aqui
  }
  if (value.length >= 7) {
    formattedValue += `-${value.slice(6, 10)}`;
  }

  setValue(type as string, formattedValue, { shouldDirty: true });
};

export const cepMask = (event: React.FormEvent<HTMLInputElement>, setValue: UseFormSetValue<any>) => {
  const input = event.target as HTMLInputElement;
  let value = input.value.replace(/\D/g, "");

  let formattedValue = "";

  if (value.length >= 1) {
    formattedValue = `${value.slice(0, 5)}`;
  }
  if (value.length >= 6) {
    formattedValue += `-${value.slice(5, 8)}`;
  }

  setValue("endereco_cep", formattedValue, { shouldDirty: true, shouldValidate: true });
};

export const cpfMask = (event: React.ChangeEvent<HTMLInputElement>, setValue: UseFormSetValue<any>, type?: string) => {
  const input = event.target as HTMLInputElement;
  let value = input.value.replace(/\D/g, "");
  value = value.slice(0, 11);

  let formattedValue = "";

  if (value.length >= 3) {
    formattedValue += `${value.slice(0, 3)}.`;
    value = value.slice(3);
  }
  if (value.length >= 3) {
    formattedValue += `${value.slice(0, 3)}.`;
    value = value.slice(3);
  }
  if (value.length > 0) {
    formattedValue += value;
  }

  if (value.length >= 5) {
    formattedValue = `${formattedValue.slice(0, 11)}-${formattedValue.slice(11)}`;
  }

  setValue(type as string, formattedValue, { shouldDirty: true });
};

export function cpfFormatter(value: string) {
  if (!value) {
    return "";
  }

  value = value.slice(0, 11);

  let formattedValue = "";

  if (value.length >= 3) {
    formattedValue += `${value.slice(0, 3)}.`;
    value = value.slice(3);
  }
  if (value.length >= 3) {
    formattedValue += `${value.slice(0, 3)}.`;
    value = value.slice(3);
  }
  if (value.length > 0) {
    formattedValue += value;
  }

  if (value.length >= 5) {
    formattedValue = `${formattedValue.slice(0, 11)}-${formattedValue.slice(11)}`;
  }

  return formattedValue;
}

export function cepFormatter(value: string | null | undefined) {
  if (!value) {
    return "";
  }

  let formattedValue = "";

  if (value.length >= 1) {
    formattedValue = `${value.slice(0, 5)}`;
  }
  if (value.length >= 6) {
    formattedValue += `-${value.slice(5, 8)}`;
  }
  return formattedValue;
}

export function telefoneFormatter(value: string) {
  if (!value) {
    return "";
  }

  let formattedValue = "";

  if (value.length >= 1) {
    formattedValue = `(${value.slice(0, 2)}`;
  }
  if (value.length >= 3) {
    formattedValue += `) ${value.slice(2, 7)}`;
  }
  if (value.length >= 8) {
    formattedValue += `-${value.slice(7, 11)}`;
  }

  return formattedValue;
}

export const cnpjMask = (event: React.ChangeEvent<HTMLInputElement>, setValue: UseFormSetValue<any>, type?: string) => {
  const input = event.target as HTMLInputElement;
  let value = input.value.replace(/\D/g, ""); // Remover todos os caracteres que não sejam números

  // Aplicar a máscara para CNPJ (XX.XXX.XXX/XXXX-XX)
  let formattedValue = "";
  if (value.length >= 1) {
    formattedValue = `${value.slice(0, 2)}`;
  }
  if (value.length >= 3) {
    formattedValue += `.${value.slice(2, 5)}`;
  }
  if (value.length >= 6) {
    formattedValue += `.${value.slice(5, 8)}`;
  }
  if (value.length >= 9) {
    formattedValue += `/${value.slice(8, 12)}`;
  }
  if (value.length >= 13) {
    formattedValue += `-${value.slice(12, 14)}`;
  }

  setValue(type as string, formattedValue, { shouldDirty: true });
};

export function cnpjFormatter(value: string) {
  if (!value) {
    return "";
  }

  // Remover todos os caracteres que não sejam números
  value = value.replace(/\D/g, "");

  // Formatando CNPJ (XX.XXX.XXX/XXXX-XX)
  let formattedValue = "";
  if (value.length >= 1) {
    formattedValue = `${value.slice(0, 2)}`;
  }
  if (value.length >= 3) {
    formattedValue += `.${value.slice(2, 5)}`;
  }
  if (value.length >= 6) {
    formattedValue += `.${value.slice(5, 8)}`;
  }
  if (value.length >= 9) {
    formattedValue += `/${value.slice(8, 12)}`;
  }
  if (value.length >= 13) {
    formattedValue += `-${value.slice(12, 14)}`;
  }

  return formattedValue;
}
