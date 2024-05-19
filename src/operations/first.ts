import { DefaultObject } from '../types';

export function firstOperation(
  collection: DefaultObject[],
  expression: string
) {
  if (typeof expression !== 'string') throw new Error('Expression invalid');
  if (expression.toLowerCase().includes('root')) {
    return collection[0] as DefaultObject;
  }
  return collection[0][expression.slice(1)] as any;
}
