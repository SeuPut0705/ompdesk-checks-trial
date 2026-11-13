import { test } from "node:test";
import assert from "node:assert/strict";
import hypot from "../src/hypot.js";

test('hypot of 3 and 4 is 5', () => assert.equal(hypot(3, 4), 5));
test('hypot with a zero side', () => assert.equal(hypot(0, 2), 2));
