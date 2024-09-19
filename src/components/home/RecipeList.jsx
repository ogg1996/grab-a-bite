import RecipeItem from '@components/home/RecipeItem';
import styled from 'styled-components';

const StyledRecipeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px;
`;

function RecipeList({ data }) {
  return (
    <StyledRecipeList>
      {data.map(el => (
        <RecipeItem
          key={el.RECIPE_ID}
          name={el.RECIPE_NM_KO}
          sumry={el.SUMRY}
          imgUrl={el.IMG_URL}
          cookingTime={el.COOKING_TIME}
        />
      ))}
    </StyledRecipeList>
  );
}

export default RecipeList;
