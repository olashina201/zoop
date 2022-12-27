import apiClient from "./client";

const BASE_URL = "http://localhost:3000";

const login = (email: string, password: string) => apiClient.post(`${BASE_URL}/login`, { email, password });


export default { login }