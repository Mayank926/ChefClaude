import './Output.css';

const Output = () => {
    return (
    <div className='output-div'>
        <h1>Suggested Recepie</h1>
        <p>Based on your suggested ingredients, I would recommend making</p>
        <span>a Creamy Garlic</span>
        <h3>Ingredients</h3>
        <ul className='output-ingredients-list'>
            <li>1/2 cup of Olive Oil</li>
            <li>1/4 cup of Oregano</li>
            <li>1/2 cup of Garlic</li>
            <li>1/4 cup of Tomato</li>
            <li>1/4 cup of Onion</li>
        </ul>
        <h3>Instructions</h3>
        <ul className='Instructions'>
            <li>1. Heat the olive oil in a pan over medium heat.</li>
            <li>2. Add the garlic and sauté until fragrant.</li>
            <li>3. Add the oregano and stir for 1 minute.</li>
            <li>4. Add the tomatoes and onions, and cook until soft.</li>
            <li>5. Serve hot with pasta or bread.</li>
        </ul>
    </div>
    );
}

export default Output;