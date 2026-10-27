import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowRight, BadgeCheck, Plus, Truck } from "lucide-react";
import Icon, { type IconName } from "./Icon";
import PhotoSlot from "./PhotoSlot";
import { CountUp, Reveal } from "./Motion";
import {
  ASSURANCES, FAQ, HERO_WORDS, INDUSTRIES, POINTS, PROJECTS, RANGES, STATS, STEPS,
} from "../data";
import { useInView, useReducedMotion, useScrollFrame } from "../hooks";

export function Hero() {
  const reduced = useReducedMotion();
  const [w, setW] = useState(0);
  const sec = useRef<HTMLElement>(null);

  useEffect(() => {
    if (reduced) { setW(0); return; }
    const t = setInterval(() => setW((i) => (i + 1) % HERO_WORDS.length), 2600);
    return () => clearInterval(t);
  }, [reduced]);

  // Decorative circles drift slightly slower than the page. Never moves text.
  useScrollFrame((y) => {
    if (sec.current && y < 1200) sec.current.style.setProperty("--py", `${(y * 0.12).toFixed(1)}px`);
  }, !reduced);

  return (
    <section className="hero" id="top" ref={sec}>
      <span className="orb orb-1" aria-hidden="true" />
      <span className="orb orb-2" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow on-dark hi" style={{ "--d": "0ms" } as CSSProperties}>Corporate and industrial furniture supplier</span>
          <h1 aria-label={`Furniture for every floor of your ${HERO_WORDS[0]}`}>
            <span className="hi" style={{ "--d": "120ms" } as CSSProperties} aria-hidden="true">Furniture for every floor of your</span>
            <span className="rot" aria-hidden="true"><em key={w}>{HERO_WORDS[w]}</em></span>
          </h1>
          <p className="lede on-dark hi" style={{ "--d": "300ms" } as CSSProperties}>
            We supply, deliver and install office and warehouse furniture in bulk. One quote, one schedule
            and one team from your floor plan to the last chair.
          </p>
          <div className="cta-row hi" style={{ "--d": "440ms" } as CSSProperties}>
            <a className="btn btn-amber" href="#quote">Request a quote <ArrowRight size={18} aria-hidden="true" /></a>
            <a className="btn btn-ghost" href="#products">View our ranges</a>
          </div>
        </div>
        <div className="hero-media hi hi-scale" style={{ "--d": "250ms" } as CSSProperties}>
          <div className="badge">Bulk orders<br />Installed on site</div>
          <PhotoSlot name="hero" art="hero" alt="A furnished office floor" ratio="640 / 440" className="hero-photo" />
          <div className="float f1"><i><Truck size={18} aria-hidden="true" /></i><span>Delivery and fitting<br /><b>included</b></span></div>
          <div className="float f2"><i><BadgeCheck size={18} aria-hidden="true" /></i><span>Warranty on<br /><b>every range</b></span></div>
        </div>
      </div>
    </section>
  );
}

