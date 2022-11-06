import _ from 'lodash';

const compare = (obj1, obj2) => {
  const keys = _.union(_.keys(obj1), _.keys(obj2));
  const sortKeys = _.sortBy(keys);
  let result = '{';
  sortKeys.map((key) => {
    const hasOwn1 = Object.hasOwn(obj1, key);
    const value1 = hasOwn1 ? obj1[key] : false;
    const hasOwn2 = Object.hasOwn(obj2, key);
    const value2 = hasOwn2 ? obj2[key] : false;
    switch (true) {
      case (hasOwn1 && hasOwn2 && (value1 === value2)): {
        result += `\n  ${key}: ${value1}`;
        break;
      }
      case (hasOwn1 && !hasOwn2): {
        result += `\n- ${key}: ${value1}`;
        break;
      }
      case (!hasOwn1 && hasOwn2): {
        result += `\n+ ${key}: ${value2}`;
        break;
      }
      case (hasOwn1 && hasOwn2 && (value1 !== value2)): {
        result += `\n- ${key}: ${value1}`;
        result += `\n+ ${key}: ${value2}`;
        break;
      }
      default: {
        break;
      }
    }
    return false;
  });
  return `${result}\n}`;
};
export default compare;
