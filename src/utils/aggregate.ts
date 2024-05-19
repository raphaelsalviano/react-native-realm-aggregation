import type Realm from 'realm';
import type { DefaultObject } from '../types';
import stages from '../stages';

export function aggregateInternal(
  collection: string | DefaultObject[],
  aggregationPipeline: any[],
  realm: Realm
) {
  if (typeof collection !== 'string' && !Array.isArray(collection))
    throw new Error('Invalid collection');

  let _collection = Array.isArray(collection)
    ? collection
    : realm.objects(collection as string).toJSON();

  aggregationPipeline.forEach((aggregation) => {
    for (const stage in aggregation) {
      if (!Object.keys(stages).includes(stage))
        throw new Error(`The stage ${stage} has no implemented`);
      // @ts-ignore
      _collection = stages[stage]<DefaultObject>(
        _collection,
        aggregation[stage],
        realm
      );
    }
  });

  return _collection as DefaultObject[];
}
