import { getArtList } from "../api/api";
import ArtList from "../components/ArtList";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { ArtCardType, CategoryType, PaginationType } from "../types/type";
import Filters from "./Filters";
import { getAllCategories } from "../utils/utils";
import CommentForm from "./CommentForm";

function ArtPage() {
  const [paginationData, setPaginationData] = useState<PaginationType | null>(
    null
  );
  const [allCategories, setAllCategories] = useState<CategoryType[]>([]);
  const [artListData, setArtListData] = useState<ArtCardType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getArtList({ page: currentPage })
      .then((result) => result.data)
      .then((data) => {
        setArtListData(data.data);
        setPaginationData(data.pagination);
        setAllCategories(getAllCategories(data.data));
      });
  }, [currentPage]);

  const handleFiltersChange = (data: {
    pagination: PaginationType;
    data: ArtCardType[];
  }) => {
    setArtListData(data.data);
    setPaginationData(data.pagination);
  };

  return (
    <>
      <Filters
        onChangeFilter={handleFiltersChange}
        allCategories={allCategories}
      />
      <div className="flex gap-8 items-start">
        <ArtList artListData={artListData} />
        {paginationData && (
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={(data) => setCurrentPage(data.selected)}
            pageRangeDisplayed={5}
            pageCount={paginationData.total_pages}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
          />

          //<Pagination paginationData={paginationData} onChange={setCurrentPage} />
        )}
      </div>
      <CommentForm />
    </>
  );
}

export default ArtPage;
