#!/usr/bin/env node
import { Command } from 'commander/esm.mjs';
const program = new Command();
program
.description('Compares two configuration files and shows a difference.')
.version('0.8.0')
.option( '-f, --format <type>',  'output format')
.argument('<filepath1>')
.argument('<filepath2>');
//const diff = genDiff(filepath1, filepath2);
//console.log(diff);

program.parse();
