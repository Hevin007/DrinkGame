1,页面跳转
  跳转实现思路：1，start.we中加载所有组件，
                2，两种思路：1）按钮属于父组件
                             2）组件间通信 
               （页面跳转已解决，使用方法2）
2,图片本地加载

3,bag.we实现，数据通信
  
  button可以使用bootstrap的button，但是需要使用npm安装新模块

  事件的坑：event.target在浏览器中调试打印出可以看到所有的属性和方法
            然后从中取用相应的值。

  数组数据的自动更新：
    // 和 `this.items[0] = ...` 作用相同，但会自动触发视图更新
    this.items.$set(0, { childMsg: 'Changed!'})

  使用浏览器调试：
    将chrome浏览器调试模式设定为左右模式，调试移动端页面会很方便

  样式改动： picker flex-wrap:wrap
  事件不可动态绑定
  weex的if类似display效果，不显示时不会占用位置
  不可直接drinkNum++ 要使用weex的set方法
  分两边渲染对逻辑的实现造成了很大影响


2016.12.27 rnn
1. 存入包裹和立即使用采用两个模态框，不用进行按钮的隐藏，分两种情况展示即可，见main.we中215行showCard方法
2. 存入包裹中的信息包括：id(编号)、num(数值)、name(技能)，见253行，storeToBag方法

12.27 hevin
1, 分支条件过多，使用switch case 代替if else 加强代码可读性