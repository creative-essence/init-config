#! /usr/bin/env node
"use strict";

var _nodePath = require("node:path");

var _nodeProcess = require("node:process");

var hello = function hello() {
  console.log("yo. you're in like: ".concat((0, _nodePath.dirname)((0, _nodeProcess.cwd)())));
};

hello();