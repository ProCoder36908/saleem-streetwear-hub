
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Tees",
    emoji: "👕",
    description: "Clean fits, cool prints",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    name: "Hoodies",
    emoji: "🧥", 
    description: "Cozy vibes, street style",
    gradient: "from-orange-500 to-red-600"
  },
  {
    name: "Caps",
    emoji: "🧢",
    description: "Top off your look",
    gradient: "from-green-500 to-teal-600"
  },
  {
    name: "Watches",
    emoji: "⌚",
    description: "Time to flex",
    gradient: "from-purple-500 to-pink-600"
  }
];

const FeaturedCategories = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-white">Shop by</span>
          <span className="text-orange-500 ml-2">Vibe</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link key={index} to="/shop">
              <Card className="bg-black border-orange-500/20 hover:border-orange-500 transition-all duration-300 group cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20">
                <CardContent className="p-6 text-center">
                  <div className="text-6xl mb-4 group-hover:animate-bounce transition-all duration-300">
                    {category.emoji}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors">
                    {category.description}
                  </p>
                  <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                    <div className={`w-0 h-full bg-gradient-to-r ${category.gradient} group-hover:w-full transition-all duration-500`}></div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
