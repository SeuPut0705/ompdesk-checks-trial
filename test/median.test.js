import { test } from "node:test";
import assert from "node:assert/strict";
import median from "../src/median.js";

test('median of an odd count is the middle', () => assert.equal(median([3, 1, 2]), 2));
test('median of an even count averages the middle two', () => assert.equal(median([4, 1, 3, 2]), 2.5));
