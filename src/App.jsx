import { Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Home from '@pages/Home';
import Detail from '@pages/Detail';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    user-select: none;
  }
  html {
    width: 100%;
    max-width: 500px;
    min-height: 100vh;
    margin: 0 auto;
  }
  body {
    width: 100%;
    min-height: 100vh;
  }
  #root {
    display: flex;
    justify-content: center;
    min-height: 100vh;
  }
  .app{
    border: solid 1px #d4d7dc;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:recipeId" element={<Detail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
