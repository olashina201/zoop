import apiClient from "./client";

const BASE_URL = "http://localhost:3000";

const register = (userInfo: any) => apiClient.post(`${BASE_URL}/user`, userInfo);

export default { register };