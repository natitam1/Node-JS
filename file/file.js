import { readFile } from "node:fs/promises";
readFile("file.txt", "utf8").then((text) =>
  console.log("The file contains:", text)
);
