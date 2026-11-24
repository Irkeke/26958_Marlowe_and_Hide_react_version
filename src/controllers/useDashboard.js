// CONTROLLER (hook) — combines several models into what the dashboard view needs.
import * as inventory from '../models/inventoryModel';
import * as orders from '../models/ordersModel';
import * as dash from '../models/dashboardModel';
import { useClock } from './useClock';

export function useDashboard() {
  return {
    clock: useClock(),
    kpis: [
      { label: 'Open orders', value: orders.getOpenCount(), delta: dash.kpiDeltas.openOrders, tone: 'up' },
      { label: 'Bags in production', value: dash.inProductionCount, delta: dash.kpiDeltas.inProduction, tone: 'up' },
      { label: 'Low-stock materials', value: inventory.getLowStock().length, delta: dash.kpiDeltas.lowStock, tone: 'down' },
      { label: 'Finished this week', value: dash.finishedThisWeek, delta: dash.kpiDeltas.finished, tone: 'up' },
    ],
    weekly: dash.weeklyOutput,
    recentOrders: orders.getRecent(5),
    lowStock: inventory.getLowStock(),
  };
}
