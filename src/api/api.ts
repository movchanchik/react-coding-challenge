import axios from "axios";

const ITEM_PER_PAGE = 10;

export const getArtList = async ({ page }: { page: number }) => {
  const data = await axios.get(`https://api.artic.edu/api/v1/artworks`, {
    params: {
      limit: ITEM_PER_PAGE,
      page: page,
    },
  });
  return data;
};

export const getArtItem = async ({ id }: { id: number }) => {
  const data = await axios.get(`https://api.artic.edu/api/v1/artworks/${id}`);
  return data;
};

export const getImage = async ({ id }: { id: number }) => {
  const data = await axios.get(
    `https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,image_id`
  );
  return data;
};

export const search = async ({ title }: { title: string }) => {
  const data = await axios.get(`https://api.artic.edu/api/v1/artworks/search`, {
    params: {
      q: title,
    },
  });
  return data;
};

export const getAllCategories = async () => {
  const data = await axios.get(`https://api.artic.edu/api/v1/category-terms`);
  return data;
};

export const getCategory = async ({ id }: { id: string }) => {
  const data = await axios.get(
    ` https://api.artic.edu/api/v1/category-terms/search/${id}`
  );
  return data;
};
