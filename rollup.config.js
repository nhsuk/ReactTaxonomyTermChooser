import babel from "rollup-plugin-babel";
import pkg from "./package.json";

export default [
  {
    input: "./export.js",
    external: []
      .concat(Object.keys(pkg.dependencies))
      .concat(Object.keys(pkg.peerDependencies)),
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" },
    ],
    plugins: [
      babel({
        exclude: ["node_modules/**"],
      }),
    ],
  },
];
