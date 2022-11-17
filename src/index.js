import fs from 'fs';
import path from 'path';
import getParser from './parsers.js';
import compare from './compare.js';
import changeFormat from './formatters/index.js';

const getPath = (file) => path.resolve(process.cwd(), file);
const getExtensions = (file) => path.extname(file).slice(1);

const getData = (file) => {
  const absolutepath = getPath(file);
  const data = fs.readFileSync(absolutepath, 'utf8');
  const format = getExtensions(file);
  return getParser(data, format);
};

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const fileData1 = getData(filepath1);
  const fileData2 = getData(filepath2);
  const diff = compare(fileData1, fileData2);
  return changeFormat(diff, format);
};
export default genDiff;
