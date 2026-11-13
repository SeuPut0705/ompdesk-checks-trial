import { test } from "node:test";
import assert from "node:assert/strict";
import factorial from "../src/factorial.js";

test('factorial of 5 is 120', () => assert.equal(factorial(5), 120));
test('factorial of 0 is 1', () => assert.equal(factorial(0), 1));
