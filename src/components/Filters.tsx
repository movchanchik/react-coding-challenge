import { useState } from "react";
import { getCategory, search } from "../api/api";
import { ArtCardType, CategoryType, PaginationType } from "../types/type";

const Filters = ({
  allCategories,
  onChangeFilter,
}: {
  allCategories: CategoryType[];
  onChangeFilter: (data: {
    pagination: PaginationType;
    data: ArtCardType[];
  }) => void;
}) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [curentCategory, setCurrentCategory] = useState("");
  const handleSearch = () => {
    search({ title: searchValue }).then((data) => {
      return onChangeFilter(data.data);
    });
  };
  /* useEffect(() => {
    getAllCategories().then((data) => {
      console.log("Data from getAllCategories:", data); // Debug statement
      if (Array.isArray(data.data.data)) {
        setAllCategories(data.data.data);
        console.log(data.data.data);
      } else {
        console.error("Expected an array, but received:", data.data);
      }
    });
  }, []);
*/
  const handleCategoryChange = (categoryId: string) => {
    console.log(categoryId);
    getCategory({ id: categoryId }).then((data) => console.log(data));
    onChangeFilter(
      data.data.filter((item: ArtCardType) =>
        item.category_ids.find(categoryId)
      )
    );
  };

  return (
    <div className="flex flex-row items-center bg-slate-50 p-4 my-3 mx-auto justify-center gap-6 ">
      <div className="flex flex-row gap-4">
        <input
          placeholder="Search"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="border"
        ></input>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div>
        <select
          onChange={(e) => {
            setCurrentCategory(e.target.value);
            handleCategoryChange(e.target.value);
          }}
          value={curentCategory}
          className="border"
        >
          {allCategories.map((category) => {
            return <option value={category.id}>{category.title}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default Filters;
