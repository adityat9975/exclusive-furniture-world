import type { ReactNode } from "react";
import type { Art } from "../data";

/* Flat furniture drawings used as placeholders until real photos are added. */

type RProps = { x: number; y: number; w: number; h: number; c: string; rx?: number; op?: number };
const R = ({ x, y, w, h, c, rx = 0, op }: RProps) => (
  <rect x={x} y={y} width={w} height={h} rx={rx} className={c} opacity={op} />
);

const Desk = ({ x, y, w }: { x: number; y: number; w: number }) => (
  <g>
    <R x={x} y={y} w={w} h={8} c="wood" rx={2} />
    <R x={x + 8} y={y + 8} w={7} h={50} c="woodd" />
    <R x={x + w - 15} y={y + 8} w={7} h={50} c="woodd" />
    <R x={x + w - 62} y={y + 8} w={48} h={40} c="woodd" rx={2} />
    <R x={x + w - 50} y={y + 20} w={24} h={3} c="amberf" rx={1} />
    <R x={x + w - 50} y={y + 32} w={24} h={3} c="amberf" rx={1} />
  </g>
);
const Mon = ({ x, y }: { x: number; y: number }) => (
  <g>
    <R x={x} y={y - 34} w={50} h={30} c="navyf" rx={3} />
    <R x={x + 3} y={y - 31} w={44} h={22} c="glass screen" rx={1} />
    <R x={x + 22} y={y - 4} w={6} h={4} c="metald" />
    <R x={x + 14} y={y - 1} w={22} h={2} c="metald" />
  </g>
);
const Chair = ({ x, y, c }: { x: number; y: number; c: string }) => (
  <g>
    <R x={x + 2} y={y - 54} w={32} h={36} c={c} rx={9} />
    <R x={x - 2} y={y - 20} w={40} h={9} c={c} rx={4} />
    <R x={x + 16} y={y - 11} w={4} h={24} c="metald" />
    <R x={x + 4} y={y + 13} w={28} h={4} c="metald" rx={2} />
  </g>
);
const Cab = ({ x, y, w, h }: { x: number; y: number; w: number; h: number }) => (
  <g>
    <R x={x} y={y} w={w} h={h} c="metal" rx={3} />
    <R x={x} y={y + h / 3} w={w} h={2} c="metald" />
    <R x={x} y={y + (2 * h) / 3} w={w} h={2} c="metald" />
    {[1 / 6, 1 / 2, 5 / 6].map((f) => (
      <R key={f} x={x + w / 2 - 9} y={y + h * f} w={18} h={3} c="metald" rx={1} />
    ))}
  </g>
);
const Lock = ({ x, y, w, h, n }: { x: number; y: number; w: number; h: number; n: number }) => {
  const d = w / n;
  return (
    <g>
      {Array.from({ length: n }, (_, i) => (
        <g key={i}>
          <R x={x + i * d + 1} y={y} w={d - 2} h={h} c="tealf" rx={2} />
          <R x={x + i * d + d * 0.25} y={y + 10} w={d * 0.5} h={2} c="whitef" rx={1} op={0.55} />
          <R x={x + i * d + d * 0.25} y={y + 16} w={d * 0.5} h={2} c="whitef" rx={1} op={0.55} />
          <R x={x + i * d + d - 10} y={y + h / 2} w={3} h={12} c="whitef" rx={1} op={0.8} />
        </g>
      ))}
    </g>
  );
};
const Plant = ({ x, y }: { x: number; y: number }) => (
  <g>
    <R x={x} y={y - 26} w={26} h={26} c="woodd" rx={3} />
    <ellipse cx={x + 13} cy={y - 42} rx={8} ry={20} className="tealf" />
    <ellipse cx={x + 4} cy={y - 36} rx={7} ry={16} className="tealf" transform={`rotate(-28 ${x + 4} ${y - 36})`} />
    <ellipse cx={x + 22} cy={y - 36} rx={7} ry={16} className="tealf" transform={`rotate(28 ${x + 22} ${y - 36})`} />
  </g>
);
const Table = ({ x, y, w }: { x: number; y: number; w: number }) => (
  <g>
    <R x={x} y={y} w={w} h={10} c="wood" rx={5} />
    <R x={x + w * 0.2} y={y + 10} w={8} h={46} c="woodd" />
    <R x={x + w * 0.8 - 8} y={y + 10} w={8} h={46} c="woodd" />
  </g>
);
const Sofa = ({ x, y, w, c }: { x: number; y: number; w: number; c: string }) => (
  <g>
    <R x={x + 10} y={y - 34} w={w - 20} h={36} c={c} rx={10} />
    <R x={x} y={y - 8} w={w} h={26} c={c} rx={8} />
    <R x={x - 8} y={y - 24} w={18} h={42} c={c} rx={8} />
    <R x={x + w - 10} y={y - 24} w={18} h={42} c={c} rx={8} />
    <R x={x + 8} y={y + 18} w={6} h={5} c="metald" />
    <R x={x + w - 14} y={y + 18} w={6} h={5} c="metald" />
  </g>
);
const Counter = ({ x, y, w }: { x: number; y: number; w: number }) => (
  <g>
    <R x={x} y={y} w={w} h={56} c="navyf" rx={3} />
    <R x={x - 6} y={y - 8} w={w + 12} h={10} c="amberf" rx={3} />
    <R x={x + 10} y={y + 12} w={w - 20} h={32} c="bluef" rx={2} />
  </g>
);
const Pend = ({ x, y }: { x: number; y: number }) => (
  <g className="swing" style={{ transformOrigin: `${x + 10}px 0px`, animationDelay: `${(x % 7) * -0.6}s` }}>
    <R x={x + 9} y={0} w={2} h={y} c="metald" />
    <path d={`M${x} ${y}a10 10 0 0 1 20 0z`} className="amberf" />
  </g>
);

