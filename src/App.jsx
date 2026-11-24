import { Routes, Route } from 'react-router-dom';
import PublicLayout from './views/components/PublicLayout';
import AppLayout from './views/components/AppLayout';
import Home from './views/pages/Home';
import About from './views/pages/About';
import Contact from './views/pages/Contact';
import ServerClock from './views/pages/ServerClock';
import Dashboard from './views/pages/Dashboard';
import Inventory from './views/pages/Inventory';
import Orders from './views/pages/Orders';
import Production from './views/pages/Production';

// Public marketing site uses PublicLayout; the internal portal uses the sidebar AppLayout.
export default function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/server-clock" element={<ServerClock />} />
      </Route>
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/production" element={<Production />} />
      </Route>
    </Routes>
  );
}
