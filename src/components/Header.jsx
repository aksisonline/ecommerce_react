import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
        Shopie
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-gray-300">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="hover:text-gray-300">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-gray-300">
              Cart
            </Link>
          </li>
          <li>
            <Link to="/account" className="hover:text-gray-300">
              Account
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
