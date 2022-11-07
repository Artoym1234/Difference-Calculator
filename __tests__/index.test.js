import path from 'path';
import { fileURLToPath } from 'url';
import { test, expect } from '@jest/globals';
import fs from 'fs';
import genDiff from '../src/index.js';
// import getPath from '../src/getPath.js';

// const readFile = (pathToFile) => fs.readFileSync(pathToFile, 'utf-8');
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('difference test 1', () => {
  const first = getFixturePath('file1.json');
  const second = getFixturePath('file2.json');
  const testJson = readFile('resultJson.txt');
  expect(genDiff(first, second)).toEqual(testJson);
});
