# dax-issue-146

Reproduction files for https://github.com/dsherret/dax/issues/146

**Steps:**

First run - OK

```bash
deno run -A failuTask prod deno run -A main.ts
# > HTTP webserver running.  Access it at:  http://localhost:8080/
# error: Uncaught (in promise) Error: Aborted with exit code: 124
#   (trace)
```

Second run - NOT OK

```bash
deno run -A failuTask prod deno run -A main.ts
# > HTTP webserver running.  Access it at:  http://localhost:8080/
# error: Uncaught AddrInUse: Address already in use (os error 98)
#   (trace)
# error: Uncaught (in promise) Error: Aborted with exit code: 124
#   (trace)
```