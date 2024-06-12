import type Realm from 'realm';
import type { DefaultObject } from '../types';

export function projectStage(
  collection: DefaultObject[],
  pipeline: any,
  realm: Realm
) {
  return collection?.map((item) => {
    for (const [key, value] of Object.entries(pipeline)) {
      if (value || typeof value === 'string')
        throw new Error('Includes operation not implemented');
      delete item[key];
    }
    return item;
  });
}
