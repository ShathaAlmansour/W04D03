import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import qassim from "../Image/qassim.jpg";
import Riyadh from "../Image/Riyadh.jpg";
import Makkah from "../Image/Makkah.jpg";

const Cards = () => {
  const [search, setSearch] = useState("");
  const history = useHistory();
  const [cards] = useState([
    {
      id: 0,
      name: "Qassim",
      img: "",
      isFav: false,
    },
    {
      id: 1,
      name: "Riyadh",
      img: "",
      isFav: false,

    },
    {
      id: 2,
      name: "Makkah",
      img: "",
      isFav: false,

    },
  ]);

const addFavurite = (id) => {
    let val = cards[id];
    if (val.isFav === true) {
        val.isFav = false;
      alert("Remove from favorite")
    } else {
      val.isFav = true;
      alert("Add to favorite")


      let fav = cards.filter((cards) => cards.isFav);
      localStorage.setItem("fav",JSON.stringify(fav))
    }
}

const changePath = (id) => {
    history.push(`/card/${id}`)
}

  return (
  <div>
      <input
        type="search"
        placeholder="Search here"
        onChange={(event) => {
            setSearch(event.target.value);
        }}
      />
      <ul className="cardsL">
      {cards.filter((val) => {
            if (search === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(search.toLowerCase())
            ) {
              return val;
            }
          })
          
          .map((item, i) => ( // map for object
          <div className="cards">
              <li className="card" key={i} >
                  <div onClick={() => changePath(item.id)}>
            <h2>{item.name}</h2>
            <img src= {item.img} alt='CuntriesImg' /> 
          </div>
          <button className='btn' onClick={() => addFavurite(item.id)}>Favorite</button>
          </li>
          </div>
        ))}
        </ul>
    </div>
  );
};

export default Cards;