import Pill from '../components/Pill';
import { useInventory } from '../../controllers/useInventory';

export default function Inventory() {
  const { rows, total, search, setSearch, category, setCategory, statusLabel } = useInventory();

  return (
    <>
      <div className="app-topline">
        <div>
          <h1>Inventory &amp; Materials</h1>
          <div className="sub">Hides, hardware, thread, and lining — what's on the shelf right now.</div>
        </div>
        <button type="button" className="btn-sm">+ Log new stock</button>
      </div>

      <div className="panel-card">
        <div className="toolbar">
          <div className="filters">
            <input type="search" placeholder="Search materials or supplier…" aria-label="Search inventory" value={search} onChange={(e) => setSearch(e.target.value)} />
            <select aria-label="Filter by category" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="all">All categories</option>
              <option value="hide">Hide &amp; leather</option>
              <option value="hardware">Hardware</option>
              <option value="thread">Thread &amp; lining</option>
              <option value="packaging">Packaging</option>
            </select>
          </div>
          <span className="sub" style={{ fontSize: '0.85rem' }}>{total} materials tracked</span>
        </div>
        <table className="ledger">
          <thead><tr><th>Material</th><th>Category</th><th>Supplier</th><th>On hand</th><th>Reorder pt.</th><th>Status</th></tr></thead>
          <tbody>
            {rows.map((m) => (
              <tr key={m.name}>
                <td>{m.name}</td><td>{m.categoryLabel}</td><td>{m.supplier}</td><td>{m.onHand}</td><td>{m.reorderPoint}</td>
                <td><Pill tone={m.status}>{statusLabel[m.status]}</Pill></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
