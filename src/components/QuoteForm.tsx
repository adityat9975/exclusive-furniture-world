import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import Icon from "./Icon";
import { Reveal } from "./Motion";
import { COMPANY, RANGES } from "../data";

type Errors = Partial<Record<"company" | "person" | "phone" | "qty", string>>;

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {children}
      {error && <p className="err" id={`${id}-err`}>{error}</p>}
    </div>
  );
}

export default function QuoteForm({ range, onRange }: { range: string; onRange: (v: string) => void }) {
  const [v, setV] = useState({ company: "", person: "", phone: "", qty: "50", when: "", msg: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState<string | null>(null);

  const set = (k: keyof typeof v) => (e: { target: { value: string } }) => setV((s) => ({ ...s, [k]: e.target.value }));
  const aria = (k: keyof Errors) => ({ "aria-invalid": errors[k] ? true : undefined, "aria-describedby": errors[k] ? `${k}-err` : undefined });

  function submit(e: FormEvent) {
    e.preventDefault();
    const next: Errors = {};
    if (!v.company.trim()) next.company = "Enter your company name.";
    if (!v.person.trim()) next.person = "Enter the name of the person we should contact.";
    if (!/^[+\d][\d\s-]{6,}$/.test(v.phone.trim())) next.phone = "Enter a phone number with at least 7 digits.";
    if (!(Number(v.qty) >= 1)) next.qty = "Enter a quantity of 1 or more.";
    setErrors(next);
    setSent(Object.keys(next).length ? null : `Request noted for ${v.company.trim()}: about ${v.qty} pieces from ${range}. On the live site this goes to the sales team.`);
  }

  return (
    <section className="band" id="quote" aria-labelledby="quote-h">
      <div className="wrap split">
        <Reveal variant="left"><form className="form" onSubmit={submit} noValidate>
          <div><span className="eyebrow">Request a quote</span><h2 id="quote-h">Tell us what you need</h2></div>
          <div className="row">
            <Field id="company" label="Company" error={errors.company}>
              <input id="company" autoComplete="organization" value={v.company} onChange={set("company")} {...aria("company")} />
            </Field>
            <Field id="person" label="Contact person" error={errors.person}>
              <input id="person" autoComplete="name" value={v.person} onChange={set("person")} {...aria("person")} />
            </Field>
          </div>
          <div className="row">
            <Field id="phone" label="Phone" error={errors.phone}>
              <input id="phone" type="tel" autoComplete="tel" placeholder="+91" value={v.phone} onChange={set("phone")} {...aria("phone")} />
            </Field>
            <Field id="range" label="Range">
              <select id="range" value={range} onChange={(e) => onRange(e.target.value)}>
                {RANGES.map((r) => <option key={r.name}>{r.name}</option>)}
              </select>
            </Field>
          </div>
          <div className="row">
            <Field id="qty" label="Approximate quantity" error={errors.qty}>
              <input id="qty" type="number" min={1} inputMode="numeric" value={v.qty} onChange={set("qty")} {...aria("qty")} />
            </Field>
            <Field id="when" label="Needed by">
              <input id="when" type="month" value={v.when} onChange={set("when")} />
            </Field>
          </div>
          <Field id="msg" label="Site and requirements">
            <textarea id="msg" value={v.msg} onChange={set("msg")} />
          </Field>
          <button className="btn btn-blue" type="submit">Send request</button>
          <div role="status" aria-live="polite">
            {sent && <p className="ok"><Check size={18} aria-hidden="true" /> {sent}</p>}
          </div>
          <p className="fine">Preview only. This form does not send data yet.</p>
        </form></Reveal>

        <Reveal className="contact" variant="right" delay={120}>
          <div><span className="eyebrow">Contact</span><h2>Talk to our sales team</h2></div>
          <div className="citem"><i className="chip chip-blue"><Icon name="pin" size={22} /></i><div><small>Showroom and office</small><span>{COMPANY.address}</span></div></div>
          <div className="citem"><i className="chip chip-teal"><Icon name="phone" size={22} /></i><div><small>Phone</small><span>{COMPANY.phone}</span></div></div>
          <div className="citem"><i className="chip chip-amber"><Icon name="mail" size={22} /></i><div><small>Email</small><span>{COMPANY.email}</span></div></div>
          <p className="fine">Address, phone and email are placeholders.</p>
        </Reveal>
      </div>
    </section>
  );
}
