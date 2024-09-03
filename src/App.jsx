import { useState } from 'react';

import '@/index.css'
import '@/App.css'

import Header from '@pages/Header'
import Nav from '@pages/Nav'
import Article from '@pages/Article'

function App() {
  const menus = [
    { title: '음식 추천', changeMode: 'recommend' },
    { title: '레시피 목록', changeMode: 'recipeList' }
  ]
  const [mode, setMode] = useState('recommend');

  return (
    <div id='container'>
      {/* title */}
      <Header title='간편한 한끼' />
      {/* menu */}
      <Nav
        setMode={setMode}
        menus={menus}
      />
      {/* contents -> 랜덤, 레시피 목록, 레시피 상세보기 */}
      <Article mode={mode} setMode={setMode} />
    </div>
  )
}

export default App