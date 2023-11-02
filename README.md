# Library System Server

## Understanding the tools

- A `${lint}` script to ensure type safety in our code.
- A `${dev}` script to run our code locally and check for TypeScript errors.
- A `${build}` script to bundle our code for production.
- A `${start}` script to run our bundled code in production.


This script bundles our code using esbuild.

- `${bundle}`  indicates that it should output only one file containing our entire bundle.

- `${platform=node}` indicates that it should bundle for Node.js.

- `${outfile=dist/index.js}` indicates that it should output the bundle to dist/index.js.

-  `${format=esm}` indicates that it should use ES Modules for imports and exports.

Try running this with pnpm build. This will output a dist/index.js file.


