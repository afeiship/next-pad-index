/*!
 * name: @jswork/next-pad-index
 * description: PadLeft with zero for index.
 * homepage: https://github.com/afeiship/next-pad-index
 * version: 1.0.0
 * date: 2020-11-20 13:52:09
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var DEFAULT_OPTIONS = { char: '0', step: 0, size: 2 };

  nx.padIndex = function (inIndex, inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var length = options.size + 1;
    var res = options.char.repeat(options.size) + (inIndex + options.step);
    return res.slice(-length);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.padIndex;
  }
})();
