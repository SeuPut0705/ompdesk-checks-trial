export default function sign(value) {
  return value > 0 ? 1 : value < 0 ? -1 : 0;
}

export const examples = [[[-7], -1], [[0], 0]];
