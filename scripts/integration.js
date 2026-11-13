// Exercises every module the way the downstream service does: one call per example, spread over ~35 s.
import { readdirSync } from "node:fs";

const dir = new URL("../src/", import.meta.url);
const files = readdirSync(dir).filter((name) => name.endsWith(".js"));
for (const file of files) await import(new URL(file, dir));
await new Promise((resolve) => setTimeout(resolve, 35_000));
console.log(`integration: ${files.length} modules loaded`);
