import _ from 'lodash';

const stringify = (data) => {
  if (_.isObject(data)) {
    return '[complex value]';
  }
  return _.isString(data) ? `'${data}'` : data;
};

const iter = (tree, parent) => tree.flatMap((node) => {
  const path = [...parent, node.key].join('.');

  switch (node.type) {
    case 'added':
      return `Property '${path}' was added with value: ${stringify(node.value)}`;
    case 'deleted':
      return `Property '${path}' was removed`;
    case 'nested':
      return `${iter(node.children, [path]).join('\n')}`;
    case 'changed':
      return `Property '${path}' was updated. From ${stringify(node.value1)} to ${stringify(node.value2)}`;
    case 'unchanged':
      return [];
    default:
      throw new Error(`Type:${node.type} is undefined`);
  }
});

const formatPlain = (data) => iter(data, []).join('\n');

export default formatPlain;
