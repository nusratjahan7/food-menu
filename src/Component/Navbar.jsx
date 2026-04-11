// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-gray-950 backdrop-blur-md ">
      <div className="container flex items-center justify-between h-16 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <span className="font-heading text-xl font-bold text-foreground">
          <span role="img" aria-label="logo">🍽️</span> PhiLab Kitchen
        </span>
        {/* Menu Link */}
        <Link href="/" className="text-sm text-gray-500 font-medium hover:text-white">        
            Our Menu       
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;