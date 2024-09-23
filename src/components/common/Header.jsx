import { useNavigate } from 'react-router-dom';
import logo from '@assets/logo.jpg';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  margin: 20px;
  cursor: pointer;

  & > img {
    width: 30px;
  }
  & > h1 {
    font-size: 30px;
  }
`;

function Header() {
  const navigate = useNavigate();

  return (
    <StyledHeader onClick={() => navigate('/')}>
      <img src={logo} alt="logo" />
      <h1>간편한 한끼</h1>
    </StyledHeader>
  );
}

export default Header;
