"use strict";

var _index = _interopRequireDefault(require("./format/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UtilFn = {}; // 对外输出一个对象

var EUtils = function EUtils(Fn) {
  _classCallCheck(this, EUtils);

  // 定义所有工具函数
  this.Fn = Fn;
};

var utils = new EUtils(UtilFn);
module.exports = utils;