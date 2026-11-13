export default function cummax(values) {
  let best = -Infinity;
  return values.map((value) => (best = Math.max(best, value)));
}

export const examples = [[[[1, 3, 2]], [1, 3, 3]]];
