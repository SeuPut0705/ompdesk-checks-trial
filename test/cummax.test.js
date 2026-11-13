import { test } from "node:test";
import assert from "node:assert/strict";
import cummax from "../src/cummax.js";

test('cummax keeps the running maximum', () => assert.deepEqual(cummax([1, 3, 2]), [1, 3, 3]));
test('cummax of nothing is empty', () => assert.deepEqual(cummax([]), []));
