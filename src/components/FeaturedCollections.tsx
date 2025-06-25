
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const collections = [
  {
    title: "Summer Heat 🔥",
    description: "Lightweight tees & caps for those hot vibes",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
    items: "25+ items"
  },
  {
    title: "Street Vibes 🏙️",
    description: "Hoodies & streetwear for urban legends",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=300&fit=crop",
    items: "30+ items"
  },
  {
    title: "Minimal Mood ⚪",
    description: "Clean designs for the aesthetic kings & queens",
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=300&fit=crop",
    items: "15+ items"
  }
];

const FeaturedCollections = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-orange-500">Featured</span> Collections
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Card key={index} className="bg-black border-orange-500/30 hover:border-orange-500 transition-colors group cursor-pointer">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={collection.image} 
                    alt={collection.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{collection.title}</h3>
                    <p className="text-gray-300 text-sm mb-2">{collection.description}</p>
                    <span className="text-orange-500 text-sm font-semibold">{collection.items}</span>
                  </div>
                </div>
                <div className="p-4">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold">
                    Explore Collection
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

export default FeaturedCollections;
