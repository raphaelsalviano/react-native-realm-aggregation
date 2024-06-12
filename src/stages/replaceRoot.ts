import type { DefaultObject } from '../types';
import type Realm from 'realm';

export function replaceRootStage(
  collection: DefaultObject[],
  pipeline: any,
  realm: Realm
) {
  return collection?.map((item) => {
    const [[key, value]] = Object.entries(pipeline);

    if (!key || key !== 'newRoot')
      throw new Error('Invalid sintax $replaceRoot');
    if (!value) throw new Error('Invalid value');
    if (typeof value !== 'string')
      throw new Error('Expression model not implemented');

    return item[value.slice(1)] as DefaultObject;
  });
}
