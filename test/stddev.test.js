import { test } from "node:test";
import assert from "node:assert/strict";
import stddev from "../src/stddev.js";

test('stddev of the textbook sample is 2', () => assert.equal(stddev([2, 4, 4, 4, 5, 5, 7, 9]), 2));
test('stddev of equal values is 0', () => assert.equal(stddev([1, 1]), 0));
