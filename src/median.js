export default function median(values) {
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

export const examples = [[[[3, 1, 2]], 2], [[[4, 1, 3, 2]], 2.5]];
