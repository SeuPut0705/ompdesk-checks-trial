export default function sum(values) {
  return values.reduce((total, value) => total + value, 0);
}

export const examples = [
  [[[1, 2, 3]], 6],
  [[[]], 0],
];
