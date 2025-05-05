import './Input.css';

const Input = () => {
  return (
    <div className="input-div">
      <form className="ingredients-form">
        <input
          type="text"
          placeholder="e.g. Oregano"
          aria-label="Provide igredients"
        ></input>
        <button>Add Ingredient</button>
      </form>
      <div className="IngredientsDisplay">
        <h1>Ingredient on hand</h1>
        <ul className="ingredients-list">
          <li>Oregano</li>
          <li>Tomato</li>
          <li>Onion</li>
          <li>Garlic</li>
          <li>Olive Oil</li>
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
