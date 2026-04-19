import React, { useState, useEffect } from 'react';
import { 
  Coffee, 
  Trophy, 
  BookOpen, 
  Wallet, 
  Menu, 
  X, 
  ChevronRight, 
  MapPin, 
  Wifi, 
  Zap, 
  Volume2, 
  VolumeX, 
  Users, 
  Star,
  Github,
  Instagram,
  Twitter,
  Facebook
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface CardData {
  id: string;
  name: string;
  neighborhood: string;
  priceRange?: string;
  tags: string[];
  icon: React.ReactNode;
  details: string[];
  location?: string;
  atmosphere?: string;
  cost?: string;
  quietLevel?: string;
  wifi?: boolean;
  outlets?: boolean;
}

// --- Data ---
const CAFES_DATA: CardData[] = [
  {
    id: 'cafe-1',
    name: 'Tomoca Coffee',
    neighborhood: 'Piassa',
    priceRange: '200 - 400 ETB',
    tags: ['Legendary', 'Authentic'],
    icon: <Coffee className="w-5 h-5" />,
    details: ['Best Macchiato', 'Historic Vibe']
  },
  {
    id: 'cafe-2',
    name: 'Kaldi\'s Coffee',
    neighborhood: 'Bole',
    priceRange: '300 - 600 ETB',
    tags: ['Free WiFi', 'Cozy'],
    icon: <Coffee className="w-5 h-5" />,
    details: ['Community Hub', 'Extensive Menu']
  },
  {
    id: 'cafe-3',
    name: 'Mojo Coffee',
    neighborhood: 'Sarbet',
    priceRange: '250 - 500 ETB',
    tags: ['Artistic', 'Garden'],
    icon: <Coffee className="w-5 h-5" />,
    details: ['Quiet Atmosphere', 'Roastery']
  }
];

const FOOTBALL_DATA: CardData[] = [
  {
    id: 'foot-1',
    name: 'The Vault',
    neighborhood: 'Bole Medhanealem',
    atmosphere: 'Loud Crowd',
    tags: ['Premier League', 'Social'],
    icon: <Trophy className="w-5 h-5" />,
    details: ['Giant Screens', 'Great Snacks'],
    location: 'Near Medhanealem Mall'
  },
  {
    id: 'foot-2',
    name: 'Cheers Bar',
    neighborhood: 'Atlas',
    atmosphere: 'Energetic',
    tags: ['Champions League', 'Big Screens'],
    icon: <Trophy className="w-5 h-5" />,
    details: ['Draft Beer', 'Intense Vibes'],
    location: 'Atlas Area'
  }
];

const STUDY_DATA: CardData[] = [
  {
    id: 'study-1',
    name: 'Wired Cafe',
    neighborhood: 'Kazanchis',
    quietLevel: 'Very Quiet',
    wifi: true,
    outlets: true,
    tags: ['Digital Nomad', 'Fast WiFi'],
    icon: <BookOpen className="w-5 h-5" />,
    details: ['Productive', 'Laptop Friendly']
  },
  {
    id: 'study-2',
    name: 'Abyssinia Library Space',
    neighborhood: 'Bole Road',
    quietLevel: 'Silent',
    wifi: true,
    outlets: true,
    tags: ['Deep Work', 'Peaceful'],
    icon: <BookOpen className="w-5 h-5" />,
    details: ['Dedicated Desks', 'Filter Coffee']
  }
];

const BUDGET_DATA: CardData[] = [
  {
    id: 'budget-1',
    name: 'Yod Abyssinia (Lunch)',
    neighborhood: 'Bole',
    cost: '200 - 450 ETB',
    tags: ['Cultural', 'Large Groups'],
    icon: <Wallet className="w-5 h-5" />,
    details: ['Traditional Buffet', 'Affordable Lunch']
  },
  {
    id: 'budget-2',
    name: 'Shola Market Street Food',
    neighborhood: 'Shola',
    cost: '100 - 250 ETB',
    tags: ['Cheap Eats', 'Authentic'],
    icon: <Wallet className="w-5 h-5" />,
    details: ['Best Sambusas', 'Vibrant Scene']
  }
];

// --- Components ---

const NavItem = ({ href, label, onClick }: { href: string, label: string, onClick?: () => void, key?: string }) => (
  <a 
    href={href} 
    onClick={onClick}
    className="nav-link-artistic"
  >
    {label}
  </a>
);

const SectionHeading = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="mb-10">
    <h2 className="text-2xl font-bold text-ink mb-2 uppercase tracking-tight">{title}</h2>
    <div className="w-12 h-1 bg-primary rounded-full mb-4" />
    <p className="text-slate-500 text-sm max-w-xl">{subtitle}</p>
  </div>
);

