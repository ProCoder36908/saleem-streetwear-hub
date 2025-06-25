
const Footer = () => {
  return (
    <footer className="bg-black border-t border-orange-500/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-orange-500">Usman</span>
              <span className="text-white ml-2">Saleem</span>
            </div>
            <p className="text-gray-400 mb-4">
              Started by teens, for teens. 🌟<br />
              Dropping heat, not hype.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">📱</a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">📸</a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">🐦</a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">💬</a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-white font-bold mb-4">Shop 🛍️</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-orange-500 transition-colors">T-Shirts</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Hoodies</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Caps</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Watches</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Sale Items 🔥</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold mb-4">Support 💬</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-white font-bold mb-4">About 📖</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Teen Community</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Ambassador Program</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-orange-500/20 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Usman Saleem. All rights reserved. Made with 💫 for the next generation.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
