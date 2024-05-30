import type { StagesObject } from '../types';

import { matchStage } from './match';
import { groupStage } from './group';
import { sortStage } from './sort';
import { lookupStage } from './lookup';
import { replaceRootStage } from './replaceRoot';
import { projectStage } from './project';
import { unwindStage } from './unwind';
import { addFieldsStage } from './addFields';
import { facetStage } from './facet';
import { countStage } from './count';

const stages: StagesObject = {
  $match: matchStage,
  $group: groupStage,
  $sort: sortStage,
  $lookup: lookupStage,
  $replaceRoot: replaceRootStage,
  $project: projectStage,
  $unwind: unwindStage,
  $addFields: addFieldsStage,
  $facet: facetStage,
  $count: countStage
};

export default stages;
