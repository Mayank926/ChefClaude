import './Input.css';

let ingredientListItems = [];
const handleClick = () => {
  console.log('Button clicked!'); 
}

const handleMouseOver = () => {
  console.log('Mouse over!');
}

const formSubmitted = (event) => {
  event.preventDefault(); // Prevent the default form submission behavior
  const formData = new FormData(event.currentTarget);
  const newIngredient = formData.get('ingredient'); // Get the value of the input field
  ingredientListItems.push(<li>{newIngredient}</li>); // Add the new ingredient to the list
  console.log('Form submitted!');
  console.log(ingredientListItems)
}

const Input = () => {
  return (
    <div className="input-div">
      <form className="ingredients-form" onSubmit={formSubmitted}>
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Provide igredients"
          name="ingredient"
        ></input>
        <button onClick={handleClick} onMouseOver={handleMouseOver}>Add ingredient</button>
      </form>
      <div className="IngredientsDisplay">
        <h1>Ingredient on hand</h1>
        <ul className="ingredients-list">
          {ingredientListItems}
        </ul>
      </div>
      <form className="recipe-form">
        <div className="reipe-form-text-div">
          <h3>Ready for recepie?</h3>
          <p>Generate a recepie from your list of ingredients.</p>
        </div>
        <button>Get a receipe</button>
      </form>
    </div>
  );
};
export default Input;
