// CONTROLLER (hook) — gathers every station queue from the production model.
import * as production from '../models/productionModel';

export function useProduction() {
  return {
    counts: production.getQueueCounts(),
    cutting: production.getStation('cutting'),
    stitching: production.getStation('stitching'),
    hardware: production.getStation('hardware'),
    quality: production.getStation('quality'),
  };
}
