import apiClient from "./client";

const BASE_URL = "http://localhost:3000";

const register = (name: string, email: string, password: string, address: string) => apiClient.post(`${BASE_URL}/user`, { name, password });


export default { register }