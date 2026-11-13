import { test } from "node:test";
import assert from "node:assert/strict";
import gcd from "../src/gcd.js";

test('gcd of 12 and 18 is 6', () => assert.equal(gcd(12, 18), 6));
test('gcd with zero is the other number', () => assert.equal(gcd(7, 0), 7));
