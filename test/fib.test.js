import { test } from "node:test";
import assert from "node:assert/strict";
import fib from "../src/fib.js";

test('fib of 10 is 55', () => assert.equal(fib(10), 55));
test('fib of 1 is 1', () => assert.equal(fib(1), 1));
