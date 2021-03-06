// import Format from './format/index'
class UtilFn {
  constructor() {}
  formatDate(num, format) {
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
}

// 对外输出EUtils实例
class EUtils extends UtilFn {
  constructor() {
    super();
    // 定义所有工具函数
    this.vsersion = "1.0.1";
  }
}

const utils = new EUtils();

module.exports = utils;
