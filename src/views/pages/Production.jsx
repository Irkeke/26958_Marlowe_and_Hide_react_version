import Pill from '../components/Pill';
import { useProduction } from '../../controllers/useProduction';

const Progress = ({ pct }) => <div className="progress"><span style={{ width: `${pct}%` }}></span></div>;

function WorkTable({ title, workerLabel, rows }) {
  return (
    <div className="panel-card">
      <div className="panel-title"><h3>{title}</h3></div>
      <table className="ledger">
        <thead><tr><th>Order</th><th>Line</th><th>{workerLabel}</th><th>Started</th><th>Progress</th></tr></thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.order}><td>{r.order}</td><td>{r.line}</td><td>{r.worker}</td><td>{r.started}</td><td><Progress pct={r.progress} /></td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Production() {
  const { counts, cutting, stitching, hardware, quality } = useProduction();

  return (
    <>
      <div className="app-topline">
        <div>
          <h1>Production Scheduling</h1>
          <div className="sub">Where every bag on the floor sits right now, station by station.</div>
        </div>
      </div>

      <div className="kpi-row">
        <div className="kpi"><div className="label">Cutting queue</div><div className="val">{counts.cutting}</div></div>
        <div className="kpi"><div className="label">Stitching queue</div><div className="val">{counts.stitching}</div></div>
        <div className="kpi"><div className="label">Hardware &amp; finishing</div><div className="val">{counts.hardware}</div></div>
        <div className="kpi"><div className="label">Quality check</div><div className="val">{counts.quality}</div></div>
      </div>

      <WorkTable title="Cutting station" workerLabel="Cutter" rows={cutting} />
      <WorkTable title="Stitching station" workerLabel="Stitcher" rows={stitching} />

      <div className="panel-card">
        <div className="panel-title"><h3>Hardware &amp; finishing</h3></div>
        <table className="ledger">
          <thead><tr><th>Order</th><th>Line</th><th>Blocking on</th><th>Status</th></tr></thead>
          <tbody>
            {hardware.map((r) => (
              <tr key={r.order}><td>{r.order}</td><td>{r.line}</td><td>{r.blockingOn}</td><td><Pill tone={r.pill}>{r.statusLabel}</Pill></td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="panel-card">
        <div className="panel-title"><h3>Quality check</h3></div>
        <table className="ledger">
          <thead><tr><th>Order</th><th>Line</th><th>Inspector</th><th>Result</th></tr></thead>
          <tbody>
            {quality.map((r) => (
              <tr key={r.order}><td>{r.order}</td><td>{r.line}</td><td>{r.inspector}</td><td><Pill tone={r.pill}>{r.result}</Pill></td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
