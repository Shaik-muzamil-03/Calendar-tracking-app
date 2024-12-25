import axios from "axios";

const API_URL = "http://localhost:3001";

export const getCompanies = async () => {
  const response = await axios.get(API_URL+`/companies`);
  return response.data;
}; // this api for user module also.

export const createCompany = async (company) => {
  const response = await axios.post(API_URL+'/companies', company);
  return response.data;
};

export const updateCompany = async (id, updatedCompany) => {
  const response = await axios.put(`${API_URL+'/companies'}/${id}`, updatedCompany);
  return response.data;
};

export const deleteCompany = async (id) => {
  const response = await axios.delete(`${API_URL+'/companies'}/${id}`);
  return response.data;
};

export const getCommunication = async () => {
  const response = await axios.get(API_URL+`/communication`);
  return response.data;
}; // this api for user module also.

export const createCommunication = async (communication) => {
  const response = await axios.post(API_URL+'/communication', communication);
  return response.data;
};

export const updateCommunication = async (id, updatedCommunication) => {
  const response = await axios.put(`${API_URL+'/communication'}/${id}`, updatedCommunication);
  return response.data;
};

export const deleteCommunication = async (id) => {
  const response = await axios.delete(`${API_URL+'/communication'}/${id}`);
  return response.data;
};
