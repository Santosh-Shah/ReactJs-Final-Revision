// import React from "react";

import ErrorMsg from "./components/ErrorMsg";
import FoodItems from "./components/FoodItems";

function App() {
  // using map method()
  let foodItems = ["Dal", "Bhat", "Tarkari", "Matar", "Milk", "Haluwa"];

  // let foodItems = [];
  // if (foodItems.length === 0) {
  //   return <h2>I am still hungry!</h2>;
  // }

  // we can store ternary operators's into variables
  // let emptyMsg = foodItems.length === 0 ? <h3>I am still hungry</h3> : null;

  return (
    <>
      <h1>Healthy Food</h1>
      {/* <ErrorMsg />
      <FoodItems /> */}

      <ErrorMsg items={foodItems}></ErrorMsg>
      <FoodItems items={foodItems}></FoodItems>

      {/* using ternary operator */}
      {/* {foodItems.length === 0 ? <h3>I am still hungry</h3> : null} */}
      {/* {emptyMsg} */}

      {/* by using logical operator */}
      {/* {foodItems.length === 0 && <h3>I am still hungry</h3>} */}

      {/* <ul className="list-group">
        {foodItems.map((item, index) => <li className="list-group-item" key={index}>{item}</li>)}
      </ul> */}
    </>
  );
}

export default App;
