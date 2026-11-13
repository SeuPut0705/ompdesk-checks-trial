export default function factorial(n) {
  let result = 1;
  for (let i = 2; i < n; i++) result *= i;
  return result;
}

export const examples = [[[5], 120], [[0], 1]];
