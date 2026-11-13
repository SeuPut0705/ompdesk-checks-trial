import { test } from "node:test";
import assert from "node:assert/strict";
import variance from "../src/variance.js";

test('variance of 1..4', () => assert.equal(variance([1, 2, 3, 4]), 1.25));
test('variance of equal values is 0', () => assert.equal(variance([3, 3]), 0));
