import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloorPlan from "@/components/FloorPlan";
import MortgageCalculator from "@/components/MortgageCalculator";
import AgentContact from "@/components/AgentContact";
import { properties } from "@/data/properties";
import { Bed, Bath, Maximize, Car, CalendarDays, MapPin, ArrowLeft, ChevronLeft, ChevronRight, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const PropertyDetail = () => {
  const { slug } = useParams();
  const property = properties.find((p) => p.slug === slug);
  const [activeImage, setActiveImage] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  if (!property) {
    return (
      <>
        <Navbar />
        <main className="pt-32 pb-20 text-center section-padding">
          <h1 className="text-2xl font-heading font-bold text-foreground mb-4">Property Not Found</h1>
          <Link to="/properties" className="text-primary hover:underline">← Back to Properties</Link>
        </main>
        <Footer />
      </>
    );
  }

  const prevImage = () => setActiveImage((i) => (i === 0 ? property.images.length - 1 : i - 1));
  const nextImage = () => setActiveImage((i) => (i === property.images.length - 1 ? 0 : i + 1));

  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-24">
        {/* Breadcrumb */}
        <div className="section-padding py-4">
          <Link to="/properties" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={14} />
            Back to Properties
          </Link>
        </div>

        {/* Image Carousel */}
        <div className="section-padding mb-10">
          <div className="relative rounded-2xl overflow-hidden bg-muted aspect-[16/9] md:aspect-[2/1]">
            <img
              src={property.images[activeImage]}
              alt={`${property.title} - Image ${activeImage + 1}`}
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => setFullscreen(true)}
            />
            <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors shadow">
              <ChevronLeft size={20} />
            </button>
            <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors shadow">
              <ChevronRight size={20} />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {property.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${i === activeImage ? "bg-primary-foreground w-6" : "bg-primary-foreground/50"}`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
            {property.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  i === activeImage ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="section-padding pb-20">
          <div className="grid lg:grid-cols-[1fr_380px] gap-10">
            <div>
              {/* Header */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    property.status === "For Sale" ? "bg-primary text-primary-foreground" : "bg-gold text-foreground"
                  }`}>
                    {property.status}
                  </span>
                  <span className="text-sm text-muted-foreground">{property.type}</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">{property.title}</h1>
                <div className="flex items-center gap-1.5 text-muted-foreground mb-4">
                  <MapPin size={16} />
                  <span>{property.address}, {property.city}</span>
                </div>
                <div className="text-3xl font-heading font-bold text-primary mb-8">{property.priceLabel}</div>

                {/* Key stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                  {property.bedrooms > 0 && (
                    <div className="p-4 rounded-xl bg-muted/50 border border-border text-center">
                      <Bed size={20} className="mx-auto text-primary mb-1" />
                      <div className="text-lg font-bold text-foreground">{property.bedrooms}</div>
                      <div className="text-xs text-muted-foreground">Bedrooms</div>
                    </div>
                  )}
                  <div className="p-4 rounded-xl bg-muted/50 border border-border text-center">
                    <Bath size={20} className="mx-auto text-primary mb-1" />
                    <div className="text-lg font-bold text-foreground">{property.bathrooms}</div>
                    <div className="text-xs text-muted-foreground">Bathrooms</div>
                  </div>
                  <div className="p-4 rounded-xl bg-muted/50 border border-border text-center">
                    <Maximize size={20} className="mx-auto text-primary mb-1" />
                    <div className="text-lg font-bold text-foreground">{property.size.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">Sq Ft</div>
                  </div>
                  <div className="p-4 rounded-xl bg-muted/50 border border-border text-center">
                    <Car size={20} className="mx-auto text-primary mb-1" />
                    <div className="text-lg font-bold text-foreground">{property.parking}</div>
                    <div className="text-xs text-muted-foreground">Parking</div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-10">
                  <h2 className="font-heading font-bold text-xl text-foreground mb-3">About This Property</h2>
                  <p className="text-muted-foreground leading-relaxed">{property.description}</p>
                </div>

                {/* Details */}
                <div className="mb-10 grid grid-cols-2 gap-4 p-6 rounded-2xl border border-border bg-card">
                  {[
                    { label: "Property Type", value: property.type },
                    { label: "Year Built", value: property.yearBuilt },
                    { label: "Land Size", value: `${property.size.toLocaleString()} sq ft` },
                    { label: "Parking Spaces", value: property.parking },
                    { label: "Status", value: property.status },
                    { label: "City", value: property.city },
                  ].map((d) => (
                    <div key={d.label}>
                      <div className="text-xs text-muted-foreground mb-0.5">{d.label}</div>
                      <div className="text-sm font-medium text-foreground">{d.value}</div>
                    </div>
                  ))}
                </div>

                {/* Amenities */}
                <div className="mb-10">
                  <h2 className="font-heading font-bold text-xl text-foreground mb-4">Amenities & Features</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {property.amenities.map((a) => (
                      <div key={a} className="flex items-center gap-2 text-sm text-foreground">
                        <Check size={16} className="text-primary shrink-0" />
                        {a}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floor Plan */}
                <div className="mb-10">
                  <FloorPlan property={property} />
                </div>

                {/* Mortgage Calculator */}
                {property.status === "For Sale" && (
                  <div className="mb-10">
                    <MortgageCalculator price={property.price} />
                  </div>
                )}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div>
              <AgentContact property={property} />
            </div>
          </div>
        </div>

        {/* Fullscreen modal */}
        {fullscreen && (
          <div className="fixed inset-0 z-[100] bg-foreground/95 flex items-center justify-center" onClick={() => setFullscreen(false)}>
            <button className="absolute top-6 right-6 w-10 h-10 rounded-full bg-card/20 flex items-center justify-center text-primary-foreground hover:bg-card/30">
              <X size={20} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/20 flex items-center justify-center text-primary-foreground hover:bg-card/30">
              <ChevronLeft size={24} />
            </button>
            <img
              src={property.images[activeImage]}
              alt=""
              className="max-w-[90vw] max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/20 flex items-center justify-center text-primary-foreground hover:bg-card/30">
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default PropertyDetail;
