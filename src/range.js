export default function range(values) {
  return Math.max(...values) - Math.min(...values);
}

export const examples = [[[[3, 9, 4]], 6]];
