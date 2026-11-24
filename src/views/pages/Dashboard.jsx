import { Link } from 'react-router-dom';
import Pill from '../components/Pill';
import { useDashboard } from '../../controllers/useDashboard';

export default function Dashboard() {
  const { clock, kpis, weekly, recentOrders, lowStock } = useDashboard();

  return (
    <>
      <div className="app-topline">
        <div>
          <h1>Good morning, Workshop</h1>
          <div className="sub">Here's where things stand on the floor right now.</div>
        </div>
        <div className="clock-chip">
          <span>{clock.date}</span>
          <strong>{clock.time}</strong>
        </div>
      </div>

      <div className="kpi-row">
        {kpis.map((k) => (
          <div className="kpi" key={k.label}>
            <div className="label">{k.label}</div>
            <div className="val">{k.value}</div>
            <div className={`delta ${k.tone}`}>{k.delta}</div>
          </div>
        ))}
      </div>

      <div className="panel-card">
        <div className="panel-title"><h3>Weekly output by line</h3><Link to="/production" className="link">View production →</Link></div>
        <div className="bars">
          {weekly.map((d) => (
            <div className="bar-col" key={d.label}>
              <div className={d.variant === 2 ? 'bar b2' : 'bar'} style={{ height: `${d.pct}%` }}></div>
              <div className="bar-label">{d.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="panel-card">
        <div className="panel-title"><h3>Recent orders</h3><Link to="/orders" className="link">View all orders →</Link></div>
        <table className="ledger">
          <thead><tr><th>Order</th><th>Client</th><th>Line</th><th>Qty</th><th>Status</th></tr></thead>
          <tbody>
            {recentOrders.map((o) => (
              <tr key={o.id}><td>{o.id}</td><td>{o.client}</td><td>{o.line}</td><td>{o.qty}</td><td><Pill tone={o.pill}>{o.statusLabel}</Pill></td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="panel-card">
        <div className="panel-title"><h3>Materials needing reorder</h3><Link to="/inventory" className="link">View inventory →</Link></div>
        <table className="ledger">
          <thead><tr><th>Material</th><th>On hand</th><th>Reorder point</th><th></th></tr></thead>
          <tbody>
            {lowStock.map((m) => (
              <tr key={m.name}>
                <td>{m.name}</td><td>{m.onHand}</td><td>{m.reorderPoint}</td>
                <td><div className="progress"><span style={{ width: '70%', background: 'var(--rust)' }}></span></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
