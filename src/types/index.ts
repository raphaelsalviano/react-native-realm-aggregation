import type Realm from 'realm';
import { SUPPORTED_OPERATIONS, SUPPORTED_STAGES } from '../constants';

export type DefaultObject = Record<string, unknown>;

export type StagesObject = {
  [stage in (typeof SUPPORTED_STAGES)[number]]: (
    collection: DefaultObject[],
    pipeline: any,
    realm: Realm
  ) => DefaultObject[];
};

export type OperationsObject = {
  [operation in (typeof SUPPORTED_OPERATIONS)[number]]: (
    collection: any,
    expression: any
  ) => any;
};
