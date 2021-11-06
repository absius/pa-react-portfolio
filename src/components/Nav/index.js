import React from 'react';

function Nav(props) {
  const {
    contactSelected,
    setContactSelected,
  } = props;


  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
           Patrick Abernathy
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2 nav-link">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className="mx-2 nav-link">
            <a data-testid="portfolio" href="#portfolio" onClick={() => setContactSelected(false)}>
              Portfolio
            </a>
          </li>
          <li className={`mx-2  nav-link`}>
            <a onClick={() => setContactSelected(true)}>Contact</a>
          </li>
          <li>
          <a className="nav-link" href="https://docs.google.com/document/d/13R8jblosfCbVu1Pygw7sdSjfAICJUPbn8bfQvYmwL0E/edit?usp=sharing" target="_blank">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
