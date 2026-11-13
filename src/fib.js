export default function fib(n) {
  let [a, b] = [0, 1];
  for (let i = 1; i < n; i++) [a, b] = [b, a + b];
  return a;
}

export const examples = [[[10], 55], [[1], 1]];
