import { test } from "node:test";
import assert from "node:assert/strict";
import sign from "../src/sign.js";

test('sign of a negative is -1', () => assert.equal(sign(-7), -1));
test('sign of zero is 0', () => assert.equal(sign(0), 0));