const Tile = ({ children }: { children: ReactNode }) => (
  <svg viewBox="0 0 240 150" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false">
    <R x={0} y={122} w={240} h={28} c="whitef" op={0.5} />
    {children}
  </svg>
);

const SCENES: Record<Art | "hero" | "about", () => JSX.Element> = {
  hero: () => (
    <svg viewBox="0 0 640 440" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <R x={0} y={0} w={640} h={350} c="wallf" />
      <R x={0} y={350} w={640} h={90} c="floorf" />
      <R x={24} y={40} w={190} h={170} c="skyf" rx={4} />
      <R x={44} y={150} w={28} h={60} c="bluef" op={0.35} />
      <R x={78} y={120} w={34} h={90} c="bluef" op={0.5} />
      <R x={118} y={160} w={26} h={50} c="bluef" op={0.35} />
      <R x={150} y={132} w={32} h={78} c="bluef" op={0.5} />
      <circle cx={170} cy={82} r={20} className="amberf sun" opacity={0.85} style={{ transformOrigin: "170px 82px" }} />
      <clipPath id="hero-win"><rect x={24} y={40} width={190} height={170} rx={4} /></clipPath>
      <g clipPath="url(#hero-win)">
        <g className="cloud"><ellipse cx={70} cy={74} rx={30} ry={9} className="whitef" opacity={0.75} /><ellipse cx={90} cy={68} rx={18} ry={8} className="whitef" opacity={0.75} /></g>
        <g className="cloud c2"><ellipse cx={150} cy={112} rx={26} ry={7} className="whitef" opacity={0.6} /><ellipse cx={166} cy={107} rx={14} ry={6} className="whitef" opacity={0.6} /></g>
      </g>
      <R x={24} y={40} w={190} h={5} c="metal" />
      <R x={24} y={205} w={190} h={5} c="metal" />
      <R x={117} y={40} w={4} h={170} c="whitef" />
      <Pend x={300} y={86} /> <Pend x={470} y={86} /> <Pend x={600} y={70} />
      <Cab x={222} y={228} w={56} h={122} />
      <Chair x={332} y={333} c="tealf" /> <Chair x={500} y={333} c="coralf" />
      <Desk x={290} y={292} w={140} /> <Mon x={335} y={292} />
      <Desk x={458} y={292} w={140} /> <Mon x={503} y={292} />
      <Plant x={604} y={350} />
    </svg>
  ),
  about: () => (
    <svg viewBox="0 0 240 252" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false">
      <R x={0} y={0} w={240} h={252} c="wallf" />
      <R x={0} y={196} w={240} h={56} c="floorf" />
      <R x={20} y={30} w={200} h={90} c="skyf" rx={3} />
      <R x={118} y={30} w={4} h={90} c="whitef" />
      <R x={30} y={70} w={26} h={50} c="bluef" op={0.4} />
      <R x={62} y={52} w={34} h={68} c="bluef" op={0.5} />
      <circle cx={190} cy={56} r={14} className="amberf" opacity={0.85} />
      <Cab x={14} y={118} w={48} h={78} />
      <Sofa x={80} y={178} w={100} c="bluef" />
      <Chair x={196} y={213} c="coralf" />
      <Plant x={200} y={196} />
    </svg>
  ),
  work: () => (
    <Tile>
      <Chair x={46} y={105} c="tealf" /> <Chair x={154} y={105} c="coralf" />
      <Desk x={16} y={64} w={100} /> <Mon x={41} y={64} />
      <Desk x={124} y={64} w={100} /> <Mon x={149} y={64} />
    </Tile>
  ),
  exec: () => (
    <Tile>
      <Chair x={104} y={105} c="navyf" />
      <Desk x={40} y={64} w={160} /> <Mon x={95} y={64} />
      <Plant x={210} y={122} /> <Cab x={8} y={70} w={26} h={52} />
    </Tile>
  ),
  seat: () => (
    <Tile>
      <Chair x={30} y={105} c="bluef" /> <Chair x={100} y={105} c="coralf" /> <Chair x={170} y={105} c="tealf" />
    </Tile>
  ),
  store: () => (
    <Tile>
      <Cab x={20} y={36} w={60} h={86} /> <Lock x={98} y={34} w={126} h={88} n={4} />
    </Tile>
  ),
  meet: () => (
    <Tile>
      <Chair x={40} y={105} c="indf" /> <Chair x={86} y={105} c="indf" /> <Chair x={132} y={105} c="indf" /> <Chair x={178} y={105} c="indf" />
      <Table x={22} y={66} w={196} />
    </Tile>
  ),
  recep: () => (
    <Tile>
      <Counter x={18} y={66} w={120} /> <Sofa x={166} y={104} w={58} c="coralf" /> <Plant x={146} y={122} />
    </Tile>
  ),
};

export default function Illustration({ name }: { name: keyof typeof SCENES }) {
  return SCENES[name]();
}
