"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Format =
/*#__PURE__*/
function () {
  function Format() {
    _classCallCheck(this, Format);
  }

  _createClass(Format, [{
    key: "formatDate",
    value: function formatDate(num, format) {
      // 格式化时间，变成00的形式，不足十位添加0
      function formatNumber(n) {
        n = n.toString();
        return n[1] ? n : "0" + n;
      }

      var time = new Date(num);
      var nowObj = {}; // 预先将YMDsmh对应的时间数据存储起来, 然后将Y-M-D字符串里面的YMD替换成对象里面的参数

      nowObj.Y = time.getFullYear();
      nowObj.M = time.getMonth() + 1;
      nowObj.D = time.getDate();
      nowObj.s = formatNumber(time.getHours());
      nowObj.m = formatNumber(time.getMinutes());
      nowObj.h = formatNumber(time.getSeconds());

      for (var key in nowObj) {
        // replace替换 Y-M-D
        format = format.replace(key, nowObj[key]);
      }

      return format;
    }
  }]);

  return Format;
}();

module.exports = Format;