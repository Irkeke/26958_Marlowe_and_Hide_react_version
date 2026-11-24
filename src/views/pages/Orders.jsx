import Pill from '../components/Pill';
import { useOrders } from '../../controllers/useOrders';

export default function Orders() {
  const { rows, openCount, status, setStatus } = useOrders();

  return (
    <>
      <div className="app-topline">
        <div>
          <h1>Order Tracking</h1>
          <div className="sub">Wholesale, boutique, and custom orders, from cutting table to courier.</div>
        </div>
        <button type="button" className="btn-sm">+ New order</button>
      </div>

      <div className="panel-card">
        <div className="toolbar">
          <div className="filters">
            <select aria-label="Filter by status" value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="all">All statuses</option>
              <option value="cutting">Cutting</option>
              <option value="stitching">In stitching</option>
              <option value="hardware">Awaiting hardware</option>
              <option value="quality">Quality check</option>
              <option value="packed">Packed</option>
              <option value="shipped">Shipped</option>
            </select>
          </div>
          <span className="sub" style={{ fontSize: '0.85rem' }}>{openCount} open orders</span>
        </div>
        <table className="ledger">
          <thead><tr><th>Order</th><th>Client</th><th>Line</th><th>Qty</th><th>Due</th><th>Status</th></tr></thead>
          <tbody>
            {rows.map((o) => (
              <tr key={o.id}><td>{o.id}</td><td>{o.client}</td><td>{o.line}</td><td>{o.qty}</td><td>{o.due}</td><td><Pill tone={o.pill}>{o.statusLabel}</Pill></td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
