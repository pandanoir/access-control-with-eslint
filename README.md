# access-control-with-eslint

You can control access to files with `no-internal-modules` rule of eslint-plugin-import. This repository automatically configures `no-internal-modules` according to your directory structure.

The files are
- reachable if the file is index.ts or the same repository don't have index.ts
- unreachable if the repository has index.ts and the file isn't index.ts
