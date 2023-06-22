const fs = require("fs");
const { glob, globSync } = require('glob');
const path = require('path');

function copyFiles(pattern, destination) {
  const files = globSync(pattern);
  files.forEach((file) => {
    const fileName = path.basename(file);
    const destinationPath = path.join(destination, fileName);

    for (let i = 1; i < 3; i++) {
      try {
        fs.copyFileSync(file, destinationPath);
        console.log(`copy '${file}' -> '${destinationPath}'`);
      } catch (e) {
        if (e.code === "ENOENT") {
          const parent = path.dirname(destinationPath);
          fs.mkdirSync(parent, { recursive: true });
          continue;
        } else {
          console.log(e);
          break;
        }
      }
    }
  });
}

fs.mkdirSync("./dist", { recursive: true });

copyFiles("assets/static/weather-icons/reshot/*.svg", "dist/static/img/");
