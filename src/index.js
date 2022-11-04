import fs from 'fs';
import path from 'path';
import compare from './compare.js';

const genDiff = (filepath1, filepath2) => {
  const data1 = fs.readFileSync(path.resolve(process.cwd(), filepath1), 'utf-8');
  const data2 = fs.readFileSync(path.resolve(process.cwd(), filepath2), 'utf-8');
  const jsonData1 = JSON.parse(data1, path.extname(filepath1).slice(1));
  const jsonData2 = JSON.parse(data2, path.extname(filepath2).slice(1));

  return compare(jsonData1, jsonData2);
};

export default genDiff;
