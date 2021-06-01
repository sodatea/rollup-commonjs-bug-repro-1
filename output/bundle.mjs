var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var pluralize$1 = {exports: {}};

(function (module, exports) {
// this is your primary entry file

(function (root, pluralize) {
  /* istanbul ignore else */
  if (typeof require === 'function' && 'object' === 'object' && 'object' === 'object') {
    // Node.
    module.exports = pluralize();
  } else {
    // Browser global.
    root.pluralize = pluralize();
  }
})(commonjsGlobal, function () {
  function pluralize (str) {
    return str + 's'
  }

  return pluralize
});
}(pluralize$1));

var pluralize = pluralize$1.exports;

console.log(pluralize('name'));
