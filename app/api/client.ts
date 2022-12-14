import { create } from "apisauce";
import cache from "../utility/cache";

const apiClient: any = create({
  baseURL: "https://fakestoreapi.com",
});

const get = apiClient.get;

apiClient.get = async (url: string, params: any, axiosConfig: any) => {
  const response = await get(url, params, axiosConfig);
  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;
