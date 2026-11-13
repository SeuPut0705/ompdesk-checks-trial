import { readdirSync } from "node:fs";

const dir = new URL("../src/", import.meta.url);
let failed = 0;
for (const file of readdirSync(dir).filter((name) => name.endsWith(".js")).sort()) {
  const mod = await import(new URL(file, dir));
  if (!mod.examples) continue;
  const name = file.replace(/\.js$/, "");
  console.log(`# ${name}`);
  for (const [args, want] of mod.examples) {
    const got = mod.default(...args);
    const ok = JSON.stringify(got) === JSON.stringify(want);
    if (!ok) failed++;
    const call = `${name}(${args.map((arg) => JSON.stringify(arg)).join(", ")}) = ${JSON.stringify(got)}`;
    console.log(ok ? `ok   ${call}` : `FAIL ${call} (expected ${JSON.stringify(want)})`);
  }
}
if (failed > 0) {
  console.error(`${failed} documented example(s) do not hold`);
  process.exit(1);
}
console.log("all documented examples hold");
