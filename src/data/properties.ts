import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";
import agent1 from "@/assets/agent-1.jpg";
import agent2 from "@/assets/agent-2.jpg";

export type Property = {
  id: string;
  title: string;
  slug: string;
  price: number;
  priceLabel: string;
  status: "For Sale" | "For Rent";
  type: "House" | "Apartment" | "Villa" | "Commercial" | "Townhouse" | "Penthouse";
  category: string;
  address: string;
  city: string;
  bedrooms: number;
  bathrooms: number;
  size: number;
  parking: number;
  yearBuilt: number;
  description: string;
  images: string[];
  amenities: string[];
  agent: {
    name: string;
    phone: string;
    email: string;
    photo: string;
  };
  floorPlan: {
    totalSqFt: number;
    rooms: { name: string; width: number; height: number; x: number; y: number }[];
  };
  featured: boolean;
};

export const properties: Property[] = [
  {
    id: "1",
    title: "Skyline Luxury Apartments",
    slug: "skyline-luxury-apartments",
    price: 4500,
    priceLabel: "$4,500/mo",
    status: "For Rent",
    type: "Apartment",
    category: "Apartments for Rent",
    address: "250 Park Avenue, Midtown",
    city: "New York",
    bedrooms: 3,
    bathrooms: 2,
    size: 1850,
    parking: 1,
    yearBuilt: 2022,
    description: "Stunning luxury apartment in the heart of Midtown with panoramic city views, floor-to-ceiling windows, and premium finishes throughout. Features an open-concept living area, chef's kitchen with marble countertops, and a spa-inspired master bathroom. Building amenities include a rooftop terrace, fitness center, and 24/7 concierge.",
    images: [property1, property3, property1, property3],
    amenities: ["Swimming Pool", "Fitness Center", "Concierge", "Rooftop Terrace", "Smart Home", "Air Conditioning", "In-Unit Laundry", "Pet Friendly"],
    agent: { name: "James Mitchell", phone: "+1 (212) 555-0147", email: "james@buildsphere.io", photo: agent1 },
    floorPlan: {
      totalSqFt: 1850,
      rooms: [
        { name: "Living Room", width: 180, height: 120, x: 10, y: 10 },
        { name: "Kitchen", width: 120, height: 100, x: 200, y: 10 },
        { name: "Master Bed", width: 140, height: 120, x: 10, y: 140 },
        { name: "Bed 2", width: 110, height: 100, x: 160, y: 140 },
        { name: "Bed 3", width: 100, height: 100, x: 280, y: 140 },
        { name: "Bath 1", width: 70, height: 60, x: 330, y: 10 },
        { name: "Bath 2", width: 70, height: 60, x: 330, y: 80 },
      ],
    },
    featured: true,
  },
  {
    id: "2",
    title: "Oakwood Family Residence",
    slug: "oakwood-family-residence",
    price: 685000,
    priceLabel: "$685,000",
    status: "For Sale",
    type: "House",
    category: "Houses for Sale",
    address: "142 Maple Drive, Greenfield",
    city: "Connecticut",
    bedrooms: 4,
    bathrooms: 3,
    size: 2800,
    parking: 2,
    yearBuilt: 2021,
    description: "Beautiful modern family home in a quiet tree-lined neighborhood. Features an open floor plan with vaulted ceilings, hardwood floors, and a gourmet kitchen. The spacious backyard includes a covered patio perfect for entertaining. Located near top-rated schools and parks.",
    images: [property2, property2, property2, property2],
    amenities: ["Garden", "Garage", "Smart Home", "Solar Panels", "Security System", "Central Heating", "Hardwood Floors", "Near Schools"],
    agent: { name: "Sarah Anderson", phone: "+1 (203) 555-0198", email: "sarah@buildsphere.io", photo: agent2 },
    floorPlan: {
      totalSqFt: 2800,
      rooms: [
        { name: "Living Room", width: 200, height: 130, x: 10, y: 10 },
        { name: "Kitchen", width: 140, height: 110, x: 220, y: 10 },
        { name: "Dining", width: 120, height: 100, x: 220, y: 130 },
        { name: "Master Bed", width: 160, height: 130, x: 10, y: 150 },
        { name: "Bed 2", width: 120, height: 100, x: 180, y: 240 },
        { name: "Bed 3", width: 110, height: 100, x: 310, y: 240 },
        { name: "Bed 4", width: 100, height: 90, x: 310, y: 140 },
        { name: "Bath", width: 70, height: 60, x: 370, y: 10 },
      ],
    },
    featured: true,
  },
  {
    id: "3",
    title: "The Pinnacle Penthouse",
    slug: "the-pinnacle-penthouse",
    price: 2450000,
    priceLabel: "$2,450,000",
    status: "For Sale",
    type: "Penthouse",
    category: "Luxury Homes",
    address: "1 Central Park West, Floor 62",
    city: "New York",
    bedrooms: 4,
    bathrooms: 4,
    size: 4200,
    parking: 2,
    yearBuilt: 2023,
    description: "Breathtaking penthouse offering unobstructed Central Park and skyline views from every room. Features imported Italian marble, a private elevator entrance, a chef's kitchen with Gaggenau appliances, and a wraparound terrace. The epitome of luxury living.",
    images: [property3, property1, property3, property1],
    amenities: ["Private Elevator", "Terrace", "Wine Cellar", "Smart Home", "Marble Floors", "Concierge", "Spa", "Private Gym"],
    agent: { name: "James Mitchell", phone: "+1 (212) 555-0147", email: "james@buildsphere.io", photo: agent1 },
    floorPlan: {
      totalSqFt: 4200,
      rooms: [
        { name: "Grand Living", width: 220, height: 150, x: 10, y: 10 },
        { name: "Kitchen", width: 150, height: 120, x: 240, y: 10 },
        { name: "Master Suite", width: 180, height: 140, x: 10, y: 170 },
        { name: "Bed 2", width: 130, height: 110, x: 200, y: 170 },
        { name: "Bed 3", width: 120, height: 110, x: 340, y: 170 },
        { name: "Terrace", width: 380, height: 50, x: 10, y: 320 },
      ],
    },
    featured: true,
  },
  {
    id: "4",
    title: "Metro Commerce Tower",
    slug: "metro-commerce-tower",
    price: 12000,
    priceLabel: "$12,000/mo",
    status: "For Rent",
    type: "Commercial",
    category: "Commercial Buildings",
    address: "500 Business Boulevard",
    city: "Chicago",
    bedrooms: 0,
    bathrooms: 4,
    size: 5500,
    parking: 10,
    yearBuilt: 2020,
    description: "Premium Class A commercial office space in a LEED-certified building. Open floor plan with floor-to-ceiling windows, high-speed fiber connectivity, and state-of-the-art building management systems. Ideal for corporate headquarters or professional services firms.",
    images: [property4, property4, property4, property4],
    amenities: ["Conference Rooms", "High-Speed Internet", "24/7 Security", "Parking Garage", "Cafeteria", "Lounge Areas", "EV Charging", "Bike Storage"],
    agent: { name: "Sarah Anderson", phone: "+1 (312) 555-0176", email: "sarah@buildsphere.io", photo: agent2 },
    floorPlan: {
      totalSqFt: 5500,
      rooms: [
        { name: "Open Office", width: 280, height: 180, x: 10, y: 10 },
        { name: "Conference", width: 120, height: 80, x: 300, y: 10 },
        { name: "Executive", width: 120, height: 100, x: 300, y: 100 },
        { name: "Break Room", width: 100, height: 80, x: 10, y: 200 },
        { name: "Reception", width: 170, height: 80, x: 120, y: 200 },
      ],
    },
    featured: false,
  },
  {
    id: "5",
    title: "Villa Serena Estate",
    slug: "villa-serena-estate",
    price: 1850000,
    priceLabel: "$1,850,000",
    status: "For Sale",
    type: "Villa",
    category: "Luxury Homes",
    address: "88 Ocean View Drive",
    city: "Miami",
    bedrooms: 5,
    bathrooms: 4,
    size: 4800,
    parking: 3,
    yearBuilt: 2022,
    description: "Mediterranean-inspired luxury villa with tropical gardens and a resort-style pool. Features a grand entrance, formal dining room, home theater, and a chef's outdoor kitchen. The master suite includes a private balcony with sunset views.",
    images: [property5, property5, property5, property5],
    amenities: ["Swimming Pool", "Tropical Garden", "Home Theater", "Outdoor Kitchen", "Wine Room", "Smart Home", "Security Gate", "Solar Panels"],
    agent: { name: "James Mitchell", phone: "+1 (305) 555-0133", email: "james@buildsphere.io", photo: agent1 },
    floorPlan: {
      totalSqFt: 4800,
      rooms: [
        { name: "Grand Living", width: 200, height: 140, x: 10, y: 10 },
        { name: "Kitchen", width: 150, height: 120, x: 220, y: 10 },
        { name: "Dining", width: 130, height: 100, x: 220, y: 140 },
        { name: "Master Suite", width: 180, height: 130, x: 10, y: 160 },
        { name: "Bed 2", width: 120, height: 100, x: 200, y: 250 },
        { name: "Theater", width: 140, height: 100, x: 330, y: 250 },
      ],
    },
    featured: true,
  },
  {
    id: "6",
    title: "Birchwood Modern Townhomes",
    slug: "birchwood-modern-townhomes",
    price: 520000,
    priceLabel: "$520,000",
    status: "For Sale",
    type: "Townhouse",
    category: "New Developments",
    address: "76 Birchwood Lane",
    city: "Austin",
    bedrooms: 3,
    bathrooms: 2,
    size: 2100,
    parking: 2,
    yearBuilt: 2024,
    description: "Brand-new contemporary townhome in a vibrant, walkable community. Features clean modern lines, energy-efficient design, and premium finishes. Open-plan main level with designer kitchen, private rooftop deck, and attached two-car garage.",
    images: [property6, property6, property6, property6],
    amenities: ["Rooftop Deck", "Garage", "Energy Efficient", "Smart Home", "Community Park", "Walking Trails", "Near Transit", "Pet Friendly"],
    agent: { name: "Sarah Anderson", phone: "+1 (512) 555-0154", email: "sarah@buildsphere.io", photo: agent2 },
    floorPlan: {
      totalSqFt: 2100,
      rooms: [
        { name: "Living Room", width: 170, height: 120, x: 10, y: 10 },
        { name: "Kitchen", width: 130, height: 100, x: 190, y: 10 },
        { name: "Master Bed", width: 150, height: 120, x: 10, y: 140 },
        { name: "Bed 2", width: 110, height: 100, x: 170, y: 140 },
        { name: "Bed 3", width: 100, height: 100, x: 290, y: 140 },
        { name: "Garage", width: 120, height: 70, x: 290, y: 10 },
      ],
    },
    featured: true,
  },
];

export const propertyCategories = [
  "All Properties",
  "Houses for Sale",
  "Apartments for Rent",
  "Commercial Buildings",
  "Luxury Homes",
  "New Developments",
];
