import "./HeaderComponent.css"

function HeaderComponent(props) {
  const { greetings, links } = props;

  return (
    <header className="header">
      <h1 className="title">{greetings}</h1>
      <nav>
        <ul className="header-list">
          <li className="link"><a href="#">{links.home}</a></li>
            <li className="link"><a href="#">{links.about}</a></li>
            <li className="link"><a href="#">{links.contact}</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderComponent;