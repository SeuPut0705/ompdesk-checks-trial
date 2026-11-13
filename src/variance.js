export default function variance(values) {
  const avg = values.reduce((total, value) => total + value, 0) / values.length;
  return values.reduce((total, value) => total + (value - avg) ** 2, 0) / values.length;
}

export const examples = [[[[1, 2, 3, 4]], 1.25]];
