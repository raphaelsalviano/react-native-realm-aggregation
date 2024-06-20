import type { DefaultObject } from '../types';
import type Realm from 'realm';

export function limitStage(
  collection: DefaultObject[],
  pipeline: any,
  realm: Realm
) {
  if (typeof pipeline === 'number' && pipeline > 0) {
    return collection.slice(0, pipeline);
  }

  throw new Error('$limit argument must be a positive number');
}
