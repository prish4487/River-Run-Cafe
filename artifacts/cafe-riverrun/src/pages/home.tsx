import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Coffee, Leaf, Wind, Utensils, Clock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/8638746243";

const openWhatsApp = () => {
  window.open(WHATSAPP_URL, "_blank");
};

const FadeIn = ({ children, delay = 0, direction = "up" }: { children: React.ReactNode, delay?: number, direction?: "up" | "down" | "left" | "right" | "none" }) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 300]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="text-xl font-serif text-primary" data-testid="logo">Cafe Riverrun</div>
        <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-primary/80">
          <a href="#story" className="hover:text-primary transition-colors">Story</a>
          <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
          <a href="#menu" className="hover:text-primary transition-colors">Menu</a>
          <a href="#testimonials" className="hover:text-primary transition-colors">Voices</a>
        </div>
        <Button 
          variant="default" 
          className="bg-primary text-primary-foreground hover:bg-primary/90 font-serif tracking-wide rounded-none px-6"
          onClick={openWhatsApp}
          data-testid="nav-reserve-button"
        >
          Reserve
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="/images/hero.png" 
            alt="Cafe Riverrun Interior" 
            className="w-full h-full object-cover object-center"
            data-testid="hero-image"
          />
        </motion.div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-20">
          <FadeIn delay={0.2}>
            <span className="block text-sm md:text-base uppercase tracking-[0.3em] mb-6 text-white/80">
              A haven by the water
            </span>
          </FadeIn>
          <FadeIn delay={0.4}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-tight">
              Slow down.<br />
              <span className="italic text-secondary">Sip slowly.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              Where the tranquility of riverside living meets the warmth of a premium coffee experience.
            </p>
          </FadeIn>
          <FadeIn delay={0.8}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg"
                className="bg-secondary text-primary hover:bg-secondary/90 rounded-none px-8 py-6 text-lg font-serif tracking-wide w-full sm:w-auto"
                onClick={openWhatsApp}
                data-testid="hero-order-button"
              >
                Order Now
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary rounded-none px-8 py-6 text-lg font-serif tracking-wide w-full sm:w-auto transition-colors"
                onClick={openWhatsApp}
                data-testid="hero-reserve-button"
              >
                Reserve a Seat
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Introduction / Story */}
      <section id="story" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-serif text-primary mb-8 leading-tight">
                Crafted for the <br /><span className="italic text-accent">discerning soul</span>.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Cafe Riverrun was born from a simple desire: to create a space where time feels suspended. Surrounded by moss-covered stone walls and the gentle murmur of the river, every cup we pour is an invitation to pause.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that premium isn't about being pretentious. It's about intentionality. From the shape of our ceramic cups to the ambient light filtering through the canopy, every detail has been considered to bring you quiet luxury.
              </p>
            </FadeIn>
          </div>
          <div className="relative">
            <FadeIn direction="left" delay={0.3}>
              <div className="aspect-[4/5] relative overflow-hidden bg-muted">
                <img 
                  src="/images/coffee-prep.png" 
                  alt="Coffee preparation" 
                  className="w-full h-full object-cover"
                  data-testid="story-image"
                />
                <div className="absolute inset-0 border border-primary/20 m-4 pointer-events-none" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* The Experience */}
      <section id="experience" className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif mb-4">The Elements of Riverrun</h2>
              <p className="text-primary-foreground/70 max-w-2xl mx-auto">An ecosystem designed for reflection.</p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              { icon: Coffee, title: "Artisan Roasts", desc: "Sourced globally, roasted locally. Each bean tells a story of its origin." },
              { icon: Leaf, title: "Botanical Ambiance", desc: "Lush greenery and moss accents bringing the forest indoors." },
              { icon: Wind, title: "Riverside Breeze", desc: "Open architecture that invites the gentle river wind and natural acoustics." },
              { icon: Utensils, title: "Curated Bites", desc: "Pastries and light fare crafted to complement, not overpower, your drink." }
            ].map((feature, i) => (
              <FadeIn key={i} delay={0.1 * i} direction="up">
                <div className="flex flex-col items-center text-center group" data-testid={`feature-card-${i}`}>
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-secondary/10 text-secondary mb-6 group-hover:scale-110 transition-transform duration-500">
                    <feature.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-serif mb-3">{feature.title}</h3>
                  <p className="text-primary-foreground/60 leading-relaxed font-light">{feature.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Menu */}
      <section id="menu" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif text-primary mb-4">A Taste of Serenity</h2>
              <p className="text-muted-foreground text-lg">Highlights from our seasonal offerings.</p>
            </div>
            <Button 
              variant="link" 
              className="text-accent hover:text-accent/80 p-0 h-auto font-serif text-lg flex items-center gap-2 group"
              onClick={openWhatsApp}
              data-testid="menu-view-all-button"
            >
              Order Full Menu <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          {[
            { name: "The Riverrun Pour Over", price: "$8", desc: "Our signature blend, notes of dark chocolate, wild berries, and cedar. Served with a river-washed stone coaster." },
            { name: "Forest Canopy Matcha", price: "$7", desc: "Ceremonial grade matcha whisked with oat milk, lightly sweetened with maple syrup." },
            { name: "Cardamom Cortado", price: "$6", desc: "Equal parts espresso and steamed milk, infused with crushed green cardamom pods." },
            { name: "Moss Glade Tart", price: "$9", desc: "Pistachio and almond tartlet with a delicate white chocolate ganache." }
          ].map((item, i) => (
            <FadeIn key={i} delay={0.1 * i}>
              <div className="group border-b border-border/50 pb-6" data-testid={`menu-item-${i}`}>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-xl font-serif text-primary group-hover:text-accent transition-colors">{item.name}</h3>
                  <span className="text-secondary font-serif text-lg">{item.price}</span>
                </div>
                <p className="text-muted-foreground font-light leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif text-primary mb-4">Voices of the River</h2>
              <p className="text-muted-foreground">What our guests say about their time with us.</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { quote: "The most serene café I've ever visited. The pour over is exceptional, but the atmosphere—the deep greens, the sound of the water—is why I return every week.", author: "Elena M." },
              { quote: "It doesn't feel like a coffee shop; it feels like a sanctuary. The attention to detail in the cups, the lighting, and the service is unmatched.", author: "James R." },
              { quote: "A rare find. They manage to deliver a truly premium coffee experience without any of the pretension. The Cardamom Cortado is a masterpiece.", author: "Sarah L." },
              { quote: "I came to read a book for an hour and stayed for three. Time moves differently at Riverrun. It's the perfect escape from the city noise.", author: "David K." }
            ].map((review, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="bg-background p-8 border border-border/30 hover:border-accent/30 transition-colors h-full flex flex-col justify-between" data-testid={`testimonial-card-${i}`}>
                  <p className="text-lg text-primary/80 font-serif italic leading-relaxed mb-8">
                    "{review.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-serif">
                      {review.author.charAt(0)}
                    </div>
                    <span className="font-medium text-primary tracking-wide text-sm uppercase">{review.author}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 md:px-12 relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-serif mb-8">Your table awaits.</h2>
            <p className="text-xl text-primary-foreground/80 mb-12 font-light max-w-2xl mx-auto">
              Join us by the river. Whether for a quick espresso or an afternoon of quiet reflection, we're ready to welcome you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                size="lg"
                className="bg-secondary text-primary hover:bg-secondary/90 rounded-none px-10 py-7 text-lg font-serif tracking-wide w-full sm:w-auto shadow-lg"
                onClick={openWhatsApp}
                data-testid="cta-reserve-button"
              >
                Reserve a Seat
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-none px-10 py-7 text-lg font-serif tracking-wide w-full sm:w-auto transition-colors"
                onClick={openWhatsApp}
                data-testid="cta-order-button"
              >
                Order for Pickup
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-16 px-6 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <h3 className="text-2xl font-serif text-primary mb-6">Cafe Riverrun</h3>
            <p className="text-muted-foreground font-light max-w-xs leading-relaxed">
              A sophisticated haven blending the tranquility of riverside living with premium coffee craft.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-primary">Visit Us</h4>
            <div className="flex items-start gap-3 text-muted-foreground font-light">
              <MapPin size={18} className="mt-1 text-accent flex-shrink-0" />
              <span>124 Riverside Walk<br />Forest District, FD 90210</span>
            </div>
            <div className="flex items-start gap-3 text-muted-foreground font-light mt-2">
              <Clock size={18} className="mt-1 text-accent flex-shrink-0" />
              <span>Tue - Sun: 7:00 AM - 6:00 PM<br />Monday: Closed for roasting</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-4 md:items-end">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-primary">Connect</h4>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors font-light">Instagram</a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors font-light">Journal</a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors font-light">Careers</a>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground/70 font-light">
          <p>&copy; {new Date().getFullYear()} Cafe Riverrun. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}