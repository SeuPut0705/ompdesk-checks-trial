import { test } from "node:test";
import assert from "node:assert/strict";
import mean from "../src/mean.js";

test("mean averages the values", () => assert.equal(mean([2, 4, 6]), 4));
test("mean of nothing throws", () => assert.throws(() => mean([]), RangeError));
