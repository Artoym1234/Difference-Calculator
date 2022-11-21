import { load } from 'js-yaml';

const parse = (data, nameFormat) => {
  switch (nameFormat) {
    case 'json':
      return JSON.parse(data);
    case 'yaml':
      return load(data);
    case 'yml':
      return load(data);
    default:
      throw new Error(`'Unknown fornmat: ${nameFormat}. You can use JSON or YAML formats.'`);
  }
};

export default parse;
