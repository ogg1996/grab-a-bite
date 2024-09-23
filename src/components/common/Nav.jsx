import styled from 'styled-components';

const StyeldNav = styled.nav`
  display: flex;
  gap: 20px;
  padding: 20px;

  & > button {
    flex-grow: 1;
    font-size: 20px;
    color: #cccccc;
    text-align: center;
    background-color: white;
    border: none;
    cursor: pointer;
  }
`;

function Nav({ menus, setMode }) {
  return (
    <StyeldNav>
      {menus.map(el => {
        return (
          <button
            type="button"
            key={el.title}
            onClick={() => setMode(el.mode)}
          >
            {el.title}
          </button>
        );
      })}
    </StyeldNav>
  );
}

export default Nav;
