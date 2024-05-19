import type { DefaultObject } from '../types';
import type Realm from 'realm';

export function sortStage(
  collection: DefaultObject[],
  pipeline: any,
  realm: Realm
) {
  const field = Object.keys(pipeline)[0];
  const order = pipeline[field];

  const ascendingOrder = (a: any, b: any) => {
    if (a[field] < b[field]) {
      return -1;
    }
    if (a[field] > b[field]) {
      return 1;
    }
    return 0;
  };

  const descendingOrder = (a: any, b: any) => {
    if (a[field] > b[field]) {
      return -1;
    }
    if (a[field] < b[field]) {
      return 1;
    }
    return 0;
  };

  return collection.sort(order > 0 ? ascendingOrder : descendingOrder);
}
