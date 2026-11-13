import { test } from "node:test";
import assert from "node:assert/strict";
import sum from "../src/sum.js";

test("sum adds the values", () => assert.equal(sum([1, 2, 3]), 6));
test("sum of nothing is 0", () => assert.equal(sum([]), 0));
