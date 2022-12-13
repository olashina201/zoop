import apiClient from "./client";

const endpoint = '/products?limit=5';

export const getListings = () => apiClient.get(endpoint)
