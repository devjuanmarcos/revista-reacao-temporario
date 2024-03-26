import axios from "axios";

const apiViaCep = axios.create({
  baseURL: process.env.NEXT_PUBLIC_VIACEP_URL,
});

export function getCep(cep: string) {
  return apiViaCep.get(`${cep}/json`);
}
