export default function lcm(a, b) {
  const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));
  return (a / gcd(a, b)) * b;
}

export const examples = [[[4, 6], 12]];
