import React from "react";
import { useState } from "react";

const Cards = () => {
  const [cards] = useState([
    {
      id: 0,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL7giCmepgviTv1ZD6bL8aGjGrVxPCoR0ZYA&usqp=CAU",
      name: "Makkah",
      isFav: false,
    },
    {
      id: 1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL7giCmepgviTv1ZD6bL8aGjGrVxPCoR0ZYA&usqp=CAU",
      name: "Qassim",
      isFav: false,
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL7giCmepgviTv1ZD6bL8aGjGrVxPCoR0ZYA&usqp=CAU",
      isFav: false,
    },
  ]);

  const favorite = (id) => {
    let arrFav = [];
    arrFav = cards.map((item) => {
      if (item.id === id) {
        return { ...item, isFav: !item.isFav };
      } else {
        return item;
      }
    });

    // localStorage.setItem("arrFav", JSON.stringify(arrFav));
    // favRender();
  };

  return (
    <div>
      {/* <input
        type="search"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      {
        (cards.filter((val) => {
          if (search === "") {
            return val;
          } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
            return val;
          }
        }),
        ( */}
      <div className="cards">
        {cards.map((item, id) => {
          return (
            <div className="card">
              <img src={item.img} alt="skyPhotos" />
              <h2>{item.name}</h2>
              <button className="favBtn" onClick={() => favorite((item, id))}>
                Add to Favorite
              </button>
            </div>
          );
        })}
      </div>
      ))
      {/* } */}
    </div>
  );
};

export default Cards;


