import { Link } from "react-router-dom";
import { Bed, Bath, Maximize, MapPin } from "lucide-react";
import type { Property } from "@/data/properties";

const PropertyCard = ({ property }: { property: Property }) => (
  <Link to={`/property/${property.slug}`} className="block property-card group">
    <div className="aspect-[4/3] overflow-hidden relative">
      <img
        src={property.images[0]}
        alt={property.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <div className="absolute top-3 left-3 flex gap-2">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          property.status === "For Sale"
            ? "bg-primary text-primary-foreground"
            : "bg-gold text-foreground"
        }`}>
          {property.status}
        </span>
      </div>
      <div className="absolute bottom-3 right-3">
        <span className="px-3 py-1.5 rounded-lg text-sm font-bold bg-card/90 backdrop-blur-sm text-foreground shadow">
          {property.priceLabel}
        </span>
      </div>
    </div>
    <div className="p-5">
      <h3 className="font-heading font-semibold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
        {property.title}
      </h3>
      <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-4">
        <MapPin size={14} />
        <span>{property.address}, {property.city}</span>
      </div>
      <div className="flex items-center gap-5 text-sm text-muted-foreground">
        {property.bedrooms > 0 && (
          <div className="flex items-center gap-1.5">
            <Bed size={15} />
            <span>{property.bedrooms} Beds</span>
          </div>
        )}
        <div className="flex items-center gap-1.5">
          <Bath size={15} />
          <span>{property.bathrooms} Baths</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Maximize size={15} />
          <span>{property.size.toLocaleString()} ft²</span>
        </div>
      </div>
    </div>
  </Link>
);

export default PropertyCard;
