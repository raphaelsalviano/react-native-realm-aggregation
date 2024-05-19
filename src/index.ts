import type Realm from 'realm';
import type {DefaultObject} from './types';

import stages from './stages';
import {SUPPORTED_STAGES} from './constants';

/**
 *
 * @param {string} collectionName
 * @param {any[]} aggregationPipeline
 * @param {Realm} realm
 */
export default function aggregate<T = any>(
  collectionName: string,
  aggregationPipeline: any[],
  realm: Realm
) {
  let collection = realm.objects<T>(collectionName).toJSON();
  aggregationPipeline.forEach((aggregation) => {
    for (const stage in aggregation) {
      // @ts-ignore
      if (!SUPPORTED_STAGES.includes(stage))
        throw new Error(`The stage ${stage} has no implemented`);

      // @ts-ignore
      collection = stages[stage]<DefaultObject>(
        collection,
        aggregation[stage],
        realm
      );
    }
  });
  return collection as T[];
}
