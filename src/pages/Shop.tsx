
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, Heart, ShoppingBag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products = [
    // T-Shirts
    { id: 1, name: "Neon Vibes Tee", price: 25, category: "tshirts", image: "/placeholder.svg", emoji: "👕" },
    { id: 2, name: "Street Legend Tee", price: 28, category: "tshirts", image: "/placeholder.svg", emoji: "👕" },
    { id: 3, name: "Midnight Black Tee", price: 22, category: "tshirts", image: "/placeholder.svg", emoji: "👕" },
    { id: 4, name: "Fire Orange Tee", price: 30, category: "tshirts", image: "/placeholder.svg", emoji: "👕" },
    
    // Hoodies
    { id: 5, name: "Oversized Storm Hoodie", price: 65, category: "hoodies", image: "/placeholder.svg", emoji: "🧥" },
    { id: 6, name: "Zip-Up Energy Hoodie", price: 70, category: "hoodies", image: "/placeholder.svg", emoji: "🧥" },
    { id: 7, name: "Pullover Rebel Hoodie", price: 60, category: "hoodies", image: "/placeholder.svg", emoji: "🧥" },
    { id: 8, name: "Cropped Neon Hoodie", price: 55, category: "hoodies", image: "/placeholder.svg", emoji: "🧥" },
    
    // Caps
    { id: 9, name: "Snapback Fire Cap", price: 35, category: "caps", image: "/placeholder.svg", emoji: "🧢" },
    { id: 10, name: "Curved Brim Classic", price: 32, category: "caps", image: "/placeholder.svg", emoji: "🧢" },
    { id: 11, name: "Trucker Mesh Cap", price: 38, category: "caps", image: "/placeholder.svg", emoji: "🧢" },
    { id: 12, name: "Beanie Winter Vibes", price: 28, category: "caps", image: "/placeholder.svg", emoji: "🧢" },
    
    // Watches
    { id: 13, name: "Digital Sport Watch", price: 85, category: "watches", image: "/placeholder.svg", emoji: "⌚" },
    { id: 14, name: "Minimal Black Watch", price: 95, category: "watches", image: "/placeholder.svg", emoji: "⌚" },
    { id: 15, name: "Neon Glow Watch", price: 120, category: "watches", image: "/placeholder.svg", emoji: "⌚" },
    { id: 16, name: "Retro Digital Watch", price: 75, category: "watches", image: "/placeholder.svg", emoji: "⌚" },
    
    // Accessories
    { id: 17, name: "Chain Necklace", price: 45, category: "accessories", image: "/placeholder.svg", emoji: "🔥" },
    { id: 18, name: "Wrist Bands Set", price: 15, category: "accessories", image: "/placeholder.svg", emoji: "🔥" },
    { id: 19, name: "Phone Case Grip", price: 20, category: "accessories", image: "/placeholder.svg", emoji: "🔥" },
    { id: 20, name: "Sticker Pack", price: 8, category: "accessories", image: "/placeholder.svg", emoji: "🔥" },
  ];

  const categories = [
    { id: "all", name: "All Products", emoji: "🔥" },
    { id: "tshirts", name: "T-Shirts", emoji: "👕" },
    { id: "hoodies", name: "Hoodies", emoji: "🧥" },
    { id: "caps", name: "Caps", emoji: "🧢" },
    { id: "watches", name: "Watches", emoji: "⌚" },
    { id: "accessories", name: "Accessories", emoji: "🔥" },
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-orange-500">Shop</span>
            <span className="text-white"> Everything</span>
          </h1>
          <p className="text-gray-300 text-lg">Find your style, express yourself 🔥</p>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-orange-500/20 rounded-lg focus:border-orange-500 focus:outline-none text-white"
            />
          </div>
          <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black">
            <Filter size={20} className="mr-2" />
            Filters
          </Button>
        </div>

        {/* Category Tabs */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 bg-gray-900 border border-orange-500/20 mb-8">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-orange-500 data-[state=active]:text-black font-medium"
              >
                <span className="mr-1">{category.emoji}</span>
                <span className="hidden sm:inline">{category.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Products Grid */}
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="bg-gray-900 border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 group">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Button size="icon" variant="ghost" className="bg-black/50 hover:bg-orange-500 hover:text-black">
                            <Heart size={16} />
                          </Button>
                        </div>
                        <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-2xl">{product.emoji}</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-white mb-2">{product.name}</h3>
                        <div className="flex items-center justify-between">
                          <span className="text-orange-500 font-bold text-lg">${product.price}</span>
                          <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-black">
                            <ShoppingBag size={16} className="mr-1" />
                            Add
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-8 py-3">
            Load More Products 🔥
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
