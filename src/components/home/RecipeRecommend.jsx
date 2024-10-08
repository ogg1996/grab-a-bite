import { useState } from 'react';
import styled from 'styled-components';
import RecipeItem from '@home/RecipeItem';

const StyledRecipeRecommend = styled.div`
  flex-grow: 1;
  padding-top: 30px;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  gap: 30px;
`;

function RecipeRecommend({ data }) {
  const [recommend, setRecommend] = useState([]);

  return (
    <StyledRecipeRecommend>
      <button
        type="button"
        onClick={() => {
          const rand = Math.floor(Math.random() * (537 - 1) + 1);
          const recommendEl = data[rand];

          setRecommend([
            ...recommend,
            <RecipeItem
              key={new Date()}
              recipeId={recommendEl.RECIPE_ID}
              name={recommendEl.NAME}
              sumry={recommendEl.SUMRY}
              imgUrl={recommendEl.IMG_URL}
              cookingTime={recommendEl.COOKING_TIME}
            />
          ]);
        }}
      >
        음.. 뭐 해 먹지? 추천해 줘!
      </button>
      {recommend.length > 0 && recommend[recommend.length - 1]}
    </StyledRecipeRecommend>
  );
}

export default RecipeRecommend;
