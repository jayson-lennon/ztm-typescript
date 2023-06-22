## Running a Demo

Using `ts-node`:

`pnpm exec ts-node path/to/file.ts`

Run a demo by invoking `tsc` and then `node`:

`tsc -p path/to/directory && node path/to/file.js`

Watch a specific demo directory and autobuild a JavaScript file when the TypeScript file changes:

`tsc -w -p path/to/directory`

and then run with

`node path/to/file.js`

## Initial Setup

`pnpm install`

## Running Tests

`pnpm test exercise/FOLDER_NAME/*.test.ts`

## Type Checking

`pnpm typecheck exercise/FOLDER_NAME`

## Linting

`pnpm eslint exercise/FOLDER_NAME/FILE.ts`

## Build & Run Node

`pnpm build exercise/FOLDER_NAME && node exercise/FOLDER_NAME/FILE_NAME.js`

## Generate docs

cd demo/ANY_DIR && npx typedoc DEMO_FILE.ts
