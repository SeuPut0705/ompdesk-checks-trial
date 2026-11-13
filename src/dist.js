export default function dist(a, b) {
  return Math.hypot(b[0] - a[0], b[1] - a[1]);
}

export const examples = [[[[0, 0], [3, 4]], 5]];
