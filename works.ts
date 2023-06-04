import $ from "https://deno.land/x/dax@0.32.0/mod.ts";

const child = $`deno run -A main.ts`.spawn();

// abort the child after 3s
await $.sleep("1s");
child.abort();

await child; // Error: Aborted with exit code: 124

