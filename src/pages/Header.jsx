import '@pages/Header.css'

function Header({ title }) {
  return (
    <header>
      <img id='logo' src="src\assets\icon.jpg" alt="사이트 로고" />
      <h1 id='title'>{title}</h1>
    </header>
  );
}

export default Header;