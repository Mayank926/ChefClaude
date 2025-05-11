import "./Body.css";
import Input from "./Input";
import Output from "./Output";
import React from "react";

const Body = () => {
  const [ingredientsList, setIngredientListItems] = React.useState([]);
  return (
    <div className="main-body">
      <Input
        key="input"
        ingredientsList={ingredientsList}
        setIngredientListItems={setIngredientListItems}
      />
      <Output 
      key="output"
      ingredientsList={ingredientsList} />
    </div>
  );
};

export default Body;
