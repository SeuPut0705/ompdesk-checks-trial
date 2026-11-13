import { test } from "node:test";
import assert from "node:assert/strict";
import dist from "../src/dist.js";

test('dist of a 3-4-5 triangle', () => assert.equal(dist([0, 0], [3, 4]), 5));
test('dist to itself is 0', () => assert.equal(dist([1, 1], [1, 1]), 0));
