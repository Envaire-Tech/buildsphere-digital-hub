import { useState } from "react";
import type { Property } from "@/data/properties";

const FloorPlan = ({ property }: { property: Property }) => {
  const [hoveredRoom, setHoveredRoom] = useState<string | null>(null);

  return (
    <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-heading font-bold text-xl text-foreground">Floor Plan</h3>
          <p className="text-sm text-muted-foreground">{property.floorPlan.totalSqFt.toLocaleString()} sq ft total</p>
        </div>
      </div>

      <div className="relative bg-muted/30 rounded-xl p-4 overflow-x-auto">
        <svg viewBox="0 0 450 390" className="w-full max-w-lg mx-auto" style={{ minWidth: 300 }}>
          {property.floorPlan.rooms.map((room) => {
            const isHovered = hoveredRoom === room.name;
            return (
              <g
                key={room.name}
                onMouseEnter={() => setHoveredRoom(room.name)}
                onMouseLeave={() => setHoveredRoom(null)}
                className="cursor-pointer"
              >
                <rect
                  x={room.x}
                  y={room.y}
                  width={room.width}
                  height={room.height}
                  rx={4}
                  fill={isHovered ? "hsl(160 45% 22% / 0.15)" : "hsl(160 45% 22% / 0.05)"}
                  stroke={isHovered ? "hsl(160 45% 22%)" : "hsl(160 45% 22% / 0.3)"}
                  strokeWidth={isHovered ? 2 : 1}
                  className="transition-all duration-200"
                />
                <text
                  x={room.x + room.width / 2}
                  y={room.y + room.height / 2 - 6}
                  textAnchor="middle"
                  className="fill-foreground text-[11px] font-medium"
                >
                  {room.name}
                </text>
                <text
                  x={room.x + room.width / 2}
                  y={room.y + room.height / 2 + 10}
                  textAnchor="middle"
                  className="fill-muted-foreground text-[9px]"
                >
                  {room.width}×{room.height}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {hoveredRoom && (
        <div className="mt-4 text-center text-sm text-primary font-medium">
          Viewing: {hoveredRoom}
        </div>
      )}
    </div>
  );
};

export default FloorPlan;
