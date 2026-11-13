export default function cumsum(values) {
  let total = 0;
  return values.map((value) => (total += value));
}

export const examples = [[[[1, 2, 3]], [1, 3, 6]]];
