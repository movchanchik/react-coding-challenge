import { ArtListType } from "../types/type";
import ArtCard from "./ArtCard";

const ArtList = ({ artListData }: ArtListType) => {
  return (
    <div className="flex flex-row gap-4 flex-wrap">
      {artListData &&
        artListData.map((card) => <ArtCard key={card.id} card={card} />)}
    </div>
  );
};

export default ArtList;
