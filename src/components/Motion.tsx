import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";
import { ArrowUp } from "lucide-react";
import { useInView, useReducedMotion, useScrollFrame } from "../hooks";

type Variant = "up" | "left" | "right" | "scale";

/** Fades and slides its children in once, when they first scroll into view. */
export function Reveal({
  as: Tag = "div", variant = "up", delay = 0, className = "", children,
}: { as?: ElementType; variant?: Variant; delay?: number; className?: string; children: ReactNode }) {
  const [ref, seen] = useInView<HTMLElement>();
  const reduced = useReducedMotion();
  return (
    <Tag
      ref={ref}
      className={`rv rv-${variant} ${seen || reduced ? "in" : ""} ${className}`}
      style={{ "--d": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

const nf = new Intl.NumberFormat("en-US");

/** Counts up to a number when it scrolls into view. Screen readers get the final value straight away. */
export function CountUp({ to, suffix = "", duration = 1500 }: { to: number; suffix?: string; duration?: number }) {
  const [ref, seen] = useInView<HTMLSpanElement>(0.4);
  const reduced = useReducedMotion();
  const [n, setN] = useState(reduced ? to : 0);

  useEffect(() => {
    if (!seen) return;
    if (reduced) { setN(to); return; }
    let raf = 0;
    const t0 = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      setN(Math.round(to * (1 - Math.pow(1 - p, 4))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [seen, reduced, to, duration]);

  return (
    <span ref={ref}>
      <span aria-hidden="true">{nf.format(n)}{suffix}</span>
      <span className="sr">{nf.format(to)}{suffix}</span>
    </span>
  );
}

/** Thin bar under the header showing how far down the page you are. */
export function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);
  useScrollFrame((y) => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
  });
  return <div className="progress" aria-hidden="true"><div ref={bar} /></div>;
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  const reduced = useReducedMotion();
  useScrollFrame((y) => setShow(y > 900));
  return (
    <button
      type="button" className={`to-top ${show ? "show" : ""}`} aria-label="Back to top" tabIndex={show ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" })}
    >
      <ArrowUp size={22} aria-hidden="true" />
    </button>
  );
}