export function Proof() {
  return (
    <div className="wrap proof">
      <div className="stats">
        {STATS.map((s, i) => (
          <Reveal key={s.label} className="stat" delay={i * 90}>
            <div className="stat-in" style={{ borderTopColor: s.color }}>
              <b>{s.to !== undefined ? <CountUp to={s.to} suffix={s.suffix} /> : s.text}</b>
              <span>{s.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
      <ul className="assure" aria-label="What every order includes">
        {ASSURANCES.map((a, i) => (
          <Reveal as="li" key={a} delay={i * 70}><BadgeCheck size={16} aria-hidden="true" /> {a}</Reveal>
        ))}
      </ul>
    </div>
  );
}

export function About() {
  return (
    <section className="band" id="about" aria-labelledby="about-h">
      <div className="wrap about">
        <Reveal variant="left">
          <PhotoSlot name="about" art="about" alt="Our showroom" ratio="4 / 4.2" tint="var(--t-amber)" className="about-photo" />
        </Reveal>
        <div>
          <Reveal>
            <span className="eyebrow">About us</span>
            <h2 id="about-h">Your furniture partner from first plan to final handover</h2>
            <p className="lede">
              Exclusive Furniture World supplies companies, factories and warehouses that need the same quality
              across hundreds of seats and rooms. We manage specification, production, delivery and fitting so
              your team can focus on running the business.
            </p>
          </Reveal>
          <div className="points">
            {POINTS.map((p, i) => (
              <Reveal className="pt" key={p.title} delay={150 + i * 100}>
                <i className={`chip chip-${p.color}`}><Icon name={p.icon as IconName} size={22} /></i>
                <div><h3>{p.title}</h3><p>{p.text}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Ranges({ onPick }: { onPick: (name: string) => void }) {
  return (
    <section className="band tint" id="products" aria-labelledby="prod-h">
      <div className="wrap">
        <Reveal className="sec-head">
          <div><span className="eyebrow">Our ranges</span><h2 id="prod-h">Everything a working site needs</h2></div>
          <p className="lede">Six ranges that cover offices, plants and warehouses. Sizes and finishes shown are examples.</p>
        </Reveal>
        <div className="ranges">
          {RANGES.map((r, i) => (
            <Reveal className="range-cell" key={r.name} delay={(i % 3) * 110}>
              <article className="range" style={{ "--rc": r.color } as CSSProperties}>
                <PhotoSlot name={`range-${i + 1}`} art={r.art} alt={r.name} ratio="240 / 150" tint={r.tint} className="flat" />
                <div className="range-body">
                  <h3>{r.name}</h3>
                  <p>{r.text}</p>
                  <ul>{r.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                  <a className="more" href="#quote" onClick={() => onPick(r.name)}>
                    Ask about this range <ArrowRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Industries() {
  return (
    <section className="band dark" id="industries" aria-labelledby="ind-h">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow on-dark">Industries</span>
          <h2 id="ind-h">Built for the way businesses work</h2>
        </Reveal>
        <div className="inds">
          {INDUSTRIES.map((x, i) => (
            <Reveal className="ind" key={x.title} delay={(i % 3) * 100} variant="scale">
              <i className={`chip chip-solid chip-${x.color}`}><Icon name={x.icon as IconName} size={24} /></i>
              <h3>{x.title}</h3>
              <p>{x.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section className="band" id="projects" aria-labelledby="proj-h">
      <div className="wrap">
        <Reveal className="sec-head">
          <div><span className="eyebrow">Projects</span><h2 id="proj-h">Recent installations</h2></div>
          <p className="lede">Sample project cards for this preview. Real photos and details replace them.</p>
        </Reveal>
        <div className="projects">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.key} delay={i * 120}>
              <article className="proj">
                <PhotoSlot name={p.key} art={p.art} alt={p.title} ratio="4 / 3" tint={p.tint} />
                <div className="proj-meta"><b style={{ color: p.color }}>{p.kind}</b><span>{p.size}</span></div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  const [ref, seen] = useInView<HTMLOListElement>(0.25);
  return (
    <section className="band tint" id="process" aria-labelledby="proc-h">
      <div className="wrap">
        <Reveal className="sec-head"><div><span className="eyebrow">How we work</span><h2 id="proc-h">A clear path from enquiry to installation</h2></div></Reveal>
        <ol className={`steps ${seen ? "in" : ""}`} ref={ref}>
          {STEPS.map((s, i) => (
            <li key={s.title} style={{ "--i": i } as CSSProperties}>
              <span className="n" style={{ background: s.color }} aria-hidden="true">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="band" id="faq" aria-labelledby="faq-h">
      <div className="wrap faq">
        <Reveal variant="left">
          <span className="eyebrow">Questions</span>
          <h2 id="faq-h">Answers before you ask</h2>
          <p className="lede">Quick answers on orders, delivery and warranty. Sample answers for this preview.</p>
          <a className="btn btn-blue" href="#quote" style={{ marginTop: 28 }}>Ask us something else</a>
        </Reveal>
        <Reveal className="faq-list" delay={120}>
          {FAQ.map((f, i) => (
            <div className={`faq-item ${open === i ? "open" : ""}`} key={f.q}>
              <h3>
                <button type="button" id={`fq-${i}`} aria-expanded={open === i} aria-controls={`fa-${i}`} onClick={() => setOpen(open === i ? -1 : i)}>
                  <span>{f.q}</span><Plus size={20} aria-hidden="true" />
                </button>
              </h3>
              <div className="faq-a" id={`fa-${i}`} role="region" aria-labelledby={`fq-${i}`}>
                <div><p>{f.a}</p></div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="cta-band" aria-label="Request a quote">
      <span className="cta-orb" aria-hidden="true" />
      <div className="wrap cta-in">
        <Reveal>
          <h2>Planning a new office, plant or warehouse?</h2>
          <p>Tell us the headcount and timeline. We will come back with a priced layout.</p>
        </Reveal>
        <Reveal variant="scale" delay={150}><a className="btn btn-navy" href="#quote">Request a quote <ArrowRight size={18} aria-hidden="true" /></a></Reveal>
      </div>
    </section>
  );
}
