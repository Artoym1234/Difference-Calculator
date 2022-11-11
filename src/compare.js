import _ from 'lodash';

const compare = (obj1, obj2) => {
  const keys = _.union(_.keys(obj1), _.keys(obj2));
  const sortKeys = _.sortBy(keys);
  const result = sortKeys.map((key) => {
    if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
      return { name: key, value: compare(obj1[key], obj2[key]), type: 'nested' };
    }
    if (!_.has(obj2, key)) {
      return { name: key, value: obj1[key], type: 'deleted' };
    }
    if (!_.has(obj1, key)) {
      return { name: key, value: obj2[key], type: 'added' };
    }
    if (_.has(obj1, key) && _.has(obj2, key)) {
      if (obj1[key] !== obj2[key]) {
        return {
          name: key, value1: obj1[key], value2: obj2[key], type: 'changed',
        };
      }
    }
    return { name: key, value: obj1[key], type: 'unchanged' };
  });
  return result;
};
export default compare;
