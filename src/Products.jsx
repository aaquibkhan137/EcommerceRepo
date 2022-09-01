import React from "react";
import { useState, useEffect } from "react";
import { FaOpencart } from 'react-icons/fa';


function Products() {
  const [items, setItems] = useState([]);
  const[addItems,setAddItems]=useState([])

  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      setItems(json);
    });
  // console.log(items);

  return (
    <div>
      <div id="Cart">
        <h1><FaOpencart/></h1>
        {addItems}
        </div>

      <div id="Main">
        {items.map((item) => {
          return (
            <div id="parentDiv">
              <div id="Image">
                <img src={item.image} alt="json" id="img" />
              </div>
              <div id="info">
                <ul key={item.id}>
                  <li>
                    Id : {item.id}
                  </li>
                  <li> 
                    Title : {item.title}</li>
                  <li>
                    Price : {item.price} {"$"}
                  </li>

                  <li>
                    Rating : {item.rating.rate} {"*"}
                  </li>
                  <li>
                    Count : {item.rating.count}
                  </li>
                </ul>
                <div>
                <button id ="btn"onClick={()=>setAddItems((prevState)=>[...prevState,item.id])}>Add</button>

                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
