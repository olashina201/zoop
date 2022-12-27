import apiClient from "./client";

const BASE_URL = "https://fakestoreapi.com";

const register = (username: string, password: string) => apiClient.post(`${BASE_URL}/auth/login`, { username, password });


export default { register }