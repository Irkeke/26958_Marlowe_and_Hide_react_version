// CONTROLLER (hook) — asks the PHP endpoint (datetime.php) for the server's time each second.
// If PHP isn't reachable (e.g. `npm run dev`), it falls back to the browser clock and says so.
import { useEffect, useState } from 'react';
import { formatNow } from './useClock';

export function useServerClock() {
  const [state, setState] = useState({ ...formatNow(), timezone: '—', source: 'loading' });

  useEffect(() => {
    let active = true;
    async function tick() {
      try {
        const res = await fetch(`${import.meta.env.BASE_URL}datetime.php`, { cache: 'no-store' });
        const type = res.headers.get('content-type') || '';
        if (!res.ok || !type.includes('json')) throw new Error('not php');
        const data = await res.json();
        if (active) setState({ ...data, source: 'server' });
      } catch {
        if (active) setState({ ...formatNow(), timezone: Intl.DateTimeFormat().resolvedOptions().timeZone, source: 'browser' });
      }
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => { active = false; clearInterval(id); };
  }, []);

  return state;
}
