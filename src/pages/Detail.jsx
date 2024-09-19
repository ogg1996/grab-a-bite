import Header from '@components/common/Header';
import Recipe from '@components/detail/Recipe';
import { useEffect } from 'react';
import styled from 'styled-components';

const StyledDetail = styled.div`
  display: flex;
  width: 500px;
  min-height: 100vh;
  flex-direction: column;
`;

function Detail() {
  useEffect(() => {});

  return (
    <StyledDetail>
      <Header />
      <Recipe />
    </StyledDetail>
  );
}

export default Detail;
