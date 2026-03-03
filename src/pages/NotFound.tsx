import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-50" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        className="relative z-10 text-center px-6 max-w-2xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
          className="text-[12rem] md:text-[18rem] font-heading font-black text-white/5 leading-none select-none tracking-tighter"
        >
          404
        </motion.div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center mt-12 md:mt-24">
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Lost in the Architecture
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto mb-10 leading-relaxed">
            The page you are looking for has been moved, removed, renamed, or might never have existed.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link 
              to="/" 
              className="flex items-center gap-3 text-sm font-bold tracking-[0.2em] uppercase bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg shadow-primary/20"
            >
              <Home size={18} /> Return Home
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="flex items-center gap-3 text-sm font-bold tracking-[0.2em] uppercase bg-white/5 text-foreground hover:bg-white/10 border border-white/10 px-8 py-4 rounded-full transition-all group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Go Back
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
