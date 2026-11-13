export default function sumsq(values) {
  return values.reduce((total, value) => total + value * value, 0);
}

export const examples = [[[[1, 2, 3]], 14]];
