export default function gcd(a, b) {
  return b === 0 ? Math.abs(a) : gcd(b, a % b);
}

export const examples = [[[12, 18], 6], [[7, 0], 7]];
