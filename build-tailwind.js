const { exec } = require("child_process");
const path = require("path");

// Path to your input and output CSS
const inputCSS = path.resolve(__dirname, "components/");
const outputCSS = path.resolve(__dirname, "dist/globals.css");

// Run Tailwind CLI via local node_modules
exec(`node ./node_modules/tailwindcss/lib/cli.js -i "${inputCSS}" -o "${outputCSS}" --minify`, (err, stdout, stderr) => {
  if (err) {
    console.error("Error compiling Tailwind CSS:", err);
    return;
  }
  if (stderr) console.error(stderr);
  console.log(stdout || "Tailwind CSS compiled successfully!");
});
