import "./HeaderComponent.css"

function HeaderComponent() {
  return (
    <header className="header">
      <h1 className="title">Header Component</h1>
      <nav>
        <ul className="header-list">
          <li className="link"><a href="#">Home</a></li>
            <li className="link"><a href="#">About</a></li>
            <li className="link"><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderComponent;