import Link from "next/link";
import { withRouter } from "next/router";

const Navbar = ({router}) => {
  console.log(router);

  const navs = [
    { text: 'Home', href: '/'},
    { text: 'About', href: '/about'},
    { text: 'Portfolio', href: '/portfolio'},
    { text: 'Contact', href: '/contact'},
  ]
    return (
        <nav className='navbar'>
        <div className='container'>
          <Link href='/' className='logo'>Fadil.</Link>

          <ul className='nav-links'>
            { navs.map(nav => (
              <li key={nav.text}><Link href={nav.href} legacyBehavior><a className={`nav-item ${router.pathname == nav.href ? 'active' : ''}`}>{nav.text}</a></Link></li>
            )) }
          </ul>
        </div>
      </nav>
    )
}

export default withRouter(Navbar);