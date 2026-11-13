export default function product(values) {
  return values.reduce((total, value) => total * value, 1);
}

export const examples = [[[[2, 3, 4]], 24], [[[]], 1]];
