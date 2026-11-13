export default function lerp(a, b, t) {
  return a + (b - a) * t;
}

export const examples = [[[0, 10, 0.5], 5]];
