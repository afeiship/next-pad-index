(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
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
