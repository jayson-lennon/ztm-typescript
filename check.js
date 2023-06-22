const execSync = require('child_process').execSync;

const path = process.argv[2];

try {
  execSync(`pnpm run typecheck ${path}`, { stdio: [0, 1, 2] });
  execSync(`pnpm run lint ${path}`, { stdio: [0, 1, 2] });
} catch (_) {

}
