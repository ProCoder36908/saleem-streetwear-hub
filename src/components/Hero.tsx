
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-black via-orange-900/20 to-black py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
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
          <Button 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-black font-bold text-lg px-8 py-4"
          >
            Shop Now 🛍️
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black font-bold text-lg px-8 py-4"
          >
            Explore Collections
          </Button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-orange-500/20 text-6xl">🧢</div>
      <div className="absolute top-20 right-20 text-orange-500/20 text-6xl">👕</div>
      <div className="absolute bottom-10 left-20 text-orange-500/20 text-6xl">⌚</div>
    </section>
  );
};

export default Hero;
