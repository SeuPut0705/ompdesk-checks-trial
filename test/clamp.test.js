import { test } from "node:test";
import assert from "node:assert/strict";
import clamp from "../src/clamp.js";

test('clamp caps at the high bound', () => assert.equal(clamp(5, 0, 3), 3));
test('clamp lifts to the low bound', () => assert.equal(clamp(-1, 0, 3), 0));
