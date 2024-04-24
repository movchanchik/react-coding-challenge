import { PaginationType } from "../types/type";

const Pagination = ({
  paginationData,
  onChange,
}: {
  paginationData: PaginationType;
  onChange: (i: number) => void;
}) => {
  const { total_pages, current_page } = paginationData;
  const pageNumbers = Array.from({ length: total_pages }, (_, i) => i + 1);

  return (
    <>
      {pageNumbers.map((i) => (
        <button onClick={() => onChange(i)} key={i}>
          {i}
        </button>
      ))}

      <div>Total pages: {total_pages} </div>
      <div>Current Page: {current_page}</div>
    </>
  );
};

export default Pagination;
