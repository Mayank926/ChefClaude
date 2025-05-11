import React from "react";
import "./Input.css";

const Input = ({ ingredientsList, setIngredientListItems }) => {
  const addIngredient = (formData) => {
    const newIngredient = formData.get("ingredient"); // Get the value of the input field
    setIngredientListItems((prevList) => [...prevList, newIngredient]);
  };

  return (
    <div className="input-div">
      <form className="ingredients-form" action={addIngredient}>
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Provide igredients"
          name="ingredient"
        ></input>
        <button>Add ingredient</button>
      </form>
      {ingredientsList.length > 0 ? (
        <div className="IngredientsDisplay">
          <h1>Ingredients on hand:</h1>
          <ul className="ingredients-list">
            {ingredientsList.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ) : null}
      {ingredientsList.length > 3 ? (
        <form className="recipe-form">
          <div className="reipe-form-text-div">
            <h3>Ready for recepie?</h3>
            <p>Generate a recepie from your list of ingredients.</p>
          </div>
          <button>Get a receipe</button>
        </form>
      ) : null}
    </div>
  );
};
export default Input;
