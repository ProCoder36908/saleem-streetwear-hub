
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
    // Add toast notification here
  };

  return (
    <section className="py-16 bg-gradient-to-r from-orange-500/10 to-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Stay in the <span className="text-orange-500">Loop</span> 🔄
        </h2>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Get first dibs on new drops, exclusive discounts, and teen-only deals. 
          No cap, just pure fire delivered to your inbox! 📧🔥
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-4">
            <Input
              type="email"
              placeholder="your.email@cool.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-black border-orange-500/50 text-white placeholder:text-gray-400 focus:border-orange-500"
              required
            />
            <Button 
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-6"
            >
              Join! 🚀
            </Button>
          </div>
        </form>
        
        <p className="text-gray-400 text-sm mt-4">
          No spam, just the good stuff. Unsubscribe anytime. 😎
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
