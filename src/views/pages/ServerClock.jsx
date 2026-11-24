import { useServerClock } from '../../controllers/useServerClock';

export default function ServerClock() {
  const clock = useServerClock();
  const fromServer = clock.source === 'server';

  return (
    <>
      <section className="page-head">
        <div className="container">
          <div className="hero-eyebrow">Coursework requirement</div>
          <h1>Server date &amp; time</h1>
          <p className="lede">This page asks a PHP script (<code>datetime.php</code>) for the current server date and time when the site is run through Apache.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="badge-note">
            {fromServer
              ? 'Live from PHP — this data was produced by datetime.php on the server.'
              : 'PHP not reachable (dev server or plain file) — showing your browser\'s clock instead. Run through Apache to see the server time.'}
          </div>

          <div className="panel-card" style={{ maxWidth: 520 }}>
            <div className="panel-title"><h3>Right now</h3></div>
            <table className="ledger">
              <tbody>
                <tr><td style={{ width: '40%' }}>Date</td><td><strong>{clock.date}</strong></td></tr>
                <tr><td>Time</td><td><strong>{clock.time}</strong></td></tr>
                <tr><td>Timezone</td><td>{clock.timezone}</td></tr>
                <tr><td>Source</td><td>{fromServer ? 'Server (PHP)' : 'Browser (fallback)'}</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
