//手写的插件
class HelloAsyncPlugin {
    apply(compiler) {
      // emit： 生命周期(钩子hook)  webpack 打包完资源了
      compiler.hooks.emit.tapPromise('HelloAsyncPlugin', compilation => {
        // return a Promise that resolves when we are done...
        return new Promise((resolve, reject) => {
          setTimeout(function() {
            console.log('Done with async work...');
            resolve();
          }, 1000);
        });
      });
    }
  }
  
  module.exports = HelloAsyncPlugin;
//   14.min