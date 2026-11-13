import { test } from "node:test";
import assert from "node:assert/strict";
import mode from "../src/mode.js";

test('mode is the most frequent value', () => assert.equal(mode([1, 2, 2, 3]), 2));
test('mode breaks ties by the smaller value', () => assert.equal(mode([5, 4]), 4));
