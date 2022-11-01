"use strict";

const axios = require("axios");
const fsP = require('fs/promises');

const argv = process.argv[2];

async function cat(path) {
  try {
    const contents = await fsP.readFile(`./${path}`, 'utf8');
    console.log(contents);
  } catch (err) {
    console.log(`Error reading: ${path}`);
    process.exit(1);
  }
}

async function webCat(url) {
  try {
    const resp = await axios.get(`${url}`);
    console.log(resp.data.slice(0, 80), "...");
  } catch (err) {
    console.log(`Error fetching ${url}`, err);
    process.exit(1);
  }
}

if (argv.includes(".com")) {
  console.log("!!!!!!!!!!!!!!")
  webCat(argv);
} else {
  cat(argv);
}