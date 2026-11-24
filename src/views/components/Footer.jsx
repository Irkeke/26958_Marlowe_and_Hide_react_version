import { Link } from 'react-router-dom';
import BrandMark from './BrandMark';

export default function Footer() {
  return (
    <footer className="site">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link to="/" className="brand" style={{ marginBottom: '0.9rem' }}>
              <BrandMark dark />
              <span className="brand-text">Marlowe &amp; Hide</span>
            </Link>
            <p>A small-batch leather goods workshop, and the internal portal that keeps its floor organized.</p>
          </div>
          <div>
            <h4>Portal</h4>
            <ul>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/inventory">Inventory</Link></li>
              <li><Link to="/orders">Orders</Link></li>
              <li><Link to="/production">Production</Link></li>
            </ul>
          </div>
          <div>
            <h4>Workshop</h4>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/server-clock">Server clock (PHP)</Link></li>
            </ul>
          </div>
          <div>
            <h4>Visit</h4>
            <ul>
              <li>Workshop No. 4, Enterprise Rd</li>
              <li>Nairobi Industrial Area</li>
              <li>Mon–Fri, 8:00–17:00</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Marlowe &amp; Hide Leather Co. Coursework build — React version.</span>
          <span>React + Vite</span>
        </div>
      </div>
    </footer>
  );
}
