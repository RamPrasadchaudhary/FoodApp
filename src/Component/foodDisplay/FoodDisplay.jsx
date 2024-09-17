import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = (props) => {
  const { food_list } = useContext(StoreContext);
  const category = props.category || "All"; // Default to "All" if not provided

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item) => {
          // Log the category and item category for debugging
          // console.log(category, item.category);
          
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={item._id} // Use item._id as key for unique identification
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
          return null; // Return null if item does not match category
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
