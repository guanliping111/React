## 2020-5-18
```js
// 默认导出
export default App;

// 命名导出
export const name = 'lilei';

// 默认导入
import App from './App';

// 命名导入
import { name } from './App'
 
```
|| : 第一个成立就执行第一个 不然就执行第二个 
&&： 第一个成立  第二个也要成立 
短路与&&
左侧true时执行右侧，右侧true则true，右侧false则false
左侧false则false，不再执行右侧，即短路
短路或||
左侧false时执行右侧，右侧true则true，右侧false则false
左侧ture则ture，不再执行右侧，即短路