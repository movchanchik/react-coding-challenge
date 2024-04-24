import { useEffect, useState } from "react";
import { getImage } from "../api/api";
import { ArtCardType } from "../types/type";
import { Link } from "react-router-dom";

const ArtCard = ({ card }: { card: ArtCardType }) => {
  const { id, title } = card;
  const [imgURL, setImgURL] = useState("");
  useEffect(() => {
    getImage({ id }).then((data) => {
      setImgURL(data.data.data.image_id);
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 p-4 rounded-lg w-48">
      <Link to={`/art-card/${id}`}>
        <img src={`https://www.artic.edu/iiif/2/${imgURL}`} />
        <span>{title}</span>
      </Link>
    </div>
  );
};

export default ArtCard;
