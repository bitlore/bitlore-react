import Link from 'next/link';

const Header = () => (
  <nav>
    <div>
      <Link href="/">
        <a>bit lore</a>
      </Link>
    </div>
    <div>
      <Link href="/about">
        <a>about</a>
      </Link>
    </div>
    <div>
      <Link href="/work">
        <a>work</a>
      </Link>
    </div>
    <div>
      <Link href="/contact">
        <a>contact</a>
      </Link>
    </div>
    <style jsx>{`
      nav {
      	display: flex;
      	justify-content: space-between;
      	margin: 0 auto;
      	height: 2em;
      	line-height: 2em;
      }

      nav div {
      	flex: 1;
      	position: relative;
      	padding: .5em 0 0 0;
      	user-select: none;
      }

      nav > div:not(.on) {
      	cursor: pointer;
      }

      nav > div::before {
      	content: '';
      	position: absolute;
      	width: 0;
      	height: 1.5em;
      	border-bottom: 1px solid #444;
      	transition: width .3s ease, border-color .3s;
      }

      nav > div:hover::before {
      	width: 80%;
      }

      nav > div.on::before {
      	width: 80%;
      	border-bottom-color: whitesmoke;
      }
      
      a {
        text-decoration: none;
      }
    `}</style>
  </nav>
);

export default Header;