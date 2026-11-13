import { test } from "node:test";
import assert from "node:assert/strict";
import percent from "../src/percent.js";

test('percent of a quarter is 25', () => assert.equal(percent(1, 4), 25));
test('percent of nothing is 0', () => assert.equal(percent(0, 8), 0));
