import { test } from "node:test";
import assert from "node:assert/strict";
import roundto from "../src/roundto.js";

test('roundto keeps two places', () => assert.equal(roundto(3.14159, 2), 3.14));
test('roundto zero places', () => assert.equal(roundto(2.6, 0), 3));
