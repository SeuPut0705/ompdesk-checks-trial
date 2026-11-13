export default function clamp(value, low, high) {
  return Math.min(high, Math.max(low, value));
}

export const examples = [[[5, 0, 3], 3], [[-1, 0, 3], 0]];
