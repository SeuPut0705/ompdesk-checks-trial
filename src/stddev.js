export default function stddev(values) {
  const avg = values.reduce((total, value) => total + value, 0) / values.length;
  return Math.sqrt(values.reduce((total, value) => total + (value - avg) ** 2, 0) / values.length);
}

export const examples = [[[[2, 4, 4, 4, 5, 5, 7, 9]], 2]];
