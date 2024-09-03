import RecipeItem from "@components/RecipeItem";

import '@components/RecipeList.css'

function RecipeList() {
  return (
    <div id='recipe_item_container'>
      <RecipeItem />
      <RecipeItem />
      <RecipeItem />
      <RecipeItem />
      <RecipeItem />
      <RecipeItem />
    </div>
  );
}

export default RecipeList;