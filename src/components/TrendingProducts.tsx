
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";

const trendingProducts = [
  { id: 1, name: "Neon Nights Tee", price: 28, image: "/placeholder.svg", category: "T-Shirts", emoji: "👕" },
  { id: 2, name: "Oversized Storm Hoodie", price: 65, image: "/placeholder.svg", category: "Hoodies", emoji: "🧥" },
  { id: 3, name: "Fire Snapback", price: 35, image: "/placeholder.svg", category: "Caps", emoji: "🧢" },
  { id: 4, name: "Digital Flex Watch", price: 85, image: "/placeholder.svg", category: "Watches", emoji: "⌚" },
  { id: 5, name: "Street Legend Tee", price: 30, image: "/placeholder.svg", category: "T-Shirts", emoji: "👕" },
  { id: 6, name: "Zip Energy Hoodie", price: 70, image: "/placeholder.svg", category: "Hoodies", emoji: "🧥" },
];

const TrendingProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedProducts, setLikedProducts] = useState<number[]>([]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(trendingProducts.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(trendingProducts.length / 3)) % Math.ceil(trendingProducts.length / 3));
  };

  const toggleLike = (productId: number) => {
    setLikedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const visibleProducts = trendingProducts.slice(currentIndex * 3, (currentIndex + 1) * 3);

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-orange-500">Trending</span>
            <span className="text-white ml-2">Right Now 🔥</span>
          </h2>
          
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="border-orange-500/30 hover:border-orange-500 hover:bg-orange-500/10"
            >
              <ChevronLeft size={20} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="border-orange-500/30 hover:border-orange-500 hover:bg-orange-500/10"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleProducts.map((product) => (
            <Card key={product.id} className="bg-gray-900 border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 group overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => toggleLike(product.id)}
                      className={`bg-black/50 hover:bg-black/70 ${
                        likedProducts.includes(product.id) 
                          ? 'text-red-500 hover:text-red-400' 
                          : 'text-white hover:text-orange-500'
                      }`}
                    >
                      <Heart size={16} fill={likedProducts.includes(product.id) ? 'currentColor' : 'none'} />
                    </Button>
                  </div>
                  
                  <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-2xl animate-pulse">{product.emoji}</span>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-orange-500/70 text-sm font-medium">{product.category}</span>
                    <span className="text-orange-500 font-bold text-lg">${product.price}</span>
                  </div>
                  <h3 className="font-semibold text-white mb-3 group-hover:text-orange-500 transition-colors">
                    {product.name}
                  </h3>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold hover:scale-105 transition-all duration-300">
                    <ShoppingBag size={16} className="mr-2" />
                    Quick Add
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
