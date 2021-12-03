import React from "react";
export default function Recipe({ title, calories, image, ingredients }) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-6 rounded">
      <div className="col-md-12 recipe">
        <h2>{title}</h2>
        <img src={image} alt="" />
        <p>
          <b>Calories: </b>
          {calories}
        </p>
        <ol>
          {ingredients.map((ingredient) => (
            <li>{ingredient.text}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
