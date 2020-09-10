## hooks
问题：useState 可不可以用if包裹  => 不可以  闭包
    hook 只能写在函数体的最外一层
    不能出现在 类似 if 里面去 
    如果if里面的条件成立就会调用不到state
    因为这样会导致 取 state 位置出错。
    

hooks的实现用了闭包

- 手写一个 useState 核心理念 闭包
多个hook 存在数组里面 不相互影响  
视频 1.33