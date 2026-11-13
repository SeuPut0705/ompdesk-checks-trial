import { test } from "node:test";
import assert from "node:assert/strict";
import product from "../src/product.js";

test('product multiplies the values', () => assert.equal(product([2, 3, 4]), 24));
test('product of nothing is 1', () => assert.equal(product([]), 1));
