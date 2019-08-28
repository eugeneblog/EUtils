(function() {
  function formatDate(num, format) {
    // 格式化时间，变成00的形式，不足十位添加0
    function formatNumber(n) {
      n = n.toString();
      return n[1] ? n : "0" + n;
    }
    
    let time = new Date(num);
    let nowObj = {};

    // 预先将YMDsmh对应的时间数据存储起来, 然后将Y-M-D字符串里面的YMD替换成对象里面的参数
    nowObj.Y = time.getFullYear();
    nowObj.M = time.getMonth() + 1;
    nowObj.D = time.getDate();

    nowObj.s = formatNumber(time.getHours());
    nowObj.m = formatNumber(time.getMinutes());
    nowObj.h = formatNumber(time.getSeconds());

    for (let key in nowObj) {
      // replace替换 Y-M-D
      format = format.replace(key, nowObj[key]);
    }
    return format;
  }

  formatDate(Date.now(), "Y-M-D");
})();
