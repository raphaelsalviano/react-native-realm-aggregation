import type Realm from 'realm';
import type { DefaultObject } from '../types';

export function countStage(
  collection: DefaultObject[],
  pipeline: any,
  realm: Realm
) {
  if (!pipeline || typeof pipeline !== 'string')
    throw new Error('Invalid pipeline');

  return [{ [pipeline]: collection.length }];
}
