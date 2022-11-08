import fs from 'fs';
import path from 'path';
import compare from './compare.js';
import getParser from './parsers.js';

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const data1 = fs.readFileSync(path.resolve(process.cwd(), filepath1), 'utf-8');
  // возвращает содержимое файла в формате(переделывает в абс.путь(текущий рабочий каталог, файл))
  const data2 = fs.readFileSync(path.resolve(process.cwd(), filepath2), 'utf-8');
  // анализирует строку JSON, создавая значение JavaScript или объект(возвращает расширение path)
  const fileData1 = getParser(data1, path.extname(filepath1).slice(1));
  const fileData2 = getParser(data2, path.extname(filepath2).slice(1));
  return compare(fileData1, fileData2, format);
};

export default genDiff;
