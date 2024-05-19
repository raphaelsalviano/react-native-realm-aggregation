import sift from 'sift';

import type Realm from 'realm';
import type { DefaultObject } from '../types';

export function matchStage(
  collection: DefaultObject[],
  pipeline: any,
  realm: Realm
) {
  return collection.filter(sift(pipeline));
}
