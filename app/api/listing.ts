import apiClient from "./client";

const endpoint = "/products?limit=5";

const BASE_URL = "http://localhost:3000";
export const getListings = () => apiClient.get(endpoint);

export const addListings = (listing: any, onUploadProgress: any) => {
  const data = new FormData();
  data.append("name", listing.title);
  data.append("basePrice", listing.price);
  data.append("categories", listing.category.value);
  data.append("description", listing.description);
  data.append("picture", listing.images[0]);

//   listing.images.forEach((image: any, index: any) =>
//     data.append("picture", {
//       name: "image" + index,
//       type: "image/jpeg",
//       url: image,
//     })
//   );

//   if (listing.location)
//     data.append("location", JSON.stringify(listing.location));

console.log(data)
  return apiClient.post(`${BASE_URL}/product`, data, {
    onUploadProgress: (progress: any) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};
