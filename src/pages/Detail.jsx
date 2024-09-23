import Header from '@components/common/Header';
import Recipe from '@components/detail/Recipe';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const StyledDetail = styled.div`
  display: flex;
  width: 500px;
  min-height: 100vh;
  flex-direction: column;
`;

function Detail() {
  const params = useParams();
  return (
    <StyledDetail>
      <Header />
      <Recipe recipeId={params.recipeId} />
    </StyledDetail>
  );
}

export default Detail;
