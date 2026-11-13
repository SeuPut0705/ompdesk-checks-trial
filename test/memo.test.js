import { test } from "node:test";
import assert from "node:assert/strict";
import memo from "../src/memo.js";

const slowDouble = async (x) => {
  await new Promise((resolve) => setTimeout(resolve, Math.random() * 150));
  return x * 2;
};

test("memo answers the first call before the deadline", async () => {
  const double = memo(slowDouble);
  const started = Date.now();
  assert.equal(await double(21), 42);
  assert.ok(Date.now() - started < 100, `cache warm-up took ${Date.now() - started}ms (limit 100ms)`);
});

test("memo answers a second call from the cache", async () => {
  const double = memo(slowDouble);
  await double(4);
  const started = Date.now();
  assert.equal(await double(4), 8);
  assert.ok(Date.now() - started < 20);
});
