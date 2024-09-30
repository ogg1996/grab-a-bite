import styled from 'styled-components';
import {
  basicPort,
  cookingPort,
  ingredientsAPI
} from '@assets/apiInfo';
import { useAPIFetch, useJsonServerFetch } from '@assets/fetch';

const StyledRecipe = styled.div`
  & > img {
    max-width: 250px;
  }
`;

function Recipe({ recipeId }) {
  const { loading: loadingBasic, data: dataBasic } =
    useJsonServerFetch(basicPort, recipeId);

  const { loading: loadingIngredient, data: dataIngredient } =
    useAPIFetch(ingredientsAPI, recipeId);

  const { loading: loadingCooking, data: dataCooking } =
    useJsonServerFetch(cookingPort, recipeId);

  return (
    <StyledRecipe>
      {!loadingBasic && (
        <>
          <p>{dataBasic[0].NAME}</p>
          <p>{dataBasic[0].SUMRY}</p>
          <p>조리시간 : {dataBasic[0].COOKING_TIME}</p>
          <p>난이도 : {dataBasic[0].LEVEL}</p>
          <hr />

          <img src={dataBasic[0].IMG_URL} alt={dataBasic[0].NAME} />
        </>
      )}
      <hr />
      {!loadingIngredient && (
        <ul>
          {dataIngredient.map(el => {
            return (
              <li key={el.ROW_NUM}>
                {el.IRDNT_NM} {el.IRDNT_CPCTY} {el.IRDNT_TY_NM}
              </li>
            );
          })}
        </ul>
      )}
      <hr />
      {!loadingCooking && (
        <>
          {dataCooking.map(el => (
            <div key={el.id}>
              <p>{el.DESC}</p>
              {el.IMAGE_URL !== '' && (
                <img src={el.IMAGE_URL} alt="요리과정" />
              )}
            </div>
          ))}
        </>
      )}
    </StyledRecipe>
  );
}

export default Recipe;
