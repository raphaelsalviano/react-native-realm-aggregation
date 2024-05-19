import type Realm from 'realm';
import type { DefaultObject } from '../types';

function executeExpression(collection: DefaultObject[], path: string) {
  const result: DefaultObject[] = [];
  collection.forEach((item) => {
    const fieldValues = item[path.slice(1)];
    if (fieldValues) {
      if (Array.isArray(fieldValues)) {
        fieldValues.forEach((value) => {
          result.push({ ...item, [path.slice(1)]: value });
        });
      } else {
        result.push({ ...item, [path.slice(1)]: fieldValues });
      }
    }
  });
  return result;
}

export function unwindStage(
  collection: DefaultObject[],
  pipeline: any,
  realm: Realm
) {
  if (typeof pipeline === 'string') {
    return executeExpression(collection, pipeline);
  } else {
    if (Object.hasOwn(pipeline, 'path')) {
      return executeExpression(collection, pipeline.path);
    }
  }
  throw new Error('Unrecognized options');
}
