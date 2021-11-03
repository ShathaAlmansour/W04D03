import React from "react";
import { useParams } from "react-router"



const Card = () => {
    const cards = [
        {
            id: 0,
            img: "",
            isFav: false,
          },
          {
            id: 1,
            img: "",
            isFav: false,
          },
          {
            id: 2,
            img: "",
            isFav: false,
          },
        ];
    
    let id = useParams().id;
    const myItem = cards.find((item, id) => Number(id) === id ); 

    return (
   <div className="cardCoun">
           <h1> {myItem.name} </h1>
           <img src = {myItem.img} alt='Countries' />
   </div>
   )
}

export default Card;