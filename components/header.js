import NavLink from './nav-link';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <NavLink activeClassName="on" href="/">
          <div>
            <a>bit lore</a>
          </div>
        </NavLink>
        <NavLink activeClassName="on" href="/about">
          <div>
            <a>about</a>
          </div>
        </NavLink>
        <NavLink activeClassName="on" href="/work">
          <div>
            <a>work</a>
          </div>
        </NavLink>
        <NavLink activeClassName="on" href="/contact">
          <div>
            <a>contact</a>
          </div>
        </NavLink>
        <style jsx>{`
          nav {
            display: flex;
            justify-content: space-between;
            margin: 0 auto;
            height: 2em;
            line-height: 2em;
          }
          
          @media only screen and (max-width:600px) {
            nav {
              text-align: center;
            }
          }
          
          a {
            text-decoration: none;
            display: inline-block;
            width: 80%;
          }
          div {
            flex: 1;
            position: relative;
            padding: .5em 0 0 0;
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
            div:first-child {
              text-align: left;
            }
            div:last-child {
              text-align: right;
            }
          }
        `}</style>
      </nav>
    );
  }  
}

export default Header;