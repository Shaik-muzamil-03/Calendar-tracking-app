import axios from "axios";

const API_URL = "http://localhost:3001";

export const getCompanies = async () => {
    const response = await axios.get(API_URL+`/companies`);
    return response.data;
};

export const getCommunication = async () => {
    const response = await axios.get(API_URL+`/communication`);
    return response.data;
};

export const createUserCommunication = async (communication) => {
    const response = await axios.post(API_URL+'/user-companies', communication);
    return response.data;
};