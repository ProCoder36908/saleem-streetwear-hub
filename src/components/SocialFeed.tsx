
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, ExternalLink } from "lucide-react";

const socialPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
    username: "@teen_styler",
    caption: "Fire fit with the new Usman Saleem drop! 🔥"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=300&fit=crop",
    username: "@street_vibes",
    caption: "Hoodie season is here! ❄️"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=300&h=300&fit=crop",
    username: "@minimal_mood",
    caption: "Clean and simple. Just how I like it ⚪"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop",
    username: "@urban_legend",
    caption: "Flexing in my new watch ⌚"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=300&fit=crop",
    username: "@style_queen",
    caption: "Obsessed with this cap collection! 🧢"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=300&h=300&fit=crop",
    username: "@trendy_teen",
    caption: "Usman Saleem never misses! 🎯"
  }
];

const SocialFeed = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Styled by</span>
            <span className="text-orange-500 ml-2">You</span>
          </h2>
          <p className="text-gray-400 text-lg mb-6">
            See how our community rocks Usman Saleem pieces
          </p>
          <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold px-6 py-3 hover:scale-105 transition-all duration-300">
            <Instagram size={20} className="mr-2" />
            Tag us #UsmanSaleem
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {socialPosts.map((post) => (
            <Card key={post.id} className="bg-black border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 group cursor-pointer overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={post.image}
                    alt={`Post by ${post.username}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="icon" variant="ghost" className="bg-black/50 hover:bg-orange-500/80 text-white">
                      <ExternalLink size={16} />
                    </Button>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-semibold mb-1">{post.username}</p>
                    <p className="text-xs text-gray-300 line-clamp-2">{post.caption}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;
