import RecommendFood from '@components/RecommendFood'
import RecipeList from '@components/RecipeList'
import Recipe from '@components/Recipe'

import '@pages/Article.css'

function Article({ mode }) {

  let changeMode = '';
  switch (mode) {
    case 'recommend':
      changeMode = <RecommendFood />
      break;
    case 'recipeList':
      changeMode = <RecipeList />
      break;
    case 'recipe':
      changeMode = <Recipe />
      break;
  }

  return (
    <article>
      {changeMode}
    </article>
  );
}

export default Article;