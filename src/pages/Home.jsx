import Header from '@components/common/Header';
import Nav from '@components/common/Nav';
import RecipeRecommend from '@components/home/RecipeRecommend';
import RecipeList from '@components/home/RecipeList';
import imgData from '@/assets/data_img.json';

import { useEffect, useState } from 'react';
import styled from 'styled-components';

const HomeCss = styled.div`
  display: flex;
  width: 500px;
  min-height: 100vh;
  flex-direction: column;

  .header {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;
function Home() {
  const menus = [
    { title: '음식추천', mode: 'recommend' },
    { title: '레시피목록', mode: 'recipeList' }
  ];
  const [mode, setMode] = useState('recommend');
  const [data, setData] = useState(null);

  useEffect(() => {
    const apiKey =
      '5665c5ba7985aef70563466f7b456b620e9747ab775744842534a47b1621ea04';
    let url = `/api/openapi/${apiKey}/json/Grid_20150827000000000226_1/1/537`;

    fetch(url)
      .then(res => res.json())
      .then(res => [...res.Grid_20150827000000000226_1.row])
      .then(res => {
        setData(
          res.map(el => {
            return {
              ...el,
              IMG_URL: imgData[el.ROW_NUM - 1].IMG_URL
            };
          })
        );
      });
  }, []);

  const changeMode = () => {
    return mode === 'recommend' ? (
      <RecipeRecommend data={data} />
    ) : (
      <RecipeList data={data} />
    );
  };

  return (
    <HomeCss>
      <div className="header">
        <Header />
        <Nav menus={menus} setMode={setMode} />
      </div>
      {changeMode()}
    </HomeCss>
  );
}

export default Home;
