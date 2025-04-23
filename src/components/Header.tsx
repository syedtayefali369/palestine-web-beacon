
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full bg-palestine-black py-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex flex-col">
            <span className="text-white font-bold text-xl md:text-2xl">Palestine Web Beacon</span>
            <span className="text-palestine-green text-sm">Standing for Truth and Justice</span>
          </div>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-palestine-green transition duration-200">Home</Link>
          <Link to="/#updates" className="text-white hover:text-palestine-green transition duration-200">Updates</Link>
          <Link to="/#education" className="text-white hover:text-palestine-green transition duration-200">Learn</Link>
          <Link to="/#help" className="text-white hover:text-palestine-green transition duration-200">Take Action</Link>
          <Link to="/#stories" className="text-white hover:text-palestine-green transition duration-200">Stories</Link>
        </nav>
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
