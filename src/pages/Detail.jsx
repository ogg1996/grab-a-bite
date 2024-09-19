import Header from '@components/common/Header';
import Recipe from '@components/detail/Recipe';
import styled from 'styled-components';

const DetailCSS = styled.div`
  display: flex;
  width: 500px;
  min-height: 100vh;
  flex-direction: column;
`;

function Detail() {
  return (
    <DetailCSS>
      <Header />
      <Recipe />
    </DetailCSS>
  );
}

export default Detail;
