import { test } from "node:test";
import assert from "node:assert/strict";
import ratio from "../src/ratio.js";

test('ratio of 6 to 3 is 2', () => assert.equal(ratio(6, 3), 2));
test('ratio of 0 is 0', () => assert.equal(ratio(0, 5), 0));
