//流程管理
const { SyncHook, AsyncSeriesHook } = require('tapable');
const Plugin = require('./plugin'); //引入插件

class Webpack {
  constructor() {
    // 生命周期 = 钩子
    this.hooks = {
      emit: new AsyncSeriesHook(),//异步
      done: new SyncHook() //同步
    }
  }
  run() {
    setTimeout(() => {
      this.hooks.emit.promise();
    }, 1000); 
    setTimeout(() => {
      this.hooks.done.call();
    }, 2000);
  }
}
//配置
let options = {
  plugins: [new Plugin()]
}
let complier = new Webpack();
for (let p of options.plugins) {
  // 插件
  p.apply(complier);
  // apply (complier) { complier.hooks.emit.tapXXXX }
}
complier.run();
//47min