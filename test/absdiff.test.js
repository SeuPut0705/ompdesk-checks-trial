import { test } from "node:test";
import assert from "node:assert/strict";
import absdiff from "../src/absdiff.js";

test('absdiff is never negative', () => assert.equal(absdiff(3, 8), 5));
test('absdiff of equals is 0', () => assert.equal(absdiff(4, 4), 0));
