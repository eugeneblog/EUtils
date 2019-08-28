"use strict";

var _index = _interopRequireDefault(require("./format/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 定义所有函数
var UtilFn = {};
Object.assign(UtilFn.prototype, {
  test: function test() {
    alert('hello Util');
  }
}); // 对外输出EUtils实例

var EUtils = function EUtils(Fn) {
  _classCallCheck(this, EUtils);

  // 定义所有工具函数
  this.Fn = Fn;
  this.vsersion = '1.0.0';
};

var utils = new EUtils(UtilFn);
module.exports = utils;