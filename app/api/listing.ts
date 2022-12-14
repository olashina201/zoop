import apiClient from "./client";

const endpoint = '/products?limit=5';

export const getListings = () => apiClient.get(endpoint)

export const addListings = (listing: any) => {
    const data = new FormData();
    data.append('title', listing.title);
    data.append('price', listing.price);
    data.append('categoryId', listing.category.value);
    data.append('description', listing.description);

    listing.images.forEach((image: any, index: any) => data.append('image', {
        name: 'image' + index,
        type: 'image/jpeg',
        url: image
    }));

    if(listing.location) data.append('location', JSON.stringify(listing.location));

    return apiClient.post('/api/', data);
}