const CardItem = ({ label, value, tags, icon }: { label: string, value?: string, tags?: string[], icon?: React.ReactNode, key?: string }) => (
  <div className="flex justify-between items-center py-3 border-b border-slate-50 last:border-0 group/item">
    <div className="flex flex-col">
      <span className="font-bold text-sm text-ink group-hover/item:text-primary transition-colors">{label}</span>
      {tags && (
        <div className="flex gap-1.5 mt-1">
          {tags.map(tag => (
            <span key={tag} className="text-[9px] px-1.5 py-0.5 bg-slate-100 text-slate-500 rounded font-bold uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
    <span className="text-xs text-slate-400 font-medium">{value}</span>
  </div>
);

const Card = ({ data, title, icon }: { data: CardData[], title: string, icon: React.ReactNode, key?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="card-artistic flex flex-col h-full"
  >
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-ink">
        {icon}
      </div>
      <h3 className="font-bold text-lg text-ink">{title}</h3>
    </div>
    
    <div className="flex-grow">
      {data.map(item => (
        <CardItem 
          key={item.id} 
          label={item.name} 
          value={item.priceRange || item.cost || item.atmosphere || item.quietLevel} 
          tags={item.tags}
        />
      ))}
    </div>
  </motion.div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen selection:bg-primary/20 selection:text-primary">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-line ${
        scrolled ? 'bg-white/95 backdrop-blur-md h-16' : 'bg-white h-20'
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
          <a href="#home" className="text-xl font-black uppercase tracking-tighter text-ink">
            Addis <span className="text-primary tracking-normal">Hangout</span> Guide
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            <NavItem href="#home" label="Home" />
            <NavItem href="#cafes" label="Cafes" />
            <NavItem href="#football" label="Football" />
            <NavItem href="#study" label="Study" />
            <NavItem href="#budget" label="Budget" />
            <div className="h-4 w-[1px] bg-line hidden lg:block" />
            <button className="nav-link-artistic hidden lg:block">EN / AM</button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-ink" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute top-full left-0 right-0 bg-white border-b border-line shadow-2xl py-10 flex flex-col items-center space-y-8 md:hidden"
            >
              <NavItem href="#home" label="Home" onClick={toggleMenu} />
              <NavItem href="#cafes" label="Cafes" onClick={toggleMenu} />
              <NavItem href="#football" label="Football" onClick={toggleMenu} />
              <NavItem href="#study" label="Study" onClick={toggleMenu} />
              <NavItem href="#budget" label="Budget" onClick={toggleMenu} />
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <div className="pt-24 lg:pt-32 px-6 max-w-7xl mx-auto">
        {/* Main Grid Layout from Design */}
        <div className="lg:grid lg:grid-cols-[420px_1fr] gap-8 mb-32 items-stretch">
          
          {/* Hero Section */}
          <motion.header 
            id="home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-ink text-white rounded-[32px] p-10 md:p-14 relative overflow-hidden flex flex-col justify-center min-h-[500px] lg:min-h-0"
          >
            {/* Background Decorative Text */}
            <div className="absolute -bottom-10 -right-10 text-[180px] font-black opacity-[0.03] select-none pointer-events-none">
              ADDIS
            </div>
            
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8 tracking-tight">
                Your Ultimate Guide to the <span className="text-primary">Best Hangouts</span> in Addis
              </h1>
              <p className="text-slate-400 text-lg mb-12 max-w-xs leading-relaxed">
                Discover the most vibrant cafes, energetic football spots, and cozy study areas in the capital.
              </p>
              <a href="#cafes" className="btn-explore inline-block">
                Explore Now
              </a>
            </div>
          </motion.header>

          {/* Welcome/Featured Content */}
          <div className="mt-8 lg:mt-0 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card data={CAFES_DATA} title="Top Cafes" icon={<Coffee className="w-5 h-5" />} />
            <Card data={FOOTBALL_DATA} title="Football Spots" icon={<Trophy className="w-5 h-5" />} />
            <Card data={STUDY_DATA} title="Study Places" icon={<BookOpen className="w-5 h-5" />} />
            <Card data={BUDGET_DATA} title="Budget Finds" icon={<Wallet className="w-5 h-5" />} />
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-40 pb-32">
          {/* Categorized Detailed Lists */}
          <motion.section 
            id="cafes" 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="scroll-mt-32"
          >
            <SectionHeading title="Aromatic Cafes" subtitle="From legendary roasteries to modern laptop-friendly spaces." />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {CAFES_DATA.map(item => (
                <div key={item.id} className="bg-white p-6 border border-line rounded-3xl">
                   <div className="flex justify-between items-start mb-4">
                     <h4 className="font-black text-xl text-ink uppercase tracking-tighter">{item.name}</h4>
                     <span className="text-[10px] bg-primary/10 text-primary px-2 py-1 rounded font-black">{item.neighborhood}</span>
                   </div>
                   <div className="space-y-2 mb-6">
                     {item.details.map(d => (
                       <div key={d} className="flex items-center text-xs text-slate-500">
                         <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                         {d}
                       </div>
                     ))}
                   </div>
                   <div className="pt-4 border-t border-line flex justify-between items-center text-xs font-bold text-slate-400">
                     <span>{item.priceRange}</span>
                     <Coffee className="w-4 h-4 opacity-20" />
                   </div>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section 
            id="football" 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="scroll-mt-32"
          >
            <SectionHeading title="Match Day Spots" subtitle="Experience the electric atmosphere with high-performance screens." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {FOOTBALL_DATA.map(item => (
                <div key={item.id} className="bg-ink text-white p-8 rounded-[40px] relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-8 scale-150 opacity-10 group-hover:scale-125 transition-transform duration-500">
                     <Trophy className="w-32 h-32" />
                   </div>
                   <h4 className="text-3xl font-bold mb-4">{item.name}</h4>
                   <p className="text-primary font-bold text-sm mb-6 uppercase tracking-widest">{item.atmosphere}</p>
                   <div className="flex flex-wrap gap-2 mb-8">
                     {item.tags.map(t => <span key={t} className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold">{t}</span>)}
                   </div>
                   <div className="text-slate-400 text-sm">
                     <p>{item.location}</p>
                   </div>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section 
            id="study" 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="scroll-mt-32"
          >
            <SectionHeading title="Study & Work" subtitle="Connect to fast WiFi and maximize your productivity in these silent zones." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {STUDY_DATA.map(item => (
                <div key={item.id} className="bg-white p-8 border border-line rounded-[32px] group">
                   <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                     <BookOpen className="w-6 h-6" />
                   </div>
                   <h4 className="text-2xl font-bold mb-2">{item.name}</h4>
                   <p className="text-slate-400 text-sm mb-6">{item.neighborhood} | {item.quietLevel}</p>
                   <div className="flex gap-4 mb-6">
                     {item.wifi && <div className="flex items-center text-[10px] uppercase font-bold text-green-600"><Wifi className="w-3 h-3 mr-1"/> WiFi</div>}
                     {item.outlets && <div className="flex items-center text-[10px] uppercase font-bold text-blue-600"><Zap className="w-3 h-3 mr-1"/> Outlets</div>}
                   </div>
                   <div className="space-y-2">
                     {item.details.map(d => <div key={d} className="text-xs text-slate-500 flex items-center"><ChevronRight className="w-3 h-3 mr-1 text-primary"/>{d}</div>)}
                   </div>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section 
            id="budget" 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="scroll-mt-32"
          >
            <SectionHeading title="Budget Hangouts" subtitle="Great tastes that respect your wallet. Perfect for group meetups." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {BUDGET_DATA.map(item => (
                <div key={item.id} className="card-artistic border-primary/20">
                   <div className="flex justify-between items-start mb-6">
                     <h4 className="text-xl font-black">{item.name}</h4>
                     <Wallet className="w-5 h-5 text-primary" />
                   </div>
                   <p className="text-primary font-mono text-sm mb-4">{item.cost}</p>
                   <div className="flex flex-wrap gap-2">
                     {item.tags.map(t => <span key={t} className="text-[10px] px-2 py-0.5 bg-slate-50 rounded font-bold uppercase">{t}</span>)}
                   </div>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section 
            id="info" 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="scroll-mt-32 border-t border-line pt-24"
          >
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="flex-1">
                <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4 block">Manifesto</span>
                <h2 className="text-4xl md:text-5xl font-black text-ink mb-8 leading-tight">Empowering the <br/><span className="text-primary italic font-serif">Youth</span> of Addis.</h2>
                <div className="space-y-6 text-slate-600 max-w-lg">
                  <p>
                    <strong className="text-ink font-black uppercase text-xs tracking-wider">Problem:</strong> Information about Addis hangouts is fundamentally fragmented. The city's most vibrant spots are often hidden behind cryptic social media posts or scattered word-of-mouth recommendations, making reliable discovery a constant challenge for the modern urban explorer seeking a place to connect or create.
                  </p>
                  <p>
                    <strong className="text-ink font-black uppercase text-xs tracking-wider">Solution:</strong> We bridge this gap through a centralized, design-first directory. By merging high-performance web technology with deep cultural local insights, we provide a definitive source of truth that respects both the time and aesthetic sensibilities of the capital's youth, prioritizing accessibility and modern utility.
                  </p>
                </div>
              </div>
              <div className="flex-1 bg-white border border-line p-10 rounded-[32px] shadow-sm transform rotate-2">
                <h3 className="font-bold text-xl mb-8 flex items-center">
                  <Star className="w-6 h-6 mr-3 text-primary fill-primary" />
                  Roadmap 2026
                </h3>
                <div className="space-y-8">
                   {[
                     "Global Maps Engine",
                     "Amharic Localization",
                     "Community Ratings V1",
                     "Live Capacity Sync"
                   ].map(r => (
                     <div key={r} className="flex items-center justify-between border-b border-line pb-4 last:border-0 hover:translate-x-2 transition-transform">
                       <span className="font-bold text-ink">{r}</span>
                       <ChevronRight className="w-5 h-5 text-primary" />
                     </div>
                   ))}
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-line py-10 mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xs text-slate-400 font-medium">
            &copy; 2024 ADDIS HANGOUT GUIDE. BUILT FOR THE YOUTH OF THE CAPITAL.
          </div>
          <div className="flex space-x-12">
            {["IG", "TW", "FB", "GH"].map(s => (
              <a key={s} href="#" className="font-black text-xs text-ink hover:text-primary transition-colors tracking-tighter">{s}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
