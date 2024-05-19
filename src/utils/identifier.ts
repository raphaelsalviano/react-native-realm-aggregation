/**
 *
 * @param {any} identifier
 */
export function extractIdentifier(identifier: any) {
  if (typeof identifier === 'string') return identifier;
  if (typeof identifier === 'object')
    return Object.values(identifier)[0] as string;
  return undefined;
}
