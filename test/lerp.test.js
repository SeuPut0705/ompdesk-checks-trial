import { test } from "node:test";
import assert from "node:assert/strict";
import lerp from "../src/lerp.js";

test('lerp halfway', () => assert.equal(lerp(0, 10, 0.5), 5));
test('lerp at the ends', () => assert.equal(lerp(2, 4, 1), 4));
