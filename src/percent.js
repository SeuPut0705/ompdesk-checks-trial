export default function percent(part, whole) {
  return Math.round((part / whole) * 100);
}

export const examples = [[[1, 4], 25], [[1, 3], 33.33]];
