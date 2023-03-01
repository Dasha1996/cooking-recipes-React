import { Link } from 'react-router-dom';
import './RecipeList.css';

export default function RecipeList({recipes}) {
  if(recipes.length === 0) {
    return <div className="error">No recipes to load...</div>
    } 
  return (
    <div className = "recipe-list">
        {recipes.map((recipe) => (
            <div key = {recipe.id} className="card">
            <img src="https://via.placeholder.com/300x160" alt = "placeholder"></img>
                <h3>{recipe.title}</h3>
                <p>{recipe.cookingTime} to make</p>
                <div>{recipe.method.substring(0, 100)}...
                    <Link to = {`/recipes/${recipe.id}`}> Cook this</Link>
                </div>

            </div>
        ))}
      
    </div>
  )
}