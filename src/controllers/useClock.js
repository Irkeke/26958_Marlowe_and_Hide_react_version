// CONTROLLER (hook) — ticking browser clock for the dashboard chip.
import { useEffect, useState } from 'react';

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const pad = (n) => String(n).padStart(2, '0');

export function formatNow(now = new Date()) {
  return {
    date: `${DAYS[now.getDay()]}, ${MONTHS[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`,
    time: `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`,
  };
}

export function useClock() {
  const [now, setNow] = useState(formatNow());
  useEffect(() => {
    const id = setInterval(() => setNow(formatNow()), 1000);
    return () => clearInterval(id);
  }, []);
  return now;
}
