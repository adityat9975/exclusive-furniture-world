import { COMPANY, NAV } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="fgrid">
          <div>
            <div className="brand on-dark">
              <span className="logo logo-blue" aria-hidden="true"><b>E</b></span>
              <span><strong>{COMPANY.name}</strong></span>
            </div>
            <p className="fabout">Bulk furniture supply for companies, plants and warehouses.</p>
          </div>
          <div>
            <h3>Explore</h3>
            {NAV.slice(0, 5).map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
          </div>
          <div>
            <h3>Contact</h3>
            <a href="#quote">Request a quote</a>
            <span>{COMPANY.phone}</span>
          </div>
        </div>
        <div className="fine-print">
          <span>{COMPANY.name}</span>
          <span>Preview version. Figures, projects and contact details are placeholders.</span>
        </div>
      </div>
    </footer>
  );
}
