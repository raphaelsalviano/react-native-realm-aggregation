export const SUPPORTED_STAGES = [
  '$match',
  '$group',
  '$sort',
  '$project',
  '$addFields',
  '$replaceRoot',
  '$lookup',
  '$facet',
  '$unwind',
  '$count'
] as const;

export const SUPPORTED_OPERATIONS = ['$first', '$filter'] as const;
