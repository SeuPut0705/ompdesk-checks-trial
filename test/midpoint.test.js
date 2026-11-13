import { test } from "node:test";
import assert from "node:assert/strict";
import midpoint from "../src/midpoint.js";

test('midpoint of 2 and 8 is 5', () => assert.equal(midpoint(2, 8), 5));
test('midpoint of a point is itself', () => assert.equal(midpoint(3, 3), 3));
