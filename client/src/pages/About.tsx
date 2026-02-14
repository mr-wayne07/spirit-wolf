import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white">The Legend</h1>
            <div className="w-32 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="prose prose-invert prose-lg mx-auto font-light leading-relaxed text-muted-foreground text-center">
            <p>
              The Spirit Wolf is not merely a creature of myth, but a guardian of the ethereal boundaries between worlds.
              Born from the nebulae of distant galaxies, these celestial beings wander the cloudscapes of our dreams,
              guiding lost souls and protecting the sanctity of creativity.
            </p>
            <p>
              Our collection captures fleeting moments of their majestic existence. Each artwork is a window into a
              realm where magic is tangible and the air shimmers with stardust. By owning a Spirit Wolf NFT, you
              are not just buying art; you are becoming a keeper of the legend.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/5 text-center hover:bg-white/10 transition-colors">
              <h3 className="font-display text-2xl font-bold text-primary mb-4">Vision</h3>
              <p className="text-sm text-muted-foreground">To bridge the gap between digital ownership and spiritual artistic expression.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/5 text-center hover:bg-white/10 transition-colors">
              <h3 className="font-display text-2xl font-bold text-primary mb-4">Craft</h3>
              <p className="text-sm text-muted-foreground">Every piece is meticulously generated with high-fidelity algorithms and human curation.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/5 text-center hover:bg-white/10 transition-colors">
              <h3 className="font-display text-2xl font-bold text-primary mb-4">Community</h3>
              <p className="text-sm text-muted-foreground">Join a collective of dreamers, collectors, and visionaries united by beauty.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
