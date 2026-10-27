// All text on the site lives here. Every value below is a placeholder for the preview.
// Replace with the client's real details before launch.

export const COMPANY = {
  name: "Exclusive Furniture World",
  tagline: "Furniture for business",
  phone: "+91 00000 00000",
  email: "sales@exclusivefurnitureworld.example",
  address: "Plot 00, Industrial Area, Your City, State 000000",
  hours: "Mon to Sat, 9:30 am to 6:30 pm",
};

export const NAV = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#industries", label: "Industries" },
  { href: "#projects", label: "Projects" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
  { href: "#quote", label: "Contact" },
];

export const STATS: { to?: number; suffix?: string; text?: string; label: string; color: string }[] = [
  { to: 15, suffix: "+", label: "Years supplying businesses", color: "var(--c-blue)" },
  { to: 500, suffix: "+", label: "Offices and sites furnished", color: "var(--c-teal)" },
  { to: 25000, suffix: "+", label: "Seats delivered", color: "var(--c-amber)" },
  { text: "3 to 4 wks", label: "Typical delivery time", color: "var(--c-coral)" },
];

export const HERO_WORDS = ["business", "warehouse", "office", "factory"];

export const FAQ = [
  { q: "What is the minimum order?", a: "Most ranges start at a few pieces. Bulk pricing applies from about 10 workstations or 25 chairs. Tell us your headcount and we will confirm the best rate." },
  { q: "How long does delivery take?", a: "Standard items usually ship in 2 to 4 weeks. Larger fit-outs are delivered in phases to match your move-in schedule." },
  { q: "Can you make furniture to our size and colour?", a: "Yes. Sizes, laminates, veneers and fabrics can be matched to your layout and brand. We share a sample before the full order is produced." },
  { q: "Do you install the furniture?", a: "Our crew delivers, assembles and places every piece on site, then hands over with a checklist so you can sign off floor by floor." },
  { q: "What warranty do you offer?", a: "Every range carries a written warranty, and we keep a named contact for repairs, replacements and top-up orders." },
];

export type Art = "work" | "exec" | "seat" | "store" | "meet" | "recep";

export interface Range {
  name: string;
  art: Art;
  tint: string;
  color: string;
  text: string;
  tags: string[];
}

export const RANGES: Range[] = [
  { name: "Workstations and desks", art: "work", tint: "var(--t-blue)", color: "var(--c-blue)", text: "Modular workstations, linear desks and partition panels with cable management.", tags: ["1200 to 1800 mm", "Laminate or veneer", "Panel options"] },
  { name: "Executive and cabin", art: "exec", tint: "var(--t-amber)", color: "var(--c-amber)", text: "Executive tables with side returns, credenzas and manager cabins.", tags: ["1500 to 2400 mm", "Veneer finish", "Lockable drawers"] },
  { name: "Seating", art: "seat", tint: "var(--t-teal)", color: "var(--c-teal)", text: "Task chairs, visitor chairs and high-back executive seating in mesh or fabric.", tags: ["Mesh and fabric", "Gas lift", "Warranty"] },
  { name: "Storage and lockers", art: "store", tint: "var(--t-slate)", color: "var(--c-slate)", text: "Filing cabinets, steel lockers, wardrobes and shelving for offices and plants.", tags: ["Powder-coated steel", "Key or padlock", "1800 mm high"] },
  { name: "Conference and meeting", art: "meet", tint: "var(--t-indigo)", color: "var(--c-indigo)", text: "Boardroom tables, training tables and meeting chairs with power and data boxes.", tags: ["4 to 20 seats", "Power boxes", "Custom shapes"] },
  { name: "Reception and lounge", art: "recep", tint: "var(--t-coral)", color: "var(--c-coral)", text: "Reception counters, sofas and waiting-area seating that carry your branding.", tags: ["Branded fronts", "Sofas and benches", "Built to size"] },
];

export const POINTS = [
  { icon: "ruler", color: "blue", title: "Made to specification", text: "Sizes, finishes and colours matched to your brand and layout." },
  { icon: "percent", color: "amber", title: "Bulk pricing", text: "Clear volume rates and repeat-order terms for procurement teams." },
  { icon: "truck", color: "teal", title: "Delivery and fitting", text: "Phased delivery to site and installation by our own crew." },
  { icon: "shield", color: "coral", title: "After-sales support", text: "Warranty cover and a named contact for repairs and top-ups." },
] as const;

export const INDUSTRIES = [
  { icon: "building", color: "blue", title: "Corporate offices", text: "Workstations, cabins and boardrooms for head offices and branches." },
  { icon: "warehouse", color: "amber", title: "Warehouses and logistics", text: "Supervisor desks, lockers and storage for dispatch and stores." },
  { icon: "factory", color: "teal", title: "Manufacturing plants", text: "Durable steel furniture for shop floors, canteens and control rooms." },
  { icon: "monitor", color: "indigo", title: "IT parks and co-working", text: "Modular desks and collaboration areas that scale with headcount." },
  { icon: "landmark", color: "coral", title: "Banks and service centres", text: "Reception counters, teller desks and customer waiting areas." },
  { icon: "cap", color: "green", title: "Education and training", text: "Training tables, chairs and storage for institutes and academies." },
] as const;

export const PROJECTS = [
  { key: "p1", art: "work" as Art, tint: "var(--t-blue)", color: "var(--c-blue)", kind: "Corporate office", size: "120 seats", title: "Head office workstations", text: "Linear workstations, task chairs and storage across three floors, delivered in phases." },
  { key: "p2", art: "store" as Art, tint: "var(--t-teal)", color: "var(--c-teal)", kind: "Warehouse", size: "60 lockers", title: "Logistics hub staff area", text: "Steel lockers, supervisor desks and a canteen set for a distribution centre." },
  { key: "p3", art: "meet" as Art, tint: "var(--t-indigo)", color: "var(--c-indigo)", kind: "Boardroom", size: "3 rooms", title: "Boardroom and training suite", text: "Conference tables, executive seating and reception furniture for a regional office." },
];

export const STEPS = [
  { color: "var(--c-blue)", title: "Share your requirement", text: "Send a headcount, floor plan or list. We visit the site on larger jobs." },
  { color: "var(--c-teal)", title: "Receive a priced layout", text: "You get a quantity list, a layout and one price covering furniture, delivery and fitting." },
  { color: "var(--c-amber-d)", title: "Approve samples", text: "Check finishes and a sample piece before the full order goes into production." },
  { color: "var(--c-coral)", title: "Delivery and fitting", text: "We deliver in batches, install on site and hand over with a checklist." },
];

export const ASSURANCES = ["Warranty on all ranges", "Site survey on request", "Installation by our crew", "GST invoicing", "Repeat-order pricing", "Single point of contact"];
