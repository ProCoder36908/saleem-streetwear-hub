
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingBag, Search, User } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black border-b border-orange-500/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="text-orange-500">Usman</span>
            <span className="text-white ml-2">Saleem</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-orange-500 transition-colors">Shop</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Collections</a>
            <a href="#" className="hover:text-orange-500 transition-colors">About</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Contact</a>
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hover:text-orange-500">
              <Search size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-orange-500">
              <User size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-orange-500 relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-black text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 border-t border-orange-500/20 pt-4">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="hover:text-orange-500 transition-colors">Shop</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Collections</a>
              <a href="#" className="hover:text-orange-500 transition-colors">About</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Contact</a>
              <div className="flex items-center space-x-4 pt-4 border-t border-orange-500/20">
                <Button variant="ghost" size="icon" className="hover:text-orange-500">
                  <Search size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-orange-500">
                  <User size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-orange-500">
                  <ShoppingBag size={20} />
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
