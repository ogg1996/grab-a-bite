import '@pages/Nav.css'

function Nav({ setMode, menus }) {
  return (
    <nav>
      {menus.map((el) => {
        return (
          <div key={el.title} onClick={() => {
            setMode(el.changeMode)
          }}>{el.title}</div>
        );
      })}
    </nav>
  );
}

export default Nav;