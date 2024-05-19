import type { DefaultObject } from '../types';
import type Realm from 'realm';
import { extractIdentifier } from '../utils/identifier.ts';
import { executeOperation } from '../operations';

export function groupStage(
  collection: DefaultObject[],
  pipeline: any,
  realm: Realm
) {
  const results: { [key: string]: any }[] = [];
  const { _id, ...groupFields } = pipeline;
  for (let item of collection) {
    const identifier = extractIdentifier(_id);
    let currentItem = results.find((result) => result._id === identifier);

    if (!currentItem) {
      results.push({
        _id: item[identifier?.slice(1) as string],
        __originalItem: [item]
      });
    } else {
      currentItem.__originalItem.push(item);
    }
  }
  for (const [fieldName, accumulatorObject] of Object.entries(groupFields)) {
    for (let group of results) {
      group[fieldName] = executeOperation(
        accumulatorObject,
        group.__originalItem
      );
    }
  }
  results.forEach((result) => delete result.__originalItem);
  return results;
}
