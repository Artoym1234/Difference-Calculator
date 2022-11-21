import fs from 'fs';
import path from 'path';
import parse from './parsers.js';
import buildTree from './buildTree.js';
import format from './formatters/index.js';

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);
const extractExtensions = (filepath) => path.extname(filepath).slice(1);

const getData = (filepath) => parse(
  fs.readFileSync(getFullPath(filepath), 'utf8'),
  extractExtensions(filepath),
);

const genDiff = (filepath1, filepath2, nameFormat = 'stylish') => {
  const data1 = getData(getFullPath(filepath1));
  const data2 = getData(getFullPath(filepath2));
  const tree = buildTree(data1, data2);
  return format(tree, nameFormat);
};
export default genDiff;
