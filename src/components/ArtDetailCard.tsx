import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArtItem, getImage } from "../api/api";
import { ArtCardType } from "../types/type";

const ArtDetailCard = () => {
  const { id } = useParams();
  const [artItem, setArtItem] = useState<ArtCardType | null>(null);

  useEffect(() => {
    id &&
      getArtItem({ id: Number(id) }).then((data) => {
        setArtItem(data.data.data);
      });
  }, []);
  const [imgURL, setImgURL] = useState("");
  useEffect(() => {
    id &&
      getImage({ id: Number(id) }).then((data) => {
        setImgURL(data.data.data.image_id);
      });
  }, []);
  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <div className="mb-4">
        <div className="text-xl font-bold">{artItem?.title}</div>
        <div className="text-gray-600">{artItem?.artist_display}</div>
        <div className="text-gray-600">{artItem?.date_display}</div>
        <div className="text-gray-600">{artItem?.main_reference_number}</div>
        <div>
          <img
            src={`https://www.artic.edu/iiif/2/${imgURL}`}
            className="mt-4 rounded-md"
          />
        </div>
        <div className="text-gray-600">{artItem?.dimensions}</div>
      </div>
      <Link to="/" className="block text-blue-500 hover:underline">
        Back
      </Link>
    </div>
  );
};

export default ArtDetailCard;
