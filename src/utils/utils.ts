import { ArtCardType, CategoryType } from "../types/type";

export const getAllCategories = (data: ArtCardType[]): CategoryType[] => {
  const allCategories: CategoryType[] = [];
  data.map((item) => {
    return item.category_ids.map((categoryId, index) => {
      if (allCategories.find((category) => category.id === categoryId)) return;
      allCategories.push({
        id: categoryId,
        title: item.category_titles[index],
      });
    });
  });

  return Array.from(allCategories);
};
