import fs from 'fs';
import path from 'path';
import parse from './parsers.js';
import buildTree from './buildTree.js';
import format from './formatters/index.js';

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);
const extractFormat = (filepath) => path.extname(filepath).slice(1);

const getData = (filepath) => parse(
  fs.readFileSync(filepath, 'utf8'),
  extractFormat(filepath),
);

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const data1 = getData(getFullPath(filepath1));
  const data2 = getData(getFullPath(filepath2));
  const tree = buildTree(data1, data2);
  return format(tree, formatName);
};
export default genDiff;
