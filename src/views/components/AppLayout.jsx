import { Link, NavLink, Outlet } from 'react-router-dom';
import BrandMark from './BrandMark';
import Icon from './Icon';

const portal = [
  ['/dashboard', 'Overview', 'dashboard'],
  ['/inventory', 'Inventory', 'inventory'],
  ['/orders', 'Orders', 'orders'],
  ['/production', 'Production', 'clock'],
];
const site = [
  ['/', 'Home', 'home'],
  ['/about', 'About', 'info'],
  ['/contact', 'Contact', 'mail'],
  ['/server-clock', 'Server clock', 'clock'],
];

function SideList({ items }) {
  return (
    <ul className="side-nav">
      {items.map(([to, label, icon]) => (
        <li key={to}>
          <NavLink to={to} end className={({ isActive }) => (isActive ? 'active' : '')}>
            <Icon name={icon} />{label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default function AppLayout() {
  return (
    <div className="app-shell">
      <aside className="app-sidebar">
        <Link to="/" className="brand">
          <BrandMark dark />
          <span className="brand-text">Marlowe &amp; Hide</span>
        </Link>
        <div className="side-section">
          <div className="side-label">PORTAL</div>
          <SideList items={portal} />
        </div>
        <div className="side-section">
          <div className="side-label">WORKSHOP SITE</div>
          <SideList items={site} />
        </div>
      </aside>
      <div className="app-main"><Outlet /></div>
    </div>
  );
}
