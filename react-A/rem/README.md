em: 相对于自己的 font-size  
    相对于父元素的 font-size(x)
rem: html的 font-size
1. font-size 设多少
2. 如何由设计稿快速还原

DPR：device piex rotio 设备真实的像素 / 1px = 2 / 3
css 的1px 在不同的设备上面 渲染出来的像素是不一样的  ip6->2px ipx->3px


想要1px
1. meta initial-scale: 0.5 所有的元素缩小0.5倍
   写元素宽高的时候 按照扩大两倍之后的写
   一个元素 20*20 -> 必须写成 40*40
   所有设计稿 就需要扩大两倍，这样量取后的尺寸就是扩大两倍之后的尺寸

2. 等比缩放
   屏幕划分10等分
   750 / 10 = 75
   1125 / 10 = 112.5
   一份就是1rem html的font-size=75px 或者 112.5px
