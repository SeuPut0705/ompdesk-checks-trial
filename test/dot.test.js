import { test } from "node:test";
import assert from "node:assert/strict";
import dot from "../src/dot.js";

test('dot of two vectors', () => assert.equal(dot([1, 2, 3], [4, 5, 6]), 32));
test('dot of empty vectors is 0', () => assert.equal(dot([], []), 0));
