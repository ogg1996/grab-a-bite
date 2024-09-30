import Header from '@components/common/Header';
import Nav from '@components/common/Nav';
import RecipeRecommend from '@components/home/RecipeRecommend';
import RecipeList from '@components/home/RecipeList';

import { useState } from 'react';
import styled from 'styled-components';
import { useJsonServerFetch } from '../assets/fetch';
import { basicPort } from '../assets/apiInfo';

const StyledHome = styled.div`
  display: flex;
  width: 500px;
  min-height: 100vh;
  flex-direction: column;

  & > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

function Home() {
  const menus = [
    { title: '음식추천', mode: 'recommend' },
    { title: '레시피목록', mode: 'recipeList' }
  ];
  const [mode, setMode] = useState('recommend');

  const { data: dataBasic } = useJsonServerFetch(basicPort);

  const changeMode = () => {
    return mode === 'recommend' ? (
      <RecipeRecommend data={dataBasic} />
    ) : (
      <RecipeList data={dataBasic} />
    );
  };

  return (
    <StyledHome>
      <div>
        <Header />
        <Nav menus={menus} setMode={setMode} />
      </div>
      {changeMode()}
    </StyledHome>
  );
}

export default Home;
