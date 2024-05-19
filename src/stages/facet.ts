import type Realm from 'realm';
import type { DefaultObject } from '../types';
import { aggregateInternal } from '../utils/aggregate.ts';

export function facetStage(
  collection: DefaultObject[],
  pipeline: any,
  realm: Realm
) {
  const objResult: any = {};

  for (const [key, value] of Object.entries(pipeline)) {
    objResult[key] = aggregateInternal(collection, value as any, realm);
  }

  return [objResult] as DefaultObject[];
}
