import _ from 'lodash';

const indent = (depth, replacer = ' ', spacesCount = 4) => replacer.repeat(depth * spacesCount - 2);

const stringify = (data, depth) => {
  if (!_.isObject(data)) {
    return String(data);
  }
  const strings = Object
    .entries(data)
    .map(([key, value]) => `${indent(depth)}  ${key}: ${stringify(value, depth + 1)}`);

  return `{\n${strings.join('\n')}\n${indent(depth - 1)}  }`;
};

const iter = (tree, depth) => tree.map((node) => {
  switch (node.type) {
    case 'added':
      return `${indent(depth)}+ ${node.key}: ${stringify(node.value, depth + 1)}`;
    case 'deleted':
      return `${indent(depth)}- ${node.key}: ${stringify(node.value, depth + 1)}`;
    case 'nested':
      return `${indent(depth)}  ${node.key}: {\n${iter(node.children, depth + 1).join('\n')}\n${indent(depth)}  }`;
    case 'changed': {
      const removed = `${indent(depth)}- ${node.key}: ${stringify(node.value1, depth + 1)}`;
      const added = `${indent(depth)}+ ${node.key}: ${stringify(node.value2, depth + 1)}`;
      return `${removed}\n${added}`;
    }
    case 'unchanged':
      return `${indent(depth)}  ${node.key}: ${stringify(node.value, depth + 1)}`;
    default:
      throw new Error(`Type: ${node.type} is undefined`);
  }
});

const formatStylish = (data) => `{\n${iter(data, 1).join('\n')}\n}`;

export default formatStylish;
