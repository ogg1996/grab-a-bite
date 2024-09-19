import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;

  width: 200px;
  height: 200px;
  border: solid 1px #d4d7dc;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);

  cursor: pointer;

  img {
    width: 150px;
    height: 150px;
    border-radius: 5px;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 150px;
    height: 150px;
    border-radius: 5px;

    padding: 0 10px;

    color: white;
    background-color: black;

    font-size: 14px;
    text-align: justify;
  }
`;

function RecipeItem({ name, sumry, imgUrl, cookingTime }) {
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();
  return (
    <Item
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      onClick={() => navigate('/detail')}
    >
      {isHover ? (
        <div>
          <p>{sumry}</p>
          <p>조리시간 : {cookingTime}</p>
        </div>
      ) : (
        <img src={imgUrl} alt="음식" />
      )}
      <p>{name}</p>
    </Item>
  );
}

export default RecipeItem;
