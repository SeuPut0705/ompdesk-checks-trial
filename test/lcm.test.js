import { test } from "node:test";
import assert from "node:assert/strict";
import lcm from "../src/lcm.js";

test('lcm of 4 and 6 is 12', () => assert.equal(lcm(4, 6), 12));
test('lcm of coprimes is their product', () => assert.equal(lcm(3, 5), 15));
