import api from "./api";
export const fetchCountries = async () => {
  const response = await api.get('/all');
  return response.data;
};
