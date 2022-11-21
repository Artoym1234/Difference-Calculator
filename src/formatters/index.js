import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const format = (data, nameFormat) => {
  switch (nameFormat) {
    case 'stylish':
      return stylish(data);
    case 'plain':
      return plain(data);
    case 'json':
      return json(data);
    default:
      throw new Error(`Unknown format: ${nameFormat}`);
  }
};
export default format;
