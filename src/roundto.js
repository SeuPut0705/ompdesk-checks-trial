export default function roundto(value, places) {
  return Math.round(value * 10 ** places) / 10 ** places;
}

export const examples = [[[3.14159, 2], 3.14]];
