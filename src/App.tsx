import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import QuoteForm from "./components/QuoteForm";
import { BackToTop } from "./components/Motion";
import { About, CtaBand, Faq, Hero, Industries, Process, Projects, Proof, Ranges } from "./components/Sections";
import { RANGES } from "./data";
import { useTheme } from "./hooks";

export default function App() {
  const { theme, toggle } = useTheme();
  const [range, setRange] = useState(RANGES[0].name);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header theme={theme} onToggleTheme={toggle} />
      <main id="main">
        <Hero />
        <Proof />
        <About />
        <Ranges onPick={setRange} />
        <Industries />
        <Projects />
        <Process />
        <Faq />
        <CtaBand />
        <QuoteForm range={range} onRange={setRange} />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
