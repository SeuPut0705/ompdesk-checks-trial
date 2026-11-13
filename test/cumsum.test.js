import { test } from "node:test";
import assert from "node:assert/strict";
import cumsum from "../src/cumsum.js";

test('cumsum runs the total', () => assert.deepEqual(cumsum([1, 2, 3]), [1, 3, 6]));
test('cumsum of nothing is empty', () => assert.deepEqual(cumsum([]), []));
