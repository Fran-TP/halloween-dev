# halloween-dev — Solutions Only

Prerequisites
- Bun (recommended): https://bun.sh

Install dependencies
```halloween-dev/README.md#L1-3
bun install
```

Run a single solution
- Replace `<path>` with the solution file path, e.g. `src/01-challenge/solution.ts`
```halloween-dev/README.md#L4-6
bun run <path>
# example:
bun run src/01-challenge/solution.ts
```

Run a solution with input from a file
```halloween-dev/README.md#L7-9
cat src/01-challenge/input.txt | bun run src/01-challenge/solution.ts
```

If a solution exports a function (doesn't run on import)
- Create a tiny runner file like `run-01.ts`:
```halloween-dev/README.md#L10-16
import { solve } from './src/01-challenge/solution.ts';
const input = `your example input here`;
console.log(solve(input));
```
- Then run the runner:
```halloween-dev/README.md#L17-19
bun run run-01.ts
```

Run tests (if present)
```halloween-dev/README.md#L20-22
bun test
```

Attribution
- Solutions authored by `minudev` for halloween.dev.
