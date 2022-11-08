import path from 'path';
import { fileURLToPath } from 'url';
import { test, expect } from '@jest/globals';
import fs from 'fs';
import genDiff from '../src/index.js';
// import getPath from '../src/getPath.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const tests = [
  {
    file1: 'file1.json', file2: 'file2.json', formatter: 'stylish', output: 'resultJson.txt',
  },
  {
    file1: 'file1.yaml', file2: 'file2.yaml', formatter: 'stylish', output: 'resultJson.txt',
  },
];

test.each(tests)('gendiff stylish, plain and json tests', ({
  file1, file2, formatter, output,
}) => {
  const filepath1 = getFixturePath(file1);
  const filepath2 = getFixturePath(file2);
  const expected = readFile(output);
  const result = genDiff(filepath1, filepath2, formatter);
  expect(result).toEqual(expected);
});
