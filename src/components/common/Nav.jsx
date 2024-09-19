import styled from 'styled-components';

const Navigation = styled.nav`
  display: flex;
  gap: 20px;
  padding: 20px;
  div {
    flex-grow: 1;
    font-size: 20px;
    color: #cccccc;
    text-align: center;
    cursor: pointer;
  }
`;

function Nav({ menus, setMode }) {
  return (
    <Navigation>
      {menus.map(el => {
        return (
          <div key={el.title} onClick={() => setMode(el.mode)}>
            {el.title}
          </div>
        );
      })}
    </Navigation>
  );
}

export default Nav;
