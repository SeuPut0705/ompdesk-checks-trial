export default function dot(a, b) {
  return a.reduce((total, value, i) => total + value * b[i], 0);
}

export const examples = [[[[1, 2, 3], [4, 5, 6]], 32]];
