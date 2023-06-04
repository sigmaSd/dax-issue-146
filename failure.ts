import $ from "https://deno.land/x/dax/mod.ts";

const child = $`deno task prod`.spawn();

// abort the child after 3s
await $.sleep("1s");
child.abort();

await child; // First run: Error: Aborted with exit code: 124
             // Second run: AddrInUse: Address already in use