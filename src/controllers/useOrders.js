// CONTROLLER (hook) — status filter state + rows from the orders model.
import { useMemo, useState } from 'react';
import * as orders from '../models/ordersModel';

export function useOrders() {
  const [status, setStatus] = useState('all');
  const rows = useMemo(
    () => orders.getAll().filter((o) => status === 'all' || o.status === status),
    [status]);
  return { rows, openCount: orders.getOpenCount(), status, setStatus };
}
