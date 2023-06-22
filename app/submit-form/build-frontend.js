const browserify = require("browserify");
const tsify = require("tsify");
const fs = require("fs");
const { glob, globSync } = require('glob');
const path = require('path');

function copyFiles(pattern, destination) {
  const files = globSync(pattern);
  files.forEach((file) => {
    const fileName = path.basename(file);
    const destinationPath = path.join(destination, fileName);

    fs.copyFile(file, destinationPath, (err) => {
      if (err) {
        console.error(`Error copying file '${file}':`, err);
        return;
      } else {
        console.log(`copy '${file}' -> '${destinationPath}'`);
      }
    });
  });
}

const outputFile = fs.createWriteStream("./dist/sample.js");

fs.mkdirSync("./dist", { recursive: true });

browserify()
  .add("src/frontend/sample.ts")
  .plugin(tsify)
  .transform("babelify", { extensions: [".ts"] })
  .transform("uglifyify", { global: true })
  .bundle()
  .on("error", function(error) { console.error(error.toString()); })
  .pipe(outputFile);

copyFiles("assets/static/weather-icons/reshot/*.svg", "dist/static/img/");
