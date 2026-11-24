import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import BrandMark from './BrandMark';
import Footer from './Footer';

const links = [
  ['/', 'Home', true],
  ['/about', 'About'],
  ['/inventory', 'Inventory'],
  ['/orders', 'Orders'],
  ['/production', 'Production'],
  ['/contact', 'Contact'],
];

export default function PublicLayout() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu and jump to top whenever the route changes
  useEffect(() => { setOpen(false); window.scrollTo(0, 0); }, [pathname]);

  return (
    <>
      <div className="topbar">
        <div className="container">
          <span>Workshop No. 4, Nairobi Industrial Area</span>
          <span className="tb-status">Line status: <strong>Running</strong> · Shift B</span>
        </div>
      </div>

      <header className="site">
        <div className="container nav-wrap">
          <Link to="/" className="brand">
            <BrandMark />
            <span className="brand-text">Marlowe &amp; <span>Hide</span></span>
          </Link>
          <button className="nav-toggle" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>
            <span></span>
          </button>
          <nav className={`primary${open ? ' open' : ''}`} aria-label="Primary">
            <ul>
              {links.map(([to, label, end]) => (
                <li key={to}>
                  <NavLink to={to} end={end} className={({ isActive }) => (isActive ? 'active' : '')}>{label}</NavLink>
                </li>
              ))}
              <li><NavLink to="/dashboard" className="cta">Open Portal</NavLink></li>
            </ul>
          </nav>
        </div>
      </header>

      <main><Outlet /></main>
      <Footer />
    </>
  );
}
