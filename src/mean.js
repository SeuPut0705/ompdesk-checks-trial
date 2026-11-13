import sum from "./sum.js";

export default function mean(values) {
  if (values.length === 0) throw new RangeError("mean of no values");
  return sum(values) / values.length;
}

export const examples = [[[[2, 4, 6]], 4]];
