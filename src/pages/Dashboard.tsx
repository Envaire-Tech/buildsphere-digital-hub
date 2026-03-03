import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";
import { User, Settings, Heart, Clock, Bell, LogOut, ShieldCheck, MapPin, BuildingIcon, CreditCard } from "lucide-react";

const Dashboard = () => {
  const { userName } = useParams();
  
  // Format username from URL (e.g. 'john-doe' -> 'John Doe')
  const formattedName = userName 
    ? userName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : 'Client User';

  // Mock data for display
  const MOCK_USER = {
    name: formattedName,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
    joinDate: "Member since Oct 2023",
    type: "Private Client",
  };

  const savedProperties = properties.slice(0, 3);
  const recentViews = properties.slice(3, 5);

  const sidebarLinks = [
    { icon: <User size={18} />, label: "Profile & Identity", active: true },
    { icon: <Heart size={18} />, label: "Saved Collections", active: false },
    { icon: <Clock size={18} />, label: "Viewing History", active: false },
    { icon: <BuildingIcon size={18} />, label: "My Holdings", active: false },
    { icon: <Bell size={18} />, label: "Alerts & Preferences", active: false },
    { icon: <CreditCard size={18} />, label: "Financial Profiles", active: false },
    { icon: <Settings size={18} />, label: "Account Settings", active: false },
  ];

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24 section-padding">
        <div className="max-w-[1600px] mx-auto">
          
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-start md:items-end justify-between border-b border-white/5 pb-10 mb-12 gap-6"
          >
            <div className="flex items-center gap-8">
              <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/20 p-1">
                  <img src={MOCK_USER.avatar} alt={MOCK_USER.name} className="w-full h-full object-cover rounded-full" />
                </div>
                <div className="absolute bottom-1 right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center border-2 border-background text-primary-foreground tooltip" title="Verified Client">
                  <ShieldCheck size={12} />
                </div>
              </div>
              
              <div>
                <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-2 tracking-tighter">
                  Welcome, <span className="font-light">{MOCK_USER.name.split(' ')[0]}</span>
                </h1>
                <div className="flex items-center gap-4 text-sm font-medium tracking-widest uppercase text-foreground/50">
                  <span className="text-primary">{MOCK_USER.type}</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span>{MOCK_USER.joinDate}</span>
                </div>
              </div>
            </div>

            <button className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-full text-foreground transition-all group">
              <LogOut size={14} className="group-hover:-translate-x-1 transition-transform" /> Sign Out
            </button>
          </motion.div>

          {/* Main Dashboard Grid */}
          <div className="grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-16">
            
            {/* Sidebar Navigation */}
            <motion.aside 
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="glass-card rounded-[2rem] p-4 flex flex-col gap-2">
                {sidebarLinks.map((link) => (
                  <button 
                    key={link.label}
                    className={`flex items-center gap-4 px-5 py-4 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                      link.active 
                      ? "bg-foreground text-background shadow-lg scale-100" 
                      : "text-foreground/60 hover:text-foreground hover:bg-white/5 scale-[0.98] hover:scale-100"
                    }`}
                  >
                    <span className={link.active ? "text-background" : "text-foreground/40"}>{link.icon}</span>
                    {link.label}
                  </button>
                ))}
              </div>
            </motion.aside>

            {/* Dashboard Content */}
            <div className="space-y-16">
              
              {/* Overview Cards */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {[
                  { label: "Saved Properties", value: "12", icon: <Heart size={20} /> },
                  { label: "Active Viewings", value: "3", icon: <Clock size={20} /> },
                  { label: "Messages", value: "5", icon: <Bell size={20} /> },
                ].map((stat, i) => (
                  <div key={stat.label} className="glass-card rounded-3xl p-8 border-none bg-card/40 hover:bg-card/60 transition-colors flex items-start justify-between">
                    <div>
                      <div className="text-4xl font-heading font-bold text-foreground mb-2">{stat.value}</div>
                      <div className="text-xs tracking-[0.1em] uppercase font-bold text-foreground/50">{stat.label}</div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary">
                      {stat.icon}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Saved Collections */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-sm tracking-[0.2em] uppercase font-bold text-primary flex items-center gap-4">
                    <span className="w-8 h-[1px] bg-primary"></span>
                    Saved Collections
                  </h2>
                  <Link to="/properties" className="text-xs font-bold tracking-[0.1em] uppercase text-foreground/60 hover:text-foreground">View All</Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {savedProperties.map((p, i) => (
                    <PropertyCard key={p.id} property={p} className="h-full flex flex-col glass-card border-none bg-card/40 hover:bg-card/60" imageClassName="aspect-video rounded-t-2xl" />
                  ))}
                </div>
              </motion.div>

              {/* Recent Activity */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
                <h2 className="text-sm tracking-[0.2em] uppercase font-bold text-primary mb-8 flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-primary"></span>
                  Recent Activity
                </h2>
                
                <div className="glass-card rounded-[2rem] p-2 overflow-hidden border border-white/5 bg-card/40">
                  {recentViews.map((p, i) => (
                    <div key={p.id} className={`flex items-center gap-6 p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer ${i !== 0 ? 'border-t border-white/5' : ''}`}>
                      <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden">
                        <img src={p.images[0]} alt={p.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading font-bold text-lg text-foreground mb-1">{p.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-foreground/50">
                          <MapPin size={14} />
                          <span>{p.address}, {p.city}</span>
                        </div>
                      </div>
                      <div className="hidden md:block text-right">
                        <div className="text-primary font-bold">{p.priceLabel}</div>
                        <div className="text-xs text-foreground/40 mt-1">Viewed 2 days ago</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
