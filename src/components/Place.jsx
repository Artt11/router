import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import imageSingapor from "../images/Singapore.png";
import imageBoraBora from "../images/Bora Bora.png";
import imageThailand from "../images/Thailand.png";

export const Place = () => {
  const data = [
    {
      img: imageSingapor,
      title: "Singapore",
      price: "3800$",
    },
    {
      img: imageBoraBora,
      title: "BoraBora",
      price: "5000$",
    },
    {
      img: imageThailand,
      title: "Thailand",
      price: "2000$",
    },
  ];
  const { placesId } = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/places");
  };
  const placeIndex = parseInt(placesId, 10);
  return (
    <div>
      {data.map((place, index) => {
        return index + 1 === placeIndex ? (
          <div key={index}>
            <img src={place.img} alt={place.title} />
            <h2>{place.title}</h2>
            <p>{place.price}</p>
          </div>
        ) : null;
      })}

      <button onClick={goBack}>Go Back to Places</button>
    </div>
  );
};
