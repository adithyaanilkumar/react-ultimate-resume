"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing;
  return {
    container: {
      willChange: 'transform',
      height: '100%',
      width: '100%',
      zIndex: 1,
      position: 'absolute',
      top: 0,
      left: 0
    }
  };
};

exports.styles = styles;