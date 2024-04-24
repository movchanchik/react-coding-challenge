export type PaginationType = {
  total: number;
  limit: number;
  offset: number;
  total_pages: number;
  current_page: number;
  prev_url: string;
  next_url: string;
};

export type ArtCardType = {
  id: number;
  title: string;
  artist_display: string;
  date_display: string;
  main_reference_number: string;
  image_id: string;
  dimensions: string;
  category_ids: string[];
  category_titles: string[];
};

export type ArtListType = {
  artListData: ArtCardType[];
};

export type CategoryType = {
  id: string;
  title: string;
};

export type CommentType = {
  name: string;
  email: string;
  message: string;
};
