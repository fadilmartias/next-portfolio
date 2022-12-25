import Link from "next/link";

const Navbar = () => {
    return (
        <nav className='navbar'>
        <div className='container'>
          <Link href='/' className='logo'>Fadil.</Link>

          <ul className='nav-links'>
            <li><Link href='/' legacyBehavior><a className='nav-item active'>Home</a></Link></li>
            <li><Link href='/portfolio' legacyBehavior><a className='nav-item'>Portfolio</a></Link></li>
            <li><Link href='/about' legacyBehavior><a className='nav-item'>About</a></Link></li>
            <li><Link href='/contact' legacyBehavior><a className='nav-item'>Contact</a></Link></li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar;