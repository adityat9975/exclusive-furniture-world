import {
  Building2, Warehouse, Factory, Monitor, Landmark, GraduationCap, ShieldCheck, Truck,
  Ruler, BadgePercent, MapPin, Phone, Mail, type LucideProps,
} from "lucide-react";

const MAP = {
  building: Building2, warehouse: Warehouse, factory: Factory, monitor: Monitor, landmark: Landmark,
  cap: GraduationCap, shield: ShieldCheck, truck: Truck, ruler: Ruler, percent: BadgePercent,
  pin: MapPin, phone: Phone, mail: Mail,
};
export type IconName = keyof typeof MAP;

export default function Icon({ name, ...rest }: { name: IconName } & LucideProps) {
  const C = MAP[name];
  return <C aria-hidden="true" strokeWidth={1.8} {...rest} />;
}
