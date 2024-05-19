import type { DefaultObject } from '../types';
import type Realm from 'realm';
import { aggregateInternal } from '../utils/aggregate.ts';

export function lookupStage(
  collection: DefaultObject[],
  pipeline: any,
  realm: Realm
) {
  return collection.map((item) => {
    const { from, as, localField, foreignField, ...rest } = pipeline;
    const collectionResult = aggregateInternal(from, rest.pipeline, realm);

    const localFields = localField.split('.');
    let data;

    if (localFields.length > 1) {
      data = (item[localFields[0]] as any[])
        .map((itemField: any) =>
          collectionResult.filter(
            (result) => result[foreignField] === itemField[localFields[1]]
          )
        )
        .reduce((list: any, sub: any) => list.concat(sub), []);
    } else {
      data = collectionResult.filter(
        (result) => result[foreignField] === item[localField]
      );
    }

    return {
      ...item,
      [as]: data
    } as DefaultObject;
  });
}
