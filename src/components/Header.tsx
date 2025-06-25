
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ShoppingBag, Search, User, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    { name: "T-Shirts", emoji: "👕" },
    { name: "Hoodies", emoji: "🧥" },
    { name: "Caps", emoji: "🧢" },
    { name: "Watches", emoji: "⌚" },
    { name: "Accessories", emoji: "🔥" },
  ];

  return (
    <header className="bg-black border-b border-orange-500/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            <span className="text-orange-500">Usman</span>
            <span className="text-white ml-2">Saleem</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="hover:text-orange-500 transition-colors flex items-center gap-1"
                >
                  Shop <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black border-orange-500/20 text-white min-w-[200px]">
                {categories.map((category) => (
                  <DropdownMenuItem 
                    key={category.name}
                    className="hover:bg-orange-500/10 focus:bg-orange-500/10 cursor-pointer"
                    asChild
                  >
                    <Link to="/shop">
                      <span className="mr-2">{category.emoji}</span>
                      {category.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator className="bg-orange-500/20" />
                <DropdownMenuItem className="hover:bg-orange-500/10 focus:bg-orange-500/10 cursor-pointer" asChild>
                  <Link to="/shop">
                    <span className="mr-2">🔥</span>
                    All Products
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="#" className="hover:text-orange-500 transition-colors">New Drops</a>
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
              <div className="space-y-2">
                <div className="text-orange-500 font-semibold">Shop Categories:</div>
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    to="/shop" 
                    className="hover:text-orange-500 transition-colors flex items-center gap-2 pl-4"
                  >
                    <span>{category.emoji}</span>
                    {category.name}
                  </Link>
                ))}
              </div>
              <a href="#" className="hover:text-orange-500 transition-colors">New Drops</a>
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
