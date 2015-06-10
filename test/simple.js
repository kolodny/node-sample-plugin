var assert = require('assert');
var nodeSamplePlugin = require('..');

describe('node-sample-plugin', function() {
  it('does awesome stuff', function() {
    assert.equal( nodeSamplePlugin('yay!'), 'YAY!' );
  });
});
