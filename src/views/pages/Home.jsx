import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import heroHandbag from '../../assets/hero-handbag.jpg';

const modules = [
  { tag: 'Module 01', icon: 'inventory', title: 'Inventory & Materials', text: 'Live counts of hides, hardware, thread, and lining, sorted by supplier and reorder threshold — so cutting never waits on stock that isn\'t there.' },
  { tag: 'Module 02', icon: 'orders', title: 'Order Tracking', text: 'From a boutique\'s wholesale order to a single custom commission, every job is tracked from cutting table to courier, with status visible to the whole team.' },
  { tag: 'Module 03', icon: 'clock', title: 'Production Scheduling', text: 'Cutting, stitching, hardware-fitting, and quality pass each get a station and a queue, so a bag\'s progress through the workshop is never a guess.' },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div>
            <div className="hero-eyebrow">Est. 2011 · Full-grain leather goods</div>
            <h1>The workshop's records, stitched into one system.</h1>
            <p className="lede">Marlowe &amp; Hide handcrafts leather bags in small batches. This portal is where our cutting, stitching, and finishing teams track materials, orders, and production — replacing the old paper ledgers on the workshop floor.</p>
            <div className="hero-actions">
              <Link to="/dashboard" className="btn btn-primary">Open the dashboard</Link>
              <Link to="/about" className="btn btn-ghost">About the workshop</Link>
            </div>
          </div>
          <div className="hero-art">
            <img src={heroHandbag} alt="A Marlowe & Hide tote in saddle tan leather, with brass hardware and a signed hang tag." loading="eager" />
          </div>
        </div>
      </section>

      <section id="modules">
        <div className="container">
          <div className="section-head">
            <h2>Three ways the portal keeps pace with the floor</h2>
            <p>Every stitch starts with a material and ends with an order. These are the core modules the team opens each morning.</p>
          </div>
          <div className="grid-3">
            {modules.map((m) => (
              <div className="swatch" key={m.tag}>
                <Icon name={m.icon} className="swatch-icon" />
                <span className="tag">{m.tag}</span>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="container">
          <div className="split">
            <div>
              <h2>Built for a workshop, not a warehouse</h2>
              <p>Marlowe &amp; Hide makes roughly forty bags a week across three lines: totes, crossbody, and structured clutches. That's small enough that every bag has a maker's initials on the inside seam — and this portal is sized to match: no modules the floor doesn't use, no reports nobody reads.</p>
              <p>It's also a teaching build: a frontend-only mock-up of the management system, made to demonstrate page structure, navigation, and interface design before any of it is wired to a real database.</p>
            </div>
            <div className="mv-card">
              <h3>What's inside the portal</h3>
              <p>A public-facing site (this one) for context, and an internal dashboard for the three modules above — inventory, orders, and production — plus a page showing the server's current date and time, powered by PHP for the coursework requirement.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
