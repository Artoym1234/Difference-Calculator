import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFileFixture = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const formats = ['json', 'yaml'];

const expectedJson = readFileFixture('jsonOutput.txt');
const expectedPlain = readFileFixture('plainOutput.txt');
const expectedStylish = readFileFixture('stylishOutput.txt');

describe('cases', () => {
  test.each(formats)('Format %s', (format) => {
    const filepath1 = getFixturePath(`file1.${format}`);
    const filepath2 = getFixturePath(`file2.${format}`);

    expect(genDiff(filepath1, filepath2, 'stylish')).toEqual(expectedStylish);
    expect(genDiff(filepath1, filepath2, 'plain')).toEqual(expectedPlain);
    expect(genDiff(filepath1, filepath2, 'json')).toEqual(expectedJson);
    expect(genDiff(filepath1, filepath2)).toEqual(expectedStylish);
  });
});
