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
  '$count',
  '$limit'
] as const;

export const SUPPORTED_OPERATIONS = ['$first', '$filter'] as const;
