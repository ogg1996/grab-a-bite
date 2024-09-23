import styled from 'styled-components';
import imgData from '@/assets/data_img.json';
import { useDetailFetch } from '@/assets/fetch';
import {
  basicAPI,
  cookingAPI,
  ingredientsAPI
} from '@/assets/apiInfo';

const StyledRecipe = styled.div`
  & > img {
    max-width: 250px;
  }
`;

function Recipe({ recipeId }) {
  const { loading: loading1, data: data1 } = useDetailFetch(
    basicAPI,
    recipeId
  );
  const { loading: loading2, data: data2 } = useDetailFetch(
    ingredientsAPI,
    recipeId
  );
  const { loading: loading3, data: data3 } = useDetailFetch(
    cookingAPI,
    recipeId
  );

  const image = imgData.find(
    data => Number(data.RECIPE_ID) === Number(recipeId)
  );

  return (
    <StyledRecipe>
      {!loading1 && (
        <>
          <p>
            {data1.Grid_20150827000000000226_1.row[0].RECIPE_NM_KO}
          </p>
          <p>{data1.Grid_20150827000000000226_1.row[0].SUMRY}</p>
          <p>
            조리시간 :{' '}
            {data1.Grid_20150827000000000226_1.row[0].COOKING_TIME}
          </p>
          <p>
            난이도 :{' '}
            {data1.Grid_20150827000000000226_1.row[0].LEVEL_NM}
          </p>
          <hr></hr>
          <img src={image.IMG_URL} />
        </>
      )}
      <hr></hr>
      {!loading2 && (
        <ul>
          {data2.Grid_20150827000000000227_1.row.map(el => {
            return (
              <li key={el.ROW_NUM}>
                {el.IRDNT_NM} {el.IRDNT_CPCTY} {el.IRDNT_TY_NM}
              </li>
            );
          })}
        </ul>
      )}
      <hr></hr>
      {!loading3 && (
        <>
          {data3.Grid_20150827000000000228_1.row.map(el => (
            <p key={el.ROW_NUM}>{el.COOKING_DC}</p>
          ))}
        </>
      )}
    </StyledRecipe>
  );
}

export default Recipe;
