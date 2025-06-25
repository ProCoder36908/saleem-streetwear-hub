
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedCategories from "@/components/FeaturedCategories";
import FeaturedCollections from "@/components/FeaturedCollections";
import TrendingProducts from "@/components/TrendingProducts";
import SocialFeed from "@/components/SocialFeed";
import FlashSale from "@/components/FlashSale";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <FeaturedCategories />
      <FeaturedCollections />
      <TrendingProducts />
      <SocialFeed />
      <FlashSale />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
