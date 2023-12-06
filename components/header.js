import * as React from 'react'
import NavLink from './nav-link'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <NavLink activeClassName="on" href="/">
          <div>
            <p>bit lore</p>
          </div>
        </NavLink>
        <NavLink activeClassName="on" href="/about">
          <div>
            <p>about</p>
          </div>
        </NavLink>
        <NavLink activeClassName="on" href="/work">
          <div>
            <p>work</p>
          </div>
        </NavLink>
        <NavLink activeClassName="on" href="/contact">
          <div>
            <p>contact</p>
          </div>
        </NavLink>
        <style jsx>{`
          nav {
            display: flex;
            justify-content: space-between;
            margin: 0 auto;
            line-height: 2em;
          }
          p {
            margin-top: 0;
            margin-bottom: 0;
          }
          div {
            flex: 1;
            position: relative;
            padding: 0.5em 0 0 0;
            user-select: none;
          }
          div:not(.on) {
            cursor: pointer;
          }
          div::before {
            content: '';
            position: absolute;
            width: 0;
            height: 1.5em;
            border-bottom: 1px solid #444;
            transition: width .3s ease, border-color .3s;
          }
          div:hover::before {
            width: 80%;
          }
          div.on::before {
            width: 80%;
            border-bottom-color: whitesmoke;
          }

          @media only screen and (max-width:600px) {
            nav {
                text-align: center;
            }
            div::before {
              left: 0;
            }
            div.on::before {
              width: 100%;
            }
          }
        `}</style>
      </nav>
    );
  }  
}

export default Header;