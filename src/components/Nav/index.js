import React from 'react';

function Nav(props) {

    const headings = ["About", "Portfolio", "Contact"];
    return (
      <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
           Patrick Abernathy
        </a>
      </h2>
      <nav>
      <ul>
        {headings.map((heading) => (
          <li key={heading}>
            <a
              href={"#" + heading.toLowerCase()}
              onClick={() => props.handlePageChange(heading)}
             
            >
              {heading}
            </a>
          </li>

        ))}
              <li>
                    <a className="nav-link" href="https://docs.google.com/document/d/13R8jblosfCbVu1Pygw7sdSjfAICJUPbn8bfQvYmwL0E/edit?usp=sharing" target="_blank">Resume</a>
                    </li>
      </ul>

      </nav>
    </header>
    );
  }

export default Nav