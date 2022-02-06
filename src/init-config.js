#! /usr/bin/env node
import { dirname } from "node:path";
import { cwd } from "node:process";

const hello = () => {
  console.log(`yo. you're in like: ${dirname(cwd())}`);
}

hello();