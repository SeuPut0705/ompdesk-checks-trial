import { test } from "node:test";
import assert from "node:assert/strict";
import range from "../src/range.js";

test('range is max minus min', () => assert.equal(range([3, 9, 4]), 6));
test('range of one value is 0', () => assert.equal(range([5]), 0));
