import { useState } from 'react';

import '@components/RecommendFood.css'

function RecommendFood() {
  const [isRecommend, setIsRecommend] = useState(false)
  const btnTexts = ['음.. 뭐 해 먹지? 추천해 줘!', '이거 먹기 싫은데.. 다시 추천해 줘!']

  let btnTextsIndex = 0;

  if (isRecommend) {
    btnTextsIndex = 1;
  } else {
    btnTextsIndex = 0;
  }

  return (
    <div id='recommend_food'>
      <button id='recommend_btn' onClick={() => {
        setIsRecommend(true)
      }}>{btnTexts[btnTextsIndex]}</button>
    </div>
  );
}

export default RecommendFood;