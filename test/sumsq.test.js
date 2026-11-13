import { test } from "node:test";
import assert from "node:assert/strict";
import sumsq from "../src/sumsq.js";

test('sumsq of 1..3 is 14', () => assert.equal(sumsq([1, 2, 3]), 14));
test('sumsq of nothing is 0', () => assert.equal(sumsq([]), 0));
