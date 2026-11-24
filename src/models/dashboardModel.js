// MODEL — dashboard-only figures (chart data, KPI deltas).
export const weeklyOutput = [
  { label: 'Mon', pct: 70, variant: 1 },
  { label: 'Tue', pct: 55, variant: 2 },
  { label: 'Wed', pct: 85, variant: 1 },
  { label: 'Thu', pct: 60, variant: 2 },
  { label: 'Fri', pct: 95, variant: 1 },
  { label: 'Sat', pct: 30, variant: 2 },
];
export const kpiDeltas = {
  openOrders: '▲ 4 since Monday',
  inProduction: '▲ 2 today',
  lowStock: '▲ needs reorder',
  finished: '▲ on pace for 40',
};
export const inProductionCount = 18;
export const finishedThisWeek = 31;
