// CONTROLLER (hook) — holds filter state, asks the model for rows, returns view-ready data.
import { useMemo, useState } from 'react';
import * as inventory from '../models/inventoryModel';

export function useInventory() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  const rows = useMemo(() => {
    const q = search.toLowerCase();
    return inventory.getAll().filter((m) =>
      (m.name + ' ' + m.supplier).toLowerCase().includes(q) &&
      (category === 'all' || m.category === category));
  }, [search, category]);

  return { rows, total: inventory.getAll().length, search, setSearch, category, setCategory, statusLabel: inventory.statusLabel };
}
