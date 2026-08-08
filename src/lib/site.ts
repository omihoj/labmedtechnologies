import chem from "@/assets/img0008.jpg.asset.json";
import lab from "@/assets/img0009.jpg.asset.json";
import labAlt from "@/assets/img0010.jpg.asset.json";
import medical from "@/assets/img0015.jpg.asset.json";
import dental from "@/assets/img0016.jpg.asset.json";
import office from "@/assets/img0017.jpg.asset.json";
import beauty from "@/assets/img0018.jpg.asset.json";
import agri from "@/assets/agri.jpg.asset.json";
import hero1 from "@/assets/hero1.jpg.asset.json";
import hero2 from "@/assets/hero2.jpg.asset.json";
import hero3 from "@/assets/hero3.jpg.asset.json";

export const images = {
  chem: chem.url,
  lab: lab.url,
  labAlt: labAlt.url,
  medical: medical.url,
  dental: dental.url,
  office: office.url,
  beauty: beauty.url,
  agri: agri.url,
  hero1: hero1.url,
  hero2: hero2.url,
  hero3: hero3.url,
};

export const contact = {
  phone: "+27 12 004 2837",
  phoneDisplay: "012 004 2837",
  phoneHref: "tel:+27120042837",
  cell: "+27 64 946 6549",
  cellDisplay: "064 946 6549",
  cellHref: "tel:+27649466549",
  whatsapp: "https://wa.me/27649466549",
  email: "info@labmedtechnologies.co.za",
  address: ["583 Heatherview", "Akasia", "Pretoria", "0182"],
  hours: "Monday – Friday, 8:00 – 16:30",
};

export type Category = {
  slug: string;
  name: string;
  image: string;
  blurb: string;
  items: string[];
};

export const categories: Category[] = [
  {
    slug: "chemicals",
    name: "Chemicals",
    image: images.chem,
    blurb: "Analytical reagents, solvents, standards and culture media from trusted brands.",
    items: [
      "Analytical reagents (AR & LR grade)",
      "HPLC & GC solvents",
      "Certified reference standards",
      "Buffers, indicators and titrants",
      "Culture media and agar",
      "Stains, dyes and fixatives",
      "Acids, bases and salts",
      "Volumetric solutions",
    ],
  },
  {
    slug: "laboratory-supplies",
    name: "Laboratory Supplies",
    image: images.lab,
    blurb: "Glassware, plasticware, instruments and consumables for every bench.",
    items: [
      "Borosilicate glassware",
      "Pipettes, tips and dispensers",
      "Balances, ovens and incubators",
      "Centrifuges and shakers",
      "pH, conductivity and TDS meters",
      "Spectrophotometers",
      "Filtration and water purification",
      "Safety wear and fume handling",
    ],
  },
  {
    slug: "medical-supplies",
    name: "Medical Supplies",
    image: images.medical,
    blurb: "Clinical consumables, diagnostics and instruments for healthcare facilities.",
    items: [
      "Gloves, masks and PPE",
      "Syringes, needles and cannulae",
      "Wound care and dressings",
      "Diagnostic sets and stethoscopes",
      "Surgical instruments",
      "Sample collection tubes",
      "Rapid test kits",
      "Sterilisation and disinfection",
    ],
  },
  {
    slug: "dental-supplies",
    name: "Dental Supplies",
    image: images.dental,
    blurb: "Restorative materials, handpieces and chairside consumables.",
    items: [
      "Handpieces and burs",
      "Restorative and impression materials",
      "Curing lights and scalers",
      "Barrier and infection control",
      "Endodontic instruments",
      "Prophylaxis consumables",
      "Dental x-ray accessories",
      "Chairside disposables",
    ],
  },
  {
    slug: "beauty-supplies",
    name: "Beauty Supplies",
    image: images.beauty,
    blurb: "Professional salon and aesthetic equipment with full technical backup.",
    items: [
      "Multifunction beauty units",
      "Magnifying and LED lamps",
      "Steamers and vaporisers",
      "Sterilisers and UV cabinets",
      "Facial and body treatment devices",
      "Salon furniture and trolleys",
      "Disposables and linens",
      "Skincare consumables",
    ],
  },
  {
    slug: "office-supplies",
    name: "Office Supplies",
    image: images.office,
    blurb: "Everything the administrative side of your operation runs on.",
    items: [
      "Paper, files and filing systems",
      "Writing and marking instruments",
      "Printer and toner consumables",
      "Desk accessories and organisers",
      "Boards, planners and labels",
      "Cleaning and hygiene products",
      "Packaging and shipping supplies",
      "Office furniture",
    ],
  },
  {
    slug: "agricultural-supplies",
    name: "Agricultural Supplies",
    image: images.agri,
    blurb: "Soil, feed, water and dairy testing solutions for primary producers.",
    items: [
      "Soil sampling and testing kits",
      "Feed and forage analysis consumables",
      "Milk and dairy testing equipment",
      "Irrigation water test kits",
      "Moisture meters",
      "Seed germination equipment",
      "Field sampling accessories",
      "Veterinary consumables",
    ],
  },
];

export const testingServices = [
  "Asphalt Testing",
  "Aggregate Testing",
  "Geotechnical Testing",
  "Chemical Testing",
  "Soils & Gravels Testing",
  "Concrete Testing",
  "Water Analysis",
  "Microbiology Testing",
  "Elemental Analysis",
];

export const consultingServices = [
  "Laboratory start-up cost analysis and designing of the lab",
  "Compilation of quality manual, standard operating procedures and supporting documents in accordance with ISO 17025",
  "Maintenance of existing laboratory management systems",
  "Root-cause analysis, corrective and preventive actions on non-conforming products",
  "Method development and validation",
];

export const technicalServices = [
  "On-site service and repairs",
  "In-house service and repairs",
  "Service contracts or preventative service agreements for specific equipment",
];
