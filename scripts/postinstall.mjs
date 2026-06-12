import { readFileSync } from "fs";

const pkg = JSON.parse(readFileSync("./package.json", "utf8"));

console.log(`\n✔ postinstall: ${pkg.name}@${pkg.version} – dependencies installed successfully.`);

// eslint-disable-next-line no-undef
const nodeVersion = process.versions.node;
const [major] = nodeVersion.split(".").map(Number);
const REQUIRED_MAJOR = 20;

if (major < REQUIRED_MAJOR) {
  console.error(
    `✖ postinstall: Node.js >= ${REQUIRED_MAJOR} is required (found ${nodeVersion}). Please upgrade.`
  );
  // eslint-disable-next-line no-undef
  process.exit(1);
}

console.log(`✔ postinstall: Node.js ${nodeVersion} satisfies the version requirement.\n`);
