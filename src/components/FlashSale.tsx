
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const FlashSale = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const products = [
    { name: "Oversized Hoodie 🔥", price: "$45", originalPrice: "$65", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=300&fit=crop" },
    { name: "Snapback Cap 🧢", price: "$20", originalPrice: "$30", image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=300&h=300&fit=crop" },
    { name: "Graphic Tee ⚡", price: "$25", originalPrice: "$35", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop" },
    { name: "Digital Watch ⌚", price: "$35", originalPrice: "$50", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=300&h=300&fit=crop" }
  ];

  return (
    <section className="py-16 bg-orange-500/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ⚡ <span className="text-orange-500">Flash Sale</span> ⚡
          </h2>
          <p className="text-gray-300 text-lg mb-6">Limited time offers that'll make you go WOW! 🤯</p>
          
          {/* Countdown Timer */}
          <div className="flex justify-center gap-4 mb-8">
            <div className="bg-orange-500 text-black rounded-lg p-3 min-w-[60px]">
              <div className="text-2xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
              <div className="text-xs">HOURS</div>
            </div>
            <div className="bg-orange-500 text-black rounded-lg p-3 min-w-[60px]">
              <div className="text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
              <div className="text-xs">MINS</div>
            </div>
            <div className="bg-orange-500 text-black rounded-lg p-3 min-w-[60px]">
              <div className="text-2xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
              <div className="text-xs">SECS</div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="bg-black border-orange-500/30 hover:border-orange-500 transition-all group">
              <CardContent className="p-4">
                <div className="relative mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-40 object-cover rounded-lg group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    SALE
                  </div>
                </div>
                <h3 className="font-bold text-white mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-orange-500 font-bold text-lg">{product.price}</span>
                  <span className="text-gray-400 line-through text-sm">{product.originalPrice}</span>
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold">
                  Grab It! 🔥
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
