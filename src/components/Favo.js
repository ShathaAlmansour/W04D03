import React from "react";


const Favo = () => {
    const favo = JSON.parse(localStorage.getItem("favorite"));
    let myFav = favo;

return (
    <div className='fav'>

      {myFav.map((item, i) => (
      <li key={i}><p>{item.name}</p>
      <img src={item.img} />
      </li>
      ))}
    </div>
  
)
}

export default Favo;