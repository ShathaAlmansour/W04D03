import React from "react";
import { useParams } from "react-router"



const Card = () => {
    const cards = [
        {
            id: 0,
            name: "HafrAlbaten",
            img: "",
            isFav: false,
          },
          {
            id: 1,
            name: "Alqassim",
            img: "",
            isFav: false,
          },
          {
            id: 2,
            name: "Swiss",
            img: "",
            isFav: false,
          },
        ];
    
    let id = useParams().id;
    const myItem = cards.find((item, id) => Number(id) === id ); // حولتها لنمبر Number

    return (
   <div className="cardCoun">
           <h1> {myItem.name} </h1>
           <img src = {myItem.img} alt='Countries' />
   </div>
   )
}

export default Card;