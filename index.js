const visit = require('unist-util-visit');
const retext = require('retext');
const smartypants = require('retext-smartypants');

module.exports = function(options) {
  const processor = retext().use(smartypants, options);

  function transformer(tree) {
    visit(tree, 'text', node => {
      node.value = String(processor.processSync(node.value));
    });
  }

  return transformer;
};
