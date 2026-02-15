import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { useProducts } from "@/hooks/use-products";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronDown } from "lucide-react";

export default function Home() {
  const { data: products, isLoading } = useProducts();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToCollection = () => {
    document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center">
        {/* Parallax Background */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background z-10" />
          <div className="absolute inset-0 bg-black/40 z-10" />
          {/* Main Hero Image - Spirit Wolf */}
          <img 
            src={`${import.meta.env.BASE_URL}images/spirit-wolf-hero.png`} 
            alt="Spirit Wolf" 
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Hero Content */}
        <motion.div 
          style={{ opacity }}
          className="relative z-20 text-center px-4 max-w-4xl mx-auto space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight text-white mb-2 text-glow">
              SPIRIT WOLF
            </h1>
            <p className="text-xl md:text-2xl font-light tracking-widest text-primary/90 font-display">
              ETHEREAL DIGITAL COLLECTIBLES
            </p>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-muted-foreground max-w-xl mx-auto text-lg leading-relaxed"
          >
            Enter a realm where myth meets digital artistry. Own a piece of the ethereal world with our exclusive NFT collection.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="pt-8"
          >
            <Button 
              onClick={scrollToCollection}
              variant="outline" 
              className="border-primary/50 text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg rounded-full backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
            >
              Explore Collection
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-white/50" />
        </motion.div>
      </section>

      {/* Featured Collection */}
      <section id="collection" className="py-24 px-4 relative">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
        <div className="absolute pointer-events-none inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(139,92,246,0.05),transparent_40%)]" />

        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">The Collection</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full opacity-70" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each piece is a unique window into the spirit realm, meticulously crafted and verifiable on the blockchain.
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="aspect-[4/5] w-full rounded-xl bg-white/5" />
                  <div className="space-y-2">
                    <Skeleton className="h-6 w-3/4 bg-white/5" />
                    <Skeleton className="h-4 w-full bg-white/5" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products?.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>
      
      <footer className="py-12 border-t border-white/5 bg-black/40">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-display text-2xl font-bold tracking-widest text-white mb-4">SPIRIT WOLF</h3>
          <p className="text-muted-foreground text-sm mb-8">© 2024 Spirit Wolf NFT Store. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            {/* Social icons or links could go here */}
          </div>
        </div>
      </footer>
    </div>
  );
}
