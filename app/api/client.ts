import { create } from "apisauce";

const apiClient = create({
    baseURL: "http://localhost"
})

export default apiClient;