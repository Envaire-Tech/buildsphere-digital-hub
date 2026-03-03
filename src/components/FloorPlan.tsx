import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2 } from "lucide-react";
import type { Property } from "@/data/properties";

const FloorPlan = ({ property }: { property: Property }) => {
  const [hoveredRoom, setHoveredRoom] = useState<string | null>(null);
  const [view, setView] = useState<"structure" | "furnished">("structure");
  const [zoom, setZoom] = useState(false);

  return (
    <div className="rounded-[2.5rem] border border-white/5 bg-background/40 backdrop-blur-2xl p-8 md:p-12 relative overflow-hidden group shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none opacity-50" />
      
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 relative z-10 gap-8">
        <div>
          <h3 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-4 tracking-tighter">Technical Blueprint</h3>
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary/80 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-primary"></span>
            {property.floorPlan.totalSqFt.toLocaleString()} sq ft total
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-4">
          <div className="bg-background/80 backdrop-blur-xl p-1.5 rounded-2xl flex border border-white/10 shadow-inner">
            <button 
              onClick={() => setView("structure")}
              className={`px-6 py-3 rounded-xl text-xs font-bold tracking-[0.1em] uppercase transition-all duration-300 ${view === "structure" ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-100" : "text-foreground/50 hover:text-foreground scale-95 hover:scale-100"}`}
            >
              Structure
            </button>
            <button 
              onClick={() => setView("furnished")}
              className={`px-6 py-3 rounded-xl text-xs font-bold tracking-[0.1em] uppercase transition-all duration-300 ${view === "furnished" ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-100" : "text-foreground/50 hover:text-foreground scale-95 hover:scale-100"}`}
            >
              Furnished
            </button>
          </div>
          <button 
            onClick={() => setZoom(!zoom)}
            className="w-12 h-12 rounded-2xl bg-card border border-white/10 flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-white/5 transition-colors shadow-lg"
          >
            <Maximize2 size={18} />
          </button>
        </div>
      </div>

      <div className={`relative rounded-3xl overflow-hidden transition-all duration-1000 ease-cinematic bg-card/30 border border-white/5 ${zoom ? "h-[700px]" : "h-[450px]"}`}>
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <AnimatePresence mode="wait">
            <motion.svg 
              key={view}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              viewBox="0 0 450 390" 
              className="w-full h-full max-w-3xl mx-auto drop-shadow-[0_0_30px_rgba(255,255,255,0.05)]"
            >
              {<rect x="5" y="5" width="440" height="380" fill="transparent" stroke="currentColor" strokeWidth="1" className="text-white/5" strokeDasharray="8 8" />}
              
              {property.floorPlan.rooms.map((room) => {
                const isHovered = hoveredRoom === room.name;
                return (
                  <g
                    key={room.name}
                    onMouseEnter={() => setHoveredRoom(room.name)}
                    onMouseLeave={() => setHoveredRoom(null)}
                    className="cursor-pointer transition-transform duration-700 hover:scale-[1.03] origin-center"
                    style={{ transformOrigin: `${room.x + room.width/2}px ${room.y + room.height/2}px` }}
                  >
                    <rect
                      x={room.x}
                      y={room.y}
                      width={room.width}
                      height={room.height}
                      rx={view === "furnished" ? 12 : 2}
                      fill={isHovered ? "hsl(var(--primary) / 0.15)" : "hsl(var(--primary) / 0.05)"}
                      stroke={isHovered ? "hsl(var(--primary))" : "hsl(var(--primary) / 0.3)"}
                      strokeWidth={isHovered ? 2 : 1}
                      className="transition-all duration-500 ease-cinematic"
                    />

                    <text
                      x={room.x + room.width / 2}
                      y={room.y + room.height / 2 - 4}
                      textAnchor="middle"
                      className={`font-heading transition-all duration-300 ${isHovered ? "fill-primary text-[14px] font-bold tracking-wide" : "fill-foreground/80 text-[12px] font-semibold"}`}
                    >
                      {room.name}
                    </text>
                    
                    <motion.text
                      initial={false}
                      animate={{ opacity: isHovered ? 1 : 0.5 }}
                      x={room.x + room.width / 2}
                      y={room.y + room.height / 2 + 14}
                      textAnchor="middle"
                      className="fill-foreground/40 text-[10px] tracking-[0.2em] font-mono"
                    >
                      {room.width}×{room.height}
                    </motion.text>
                  </g>
                );
              })}
            </motion.svg>
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {hoveredRoom && (
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-card/90 backdrop-blur-2xl border border-white/10 px-8 py-4 rounded-full shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] z-20"
            >
              <div className="flex items-center gap-4 pointer-events-none">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                <span className="text-sm font-medium text-foreground tracking-widest uppercase opacity-70">
                  Inspecting
                </span>
                <span className="text-primary font-bold text-base font-heading">
                  {hoveredRoom}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FloorPlan;
