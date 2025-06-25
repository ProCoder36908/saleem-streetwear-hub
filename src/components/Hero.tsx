
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-black via-orange-900/20 to-black py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-white">Be Bold.</span>
          <br />
          <span className="text-orange-500">Be You.</span>
          <br />
          <span className="text-white">Be </span>
          <span className="text-orange-500">Usman Saleem.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          🔥 Streetwear that speaks your language. Drop fresh, stay legendary.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/shop">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-black font-bold text-lg px-8 py-4 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25"
            >
              Shop Now 🛍️
            </Button>
          </Link>
          <Link to="/shop">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black font-bold text-lg px-8 py-4 hover:scale-105 transition-all duration-300"
            >
              Explore Collections
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Animated floating elements */}
      <div className="absolute top-10 left-10 text-orange-500/20 text-6xl animate-bounce">🧢</div>
      <div className="absolute top-20 right-20 text-orange-500/20 text-6xl animate-pulse">👕</div>
      <div className="absolute bottom-10 left-20 text-orange-500/20 text-6xl animate-bounce delay-1000">⌚</div>
      <div className="absolute top-1/2 right-10 text-orange-500/20 text-4xl animate-pulse delay-500">🔥</div>
      
      {/* Floating background shapes */}
      <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-orange-500/10 rounded-full animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-orange-500/5 rounded-full animate-float delay-2000"></div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
