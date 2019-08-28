import Format from './format/index'

// 定义所有函数
const UtilFn = {}

Object.assign(UtilFn.prototype, {
  toString() {

  }
})

// 对外输出EUtils实例
class EUtils{
  constructor(Fn) {
    // 定义所有工具函数
    this.Fn = Fn
  }
}

const utils = new EUtils(UtilFn)

module.exports = utils