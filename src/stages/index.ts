import type { StagesObject } from '../types';

import { matchStage } from './match.ts';
import { groupStage } from './group.ts';
import { sortStage } from './sort.ts';
import { lookupStage } from './lookup.ts';
import { replaceRootStage } from './replaceRoot.ts';
import { projectStage } from './project.ts';
import { unwindStage } from './unwind.ts';
import { addFieldsStage } from './addFields.ts';
import { facetStage } from './facet.ts';
import { countStage } from './count.ts';

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
