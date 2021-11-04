# 初识JavaScript
1. JavaScript作为Netscape Navigetor浏览器的一部分首次出现在1996年，最初设计是改善网页的用户体验，作者是brendan Eich
2. 起初JavaScript被命名为liveScript，后因跟Son公司改名为JavaScript

# 浏览器的组成
1. 浏览器中要有两部分组成，shell和内核部分，内核还包含了许多东西。
2. 渲染引擎，内赫里渲染引擎主要负责html和css部分，定义了语法规则、渲染规则以及渲染路径和速度等等。
3. JS引擎，2001年发布了ie6，首次实现对JS引擎的优化。
4. 2008年Google发布了Chrome，它是采用优化后的JS引擎，引擎代号V8，因能把JS代码直接转化成机械代码0101来执行，进而以速度快而闻名。
5. 后来Firefox也推出了具有强大功能的JS引擎。

# JavaScript特点
1. 解释性语言 ---> 不需要编译代码，可以跨平台，像php、js、jsp都是解释型语言。
2. 单线程 ---> 同时只能执行一件事情。
3. ECMA标准 ---> 为了统一JS的规则，推出了ECMA标准，因此JS也称为ECMAScript。

# JavaScript三大部分：ECMAScript、DOM、BOM
1. ECMAScript是符合ECMA标准的基本JaveScript。
2. DOM是Docmengt Object Model文档对象模型，可以才做html和css部分（非常重要的部分）。
3. BOM是Browser Object Model浏览器对象模型，操作浏览器shell的，因为每一个浏览器的不同，导致我们在每一个浏览器操作BOM都不一样

# JaveSctipt的基础语法
1. 变量声明
- JS是一种弱数据类型的语言，任何类型的变量都用关键子var来声明
```js
var arr = [1, 2, 3];
var num = 123;
var str = "abc";
```
- 赋值可以在声明的同时赋值，也可以在后面赋值
```js
var num = 123; // num=123
var num;
num = 123; // num=123
// 两种方法是一样的
```
- 同时还有一种单一var模式
```js
var num1 = 123,
    num2 = 234
    num3 = 345;
// 变量名上下对齐，这样结构更清晰，也能节省很多代码。
```

2. 变量命名规则
- 以英文字母开头或者_和$符开通。
- 变量名可以包含数字。
- 不可以使用系统自带的关键字、保留字。

3. 值类型(数据类型)
- 不可改变的原始值。
    - 主要有Numberf、String、Boolean、undefined、null堆数据。
- 引用值Array、Object、Function栈数据。
 
# JaveScript语句的基本规则
1. 语句后面要用英文符分号(;)结束
2. JS语法错误会引发后续代码的终止，但不会影响其他的JS代码块
> 仅限于逻辑错误和低级语法错误导致代码全部执行不了。

3 书写规范

# JAaveScript运算符
1. “+”数学上相加的功能和字符串拼接，“-、*、/、%”数学运算
2. 相同的还有“++、--、==、+=、-=、>、<...”等
3. 逻辑运算符&&、||、！
- &&的作用是结果是true的时候才会继续执行，第一个纠错了第二不会执行，如果都是true的话返回最后一个表达式
- ||的作用是只要有一个表达式是true的后面就不走了，并且返回的结果是这个正确的表达式的结果，全是falses表达式返回的结果就是false
> &&可以当作一种短路语句使用，||可以当作赋初值的作用

4. 默认为False的值
- undefined、null、“ ”、NaN、0、false

# 类型转换
一. 显式类型转换
1. 用typeof可以检测数据的类型
`console.log(typeof(123)); // Number`
- typeof返回的结果有六种：`Number`、`String`、`Boolean`、`undefined`、`Object`、`Function`
- 数组和null都属于Object
- NaN属于Number，虽然是非数，但是也属于数字
- typeof返回的结果是字符串

2. parselent(string, radix)
- 这个方法是将字符串转换成整型类型数字的，其中第二个参数radix基底是可以选择的参数。
- 当参数string里面既包括数字字符串又包括其他字符串的时候，它会将看到其他字符串就停止了，不会继续转换后面的数字型字符串了
```js
parselnt('123abc123') // 123;
parselnt('abc123') // NaN
parselnt(‘123’) // 123
parselnt('true') // NaN
```
- 当radix不为空的时候这个函数可以用作进制转换，把第一个参数的数字当成几进制的数字转换成十进制
- radix参考范围是2~36
```js
var demo  10;
parselnt(demo,16) // 16
```

3. parseFloat(radix)
- 这个方法和parselnt类似，时将字符串转换成浮点类型的数字，碰到第一个非数字类型停止
- 只能识别第一个小数点及后面的数字，第二个小数点不能识别。
```js
parseFloat('123.2.3'); // 123.2
parseFloat('123.2abc;); // 123.2
parseFloat('123.abc1'); // 123
```
4. toString(radix)
- 这个方法是对象上的方法，任何数据类型都可以使用，转换成字符串类型，涉及到包装类。
- 同样是radix基底可选参数，为空仅仅将数据转换成字符串
```js
var demo = 123;
typeof demo.toString(); // string/123
typeof true.toString(); // string/true
```
- 当写了radix时代表要将这个数字转换成几进制的数字型字符串
```js
var demo = 10;
demo.toString(16); // A
```
- undefined和null没有toString方法

5. number(mix)
- 这个方法是可以把其他类型的数据转换成数字类型的数据

6. string(mix)
- 和number方法类似把任何类型转换成字符串

7. boolean(mix)
- 和number类似把任何类型转换为Boolean

二. 隐式类型转换
1. isNaN()
- 这个方法可以检测是不是非数类型，调用的number方法

2. 算术运算符
- `++`就是将现有数据调用number之后，自身加一
- `+`、`-`、`*`、`/`执行之前都会先进行类型转换，换成数字在运算

3. 逻辑运算符
- `&&`、`||`、`!`都会调用boolean转换成布尔值，返回结果还是本身表达式的结果
`!abc; // false`

4. 不发生类型转换的比较运算符
- ===严格等于 ！==严格不等于

# 预编译
- 函数声明提升：函数声明提升是一种整体提升，它会把函数声明和函数体一起提升到前面。
- 变量声明提升：变量声明提升是一种局部提升，它仅仅将变量的声明提前了，但是并没有将赋值一起提升

1. JS运行三部曲
- 语法分析
- 预编译
- 解释执行

2. 预编译前奏
- imply global
- 暗示全局变量，如果任何变量未经声明就赋值使用，此变量归Window所有，并且成为Window对象的一个属性
- 一切声明的全局变量，都是Window属性
- 未经声明的全局变脸可以懂delete操作来删除
- 函数在执行的前一刻产生一个上下文，Activeaction Object对象
> 这个对象是空的，但是里面有一些看不见的隐式属性：`this:window`属性和`arguments[]`;属性

3. 预编译四部
- 创建AO对象
- 寻找形参和变量声明并当作属性名添加到AO对象中，值为undefined。（函数声明不叫变量）
- 将实参形参相统一
- 在函数体力寻找函数声明，将函数名当作属性名，值为这个函数的函数体
```js
function test (a, b) {
    console.logo(a)
    function a () {}
    a = 222;
    console.log(a);
    function b (){}
    console.log(b)
    var b = 111
    var a;
}
test(1)
// 1 222 function 
```
- var b = function (){}这种不叫函数声明，这个函数是给b赋值的，b变量是声明。
- 在第四步寻找函数声明并不会把赋值成function（）{}，执行到这一行的时候才会赋值成这个函数

# 函数
一. 函数
1. 函数声明的3种方式
+ 函数表达式：`var demo = function (){};`
+ 函数声明：`function demo (){};`
+ 命名函数表达式：`var demo = function xxx(){};`
- 每一个函数里面都有一个类数组属性arguments，这个属性里面存的就是实参。
- 每一个函数有一个length属性，这个属性存的是形参的数量。
- 每一个函数都会有一个return，如果不屑的话函数会自动加一个return
- return的功能有两个：返回这个函数的执行结果，终止函数的执行
```js
function test (a, b) {
    console.log(a + b);
    return;
    console.log("hello");
}
test(1, 2); // 打印结果3，不会打印hello
```

二. 作用域
- 定义：变量（变量作用域又称为上下文）和函数生效（能被访问）的区域
- JavaScript的函数是可以产生作用域的。
- es5中的作用域只有全局作用域和函数作用域两种，es6新添加的块级作用域
```js
var demo = 123; // 全局变量
function test(){
    var demo = 234; // 局部变量
    console.log(demo);
    var demo = "hello";
}
test(demo) // log=>234 就近打印局部变量，没有局部变量打印全局变量
console.log(demo); // 报错，全局作用域无法访问局部作用域
```
- 函数作用域就好像一个屋子，里面的可以拿外面的东西，外面的不能拿里面的东西
- 在函数作用域里声明变量没有var的话，那么就生成了一个全局变量
- 两个不同的作用域（除了全局作用域）是不能相互访问的

三. 作用域链
- 既然函数存在作用域，函数又可以嵌套，那么作用域直接就会产生嵌套关系，这个时候就产生的作用域链
- 当代码在一个环境中执行时，会创建变量的一个作用域链来保证对执行环境有权访问的变量和函数的有序访问
- 作用域链第一个对象始终是当前执行代码所在环境的变量对象
```js
function demo () {
    var dome_a = 1;
    function test () {
        var demo_a = 2;
        console.log(demo_a);
    }
    test();
}
demo();
```
- 本着对执行环境的有权和有序访问，每个函数的自身作用于总在作用域的最顶层，下一层就是这个函数的父级函数作用域....直到全局作用域。
- 因此test执行的时候大一一年的demo_a是本身作用域中的2而不是1，如果自身作用域没有demo_a的话系统就会沿着作用域链向下找到dome作用域的dome_a

四. 闭包
1. 什么是闭包
> 闭包就是能够读取其他函数内部变量的函数

- 不同的作用域之间不能互相访问，但是如果在一个函数内部再定义一个函数并且这个内部函数与外部函数的变量有所关联。那么就可以返回这个函数来访问外部函数里面的变量，所以在本上闭包就是将函数内部与函数外部连结起来的桥梁。
```js
function a (){
    var dome1 = 123;
    add = function (){
        dome1 ++;
    }
    return function (){
        console.log(dome1;
    }
}
var demo = a();
demo(); // 123
add();
demo(); // 124
```
- 当函数执行完函数的执行上下文就会被销毁，自然就无法访问里面的变量了，但是我们这个函数返回了一个依赖于这个函数的新函数。也就是说这个没有被销毁的新函数的作用域链中存在着原本函数作用域的引用，就导致原本函数的上下文不会被销毁，返回的新函数是原本函数的闭包函数

2. 使用闭包的注意点
- 闭包会使函数的变量都保存在内存中，内存消耗很大，不能滥用，否则会造成网页的性能问题，IE会造成内存泄漏
> 解决的方法就是在退出函数时，将不使用的局部变量删除

- 闭包会在父函数外部改变父函数内部的值，如果把闭包当对象使用，那么就把闭包当做它的公用方法，把内部变量当做它的私有属性。
```js
var name = 'global';
var obj = {
    name:'obj',
    getNamu: function(){
        return function () {
            console.log(this.name)
        }
    }
}
ogj.getName()();// obj
```
- 累加器
```js
function a (){
    var num = 1;
    function addNum (){
        num ++;
        console.log(num)
    }
    return addNum;
}
var demo = a();
demo(); // 2
demo(); // 3
var demo1 = a();
demo1(); // 2
demo1(); // 3
```

五. 立即执行函数
- 立即执行函数时解闭包的一个重要方法，但是注意闭包是没有办法接触的，只能通过一个新的闭包来消除上一个必报的影响
- 立即执行函数不需要被定义，直接执行，执行完释放，经常用做初始化
- 函数声明不能被执行，但是函数表达式可以
```js
(functiion (){});
```

```js
function retruB (){
 var arr = [];
 for(i = 0; i < 10; i++){
     arr[i] = (function(){
         console.log(i)
     })
 }
 return arr;
}
var save = returnB();
consosle.log(save);
for(j = 0; j < 10; j++){
    save[i];
}
```

# 对象
1. 对象的创建方式
- 对象字面量
`var obj = {};`
- 这样的方式是最简单最常用的方法
- 对象里面有属性，属性之间用逗号相隔，每条属性都有属性名和值，属性名和属性值用分号分隔

2. 构造函数(constructor)
- 构造函数也分为两种，系统自带的构造函数和自定义的构造函数
- 创建对象的构造函数Object()
`var object = new Object();`
>  通过这条语句就创建了一个空对象，它的作用和var obj = {};的作用一样

- 系统自带的构造函数还是Number()、String()、Boolean()、Array()

3. 自定义构造函数
- 自定义的构造函数时最常用的构造函数
```js
var function Person(){};
var operson = enw Person();
typeof operson // object
```
- 用new操作符创造出来的对象，尽管使用的时要给构造函数，但是之间没有关联。
```js
function Person (name, age) {
    this.name = name;
    thia.age = age;
}
var person = new Person('zhangsan', 18);
console.log(person.name);
```
- 创建对象的时候只有new才会有this
- 重点：为生命可以用new操作符创建相互独立的对象？
- 用new操作符的时候，这个new在构造函数里面饮食的创建了一个this对象，并且最后返回了这个this对象
```js
function Person (name) {
    var that = {
        name: 'list'
    };
    that.name = name;
    return that;
}
var person = new Person('demo');
console.log(person.name)
```
- 如果最后返回的是对象，那么this就失效，但是如果显示返回的是原始值那么this还是有效的。

4. 属性的增删改查
- 增：可以通过对象名+点+属性名的方法来给对象添加新的属性并且赋值
```js
var ogj = {
    name:'demo',
}
obj,mame = 'tan';
```
- 查：查看属性的功能`console.log(xxx)`
- 删：删除属性需要借助delete操作符
```js
var obj = {
    name = 'scerlett'
}
obj.name; // scerlett
delete obj.name;
obj.name; // undefined
```

# 原型与原型链
一. 原型：prototype
- 原型的定义：原型是function对象的一个属性，它定义了构造函数制造出来的对象的共有祖先，通过该构造函数产生的对象。
- 可以继承该原型的属性和方法，原型也是对象。
`function Person(){}`
- 定义一个构造函数，Person.prototype这个属性就是这个构造函数的原型，这个属性天生就有的，并且这个属性的值也是一个对象。
- 可以在person.prototype上面添加属性和方法，每一个构造出来的对象都可以继承这些属性和方法
- 虽然每一个对象都是独立的，但是它们都有共同的祖先，当访问这个对象属性的时候，如果他没有这个属性，就会向上查找，找到它原型，然后再原型上访问这个属性

2. 利用原型特点的概念，可以提取共有属性
- 可以把每一个对象都有的公有属性不写在构造函数里面，而是提取到原型上，这样当构造函数构造大量的对象的时候就不要走多次构造函数里面的赋值语句了。
- 而只需要走一遍，每个对象调用属性的时候直接上原型上查找就可以了。

3. 对象查看原型
- 用构造函数构造对象的时候，就会隐式创建一个this对象，这个this对象里面有一个默认的属性叫做proto属性，这个属性的值就是指向对象的原型。
- 当查找的属性是自身没有的属性的时候，就会查找proto这个属性，然后这个属性指向原型，所以就到原型上查找属性。
> 注意：prototype是函数的属性，proto是对象的属性

4. 查看构造自身的构造函数
- 在prototype里面，有一个隐式的属性叫做constructor，这个属性记录的就是对象的构造器，里面存的就是构造函数
`console.log(person.constructor); // function Person(){}`

二. 原型链
1. 有了原型，原型还是一个对象，那么这个名为原型的对象自然还有自己的原型，这样的原型上还有原型的机构就构成了原型链
```js
Gra.prototype.firsName = 'scarlett'
function Gra () {
    this.name = 'grandfather';
    this.sex = 'male';
}
var grandfoo = new Gra();
grandfoo.word = 'hello';
Foo.prototoype = grandfoo;
function Foo(){
    this.age = '18';
    this.moner = '100';
}
var father = new Foo();
function Son() {
    this.name = 'son';
}
Son.prototype = father;
var son = new Son();
```
- Foo创造出来的每一个对象都继承来自grandfoo对象，son的每一个对象都继承来自father这个由FOO创造出来的对象，这样son就可以继承上卖弄Foo和Gra的所有属性。
- 这种链式的查询结构叫做原型链，最终的尽头是Object.prototype这个对象
- 如果没有规定原型的对象，它的原型就是Object.prototype

2. 但是并不是所有的对象都有原型，比如使用Object.create方法
- Object.create()这个方法需要写一个参数，这个参数就是看hi这个对象的原型，如果要构造一个和`var obj = {};`一样的对象，就需要写：`var obj = Object.create(Object.prototype);`
- 也可以写一个自定义的属性，让他成为原型

3. 原型链上的曾删改查
```js
Person.prototype.arr[1, 2, 3];
var person1 = new Person();
var person2 = new Person();
person1.arr.push(4);
console.log(person2); // 1234
```
- 删：删除属性需要借助delete操作符，对象不能删除原型上的属性
- 改：
- 查：

# 继承、this
1. this的一些问题
- 函数内部的this默认指向window，可以使用call/apply来改变this的指向
    + 区别：后面传参形式不同
    + apply把参数放在数组里
```js
function person (){
    this.name = 'scarlett';
    console.log(this);
}
person();
// this指向window，name属性自然就是window上的全局属性

var obj = {};
person.call(obj); // Object.{name:'scarlett'}
```

2. 继承
- 圣杯模式
```js
 var inherit = (function (Target, Origin) {
    function F(){};
    return function (Target, Origin){
        F.prototype = Origin.prototype;
        Target.prototype = new F();
        Target.prototype.constuctor = Target;
        Target.prototype.uber = Origin.prototype;
    }
}());
```

# 对象的枚举与this
1. 对象的枚举
- 查看对象属性可以用`obj.name`查看，也可以用`obj['name']`类数组方式查看，但事实上是数组模仿了对象的查看方式

2. for-in操作符
- 要枚举一个数组的所有属性只需要用一个for循环从头到尾遍历一遍就可以了，但是对象并不能用for循环来遍历属性，所以就要用到for-in操作
```js
var obj = {
    name: 'scarlett',
    age: 18,
    sex:'female'
}
for(var prop in obj){
    console.log(prop + ':' + obj[prop]);
}
```
- for-in循环会按照属性的顺序取出属性名然后然后赋值给变量prop，所有打印prop都是属性名，`obj[prop]`则是相对应的属性的值。
> 注意：这里不能写成obj.prot的方式，因为在系统底层会转化成`obj[prop]`的形式，但是并没有prop属性，它只是一个变量。

- 在非严格模式中，for-in循环都会把原型里面的一些属性一起打印出来，但es5的严格模式不会。

2. 三种操作符
- hasOwnProperty这个操作符的作用是查看当前这个属性是不是对象自身的属性，在原型链上的属性会被过滤掉，自身的返回true
```js
function Person(){
    this.name = 'scarlett';
}
Person.prototype = {
    age: 18
}
var oPerson = new Person();
for(var prop in oPerson){
    if(oPerson.hasOwnProperty(prop)){
        console.log(oPerson[prop]);
    }
}
```
- 这样for-in循环就只会打印自身的属性，而不会打印原型上的属性

- in操作符：这个操作符的作用是查看一个属性是不是在这个对象或者它原型里面。
```js
'name' in oPerson; // true
'sex' in oPerson; // false
```

- instanceof操作符：查看前面的对象是不是后面的构造函数构造出来的，和constructor很像。
```js
oPerson instanceof Object; // true
{} instanceof oPerson; // false
```

3. this
- 预编译过程中this指向window
- 全局作用域里this指向window
- call/apply可以改变this指向
- obj.func() func()里的this指向obj这个对象
```js
var obj = {
    height: 190,
    eat: function () {
        this.height ++; // eat在没有执行前，谁也不知道this指向谁
    }
}
obj.eat(); // 谁调用，this指向谁
```
- 如果能理解下面的这段代码的this指向问题，那么就掌握的this的所有知识点了
```js
var name = '222';
var a = {
    name: '111',
    say: function (){
        console.log(this.name);
    }
}
var fun = a.say;
fun(); // '222'此时只是把a.say这个函数体赋值给fun变量，相当于在全局空间写下来一个fun函数，this指向window.
a.say(); // ‘111’ 谁调用，this指向谁
var b = {
    name: '333',
    say: function (fun) {
        fun();
    }
}
b.say(a.say); // ‘222’ 其实何在全局调用a.say的函数体方法差不多
b.say = a.say；
b.say(); // ‘333’ this指向B
```

# 克隆与数组
1. arguments.callee()
- 指代函数本身，当在一些匿名函数或者立即执行函数里面进行递归调用函数本身的时候，由于没有名字，就用这种方式调用。
- 一般当需要通过计算来进行初始化的时候，写一个立即执行函数，当这个立即执行函数还需要递归调用自身的时候，就用这种方式调用。

2. function.caller()
```js
function test (){
    console.log(test.caller);
}
function demo (){
    test();
}
demo();
```
- 这是函数本身自带的一个属性，可以指出当前函数的uber运行环境的函数引用，就是这个函数在那个函数里面执行的。

3. 克隆（clone）
- 克隆和继承有一些区别，克隆是复制出来一模一样的目标对象又分为浅度克隆和深度克隆
```js
function clone (src, tar) {
    var tar = tar || {};
    for (var prop in src) {
        if(src.hasOwnProperty(prop)){
            tar[prop] = src[[prop];
        }
    }
    return tar;
}
```
- 当有一个属性是引用值（数组、对象）时按照这种克隆模式，只是把这个引用值的堆地址赋值给新的目标对象，一旦改变了源对象或目标对象的引用属性，另一个也跟着改变，这一点就是浅克隆的缺点。
- 深度克隆的原理很简单，只要不克隆引用值的引用而是把引用值也当作一个源对象，把里面的值一个个克隆到目标对象里面，就解决了二者相同指向的问题
```js
function deepCopy(src, str) {
    var tar = tar || {};
    for(var prop in src) {
        if(typeof(src[prop] == 'object')){
            tar[prop] = (src[prop].constructor === Array) ? [] : {};
            return deepCopy(tar[prop], src[prop]);
        }else{
            tar[prop] = src[prop];
        }
    }
    return tar;
}
```
- 这个时候目标对象和源对象的引用值就没有关系了，都是独立值可以进行修改。

4. 数组（arrty）
- 数组的声明有两种：字面量方式声明数组、通过数组构造函数构造数组
```js
var arr = new Array(1, 2, 3, 4);
console.log(arr) // 1,2,3,4
```
> 注意：如果构造函数参数只有一个数字的时候那么这个时候就不是第一个值得意思了，而是数组长度

- js中的数组是弱类型数组，不可以溢出读，但可以溢出写
```js
var arr = [1, 2];
console.log(arr[3]); // undefined
arr[5] = 5;
console.log(arr); // 1,2,..5
```
- 数组的常用方法：不可改变原数组和改变原数组
- 改变原数组：
    + `reverse`使数组倒序
    + `sort`快速排序
    + `push`在数组末位添加数据
    + `pop`从数组最后一位删除同时返回被删除得数据
    + `shift`从数组第一位删除同时返回被删除的数据
    + `unshift`在数组第一位前面添加数据
    + `splice`截取，三个参数。第一个使截取开始的位置，第二个是截取的长度，第三个是一组数据，在截取的位置添加数据
```js
var arr = [1,2,3,4,5];
arr.solice[1,2,100,200];
console.log(arr) // [1,100,200,3,4,5]
```
    + `sort`它将一种算法封装号给我们使用，可以在这个方法中传入一个参数，这个参数是一个函数，规定了paix规则，否则按照ASC码排序，如果数组中的元素是比较复杂的数据，可以自己来定义排序的规则
    ```js
    arr.sort(function (x, y){
        return x.age < y.age;
    })
    ```
    + 这里的x，y代表数据里任意两位数据，无论中间规则怎么写，系统只关注函数最后返回的值，是正数还是负数，正数的时候表示y在前面x在后面，负数表示x在前面b在后面
    + 乱序排序：
    ```js
    function order (a, b) {
        var num = Math.random() - 0.5
        return num;
    }
    ```
+ 不可改变原数组
    + `concat`这个方式是连接数组的作用，如果要连接多个数组的话中间用逗号相隔
    ```js
    var arr1 = [1, 2];
    var arr2 = [3, 4];
    arr1 = arr1.concat(arr2); // arr1 => [1,2,3,4]
    ```
    + `join`让数组的每一个数据一什么样的方式连接成字符串
    ```js
    var arr1 = ['a','b','c','1'];
    arr1 = arr1.join('-')
    console.log(arr1) // a-b-c-1
    ```
    + `split`刚好和`join`相反，把字符串一什么方式分割成数组
    ```js
    var sta = 'How are you';
    var arr = sta.split(" ",2); // arr => ['How', 'are']
    ```

5. 数组去重
```js
Array.prototype.unique = function (){
    var len = this.length,
        arr = [],
        obj = {};
        for(var i = 0; i < len; i++) {
            if(!obj[this[i]]){
                obj[this[i]] = 1;
                arr.push(this[i];
            }
        }
        return arr;
}
var arr = [1,1,2,3,2,3,21,23,57,323,4];
console.log(arr.unique()); // 
```
+ 这里运用了一个简单的哈希结构，当数组中的这个数据出现过一次之后，就在obj中将这个元素当作属性并赋值为1.后面如果出现相同的元素，因为这个元素在obj中已经存在且值为1，就不会添加到新数组里，最后把新数组返回。

- ES5的数组方法：
     + `forEach`会改变原数组，让数组中的元素从头到尾遍历一遍，每一个都调用一下，forEach的参数是一个函数。
     + `map`和forEach类似，forEach会改变原数组，map不会改变原数组，二十四返回一个新的数组，参数也是一个函数。
     + `filter`过滤的作用，不会改变原数组，而是返回一个数组额的子集，参数为函数，当函数返回true是会把当前元素添加到新数组里，返回false则不会被添加到新数组里
     + `every`和`some`数组的逻辑判定，堆数组应用指定的函数进行判定，返回true或false。
         every如果每一个元素经过传递的方法的判断都是true的时候，才会返回true
         some只要又一个返回true就会返沪true
     + `reduce`和`reduceRight`使用指定的函数将数组元素进行组合，最后变成一个值，reduce是从左到右。
     reduceRight是从右到左，有两个参数，第一个是方法，第二个是可选参数，即最后的这个值是初始值，当没有设置参数的时候，用数组的第一个元素的值作为初始值，不过当数组为空时，不带初始值就会报错。
     当数组只有一个元素并且没有指定初始值，或者有一个空数组并且指定一个初始值的情况下reduce值时简单的返回那个值，而不会跳用函数
     ```js
     var arr = [1,2,3];
     var sum = a.reduce(function (x,y){return x + y},0); // 0 + 1 + 2 +3 = 6
     var temp = [1];
     var tempOut = a.reduce(function(x,y){return x * y}); // 1 不会调用这个函数，因为数组只有一个值，除非设置一个初始值
     
6. 数组类型的检测
- 在ES5中，有一个isArray()方法来检测是否时数组，但是在ES5之前要检测是否时数据类型很麻烦
> typeof运算符：数组和对象都会返回object，无法分清数组和对象
> + constructor和instanceof操作符时目前位置最好用的，但都存在潜在问题
> web浏览器中可能有多个窗口或窗体，每一个窗体有自己的js环境，有自己的全局对象，并且每个全局对象有自己的构造函数，因此一个窗体中的对象将不可能时另外窗体中的构造函数的实列，窗体之间的混淆不常发生，但这个问题已经证明constructor和instanceof都不能真正可靠的检测数组类型。

```js
Object.prototype.toString.call(arr) // => '[Object Array]'
// 这个是最可靠的检测是否是数组类型的方法
```

# 类数组与严格模式
- 有两种数据叫做数组和对象，其实可以用对象来模拟初数组的效果，这种对象就叫做类数组前面提到的arguments就是类数组

1. 类数组：
- 类数组并不是一个数组，，但是它可以表现出数组的特性
```js
var arrObj = {
    '0': 1,
    '1': 2,
    '3': 3,
    'length': 3,
    'push':Array.prototype.push
}
// 这样就创造出了一个类数组
arrObj.push(4);
console.log(arrObj);
// ---->> 
/*var arrObj = {
    '0': 1,
    '1': 2,
    '2': 3,
    '3': 4,
    'length': 3,
    'push':Array.prototype.push
}*/
```
- 它自动改变了length的值，其实类数组的关键就在length属性上，如果没有length属性，那么就是一个普通的对象，即使有push也不能用
- 模拟数组的push方法的实现原理
```js
Array..prototype.push = function (num ) {
    this[this.length ++ ] = num;
}
```
- push的方法就是在数组的最后以为添加一个值，也就是length位置加一个元素，然后把length加一，这样就不难理解为什么有了length属性的对象，可以调用数组的push方法了，因为它本身有一个合法的length属性。
```js
var arrObj = {
    '3': 1,
    '4': 2,
    'a': 3,
    'b': 4,
    'length':2,
    'push':Array.prototype.push
}
arrObj.push(3);
arrObj.push(6);
/*var arrObj = {
    '2': 3,
    '3': 6,
    '4': 2,
    'a': 3,
    'b': 4,
    'length':4,
    'push':Array.prototype.push
}*/
```

2. try...catch
- try{}catcj(e){}; finally{}一般用来检测可能出错的问题，可以把可能出错的代码放在try里面，然后弱国出错会产生反应的代码放在catch里面，final也就是当catch走完之后再走一下finally代码块，finally用处不是很大。
- catch里的参数e一定要有，系统会自动传进去错误信息，错误信息一般分为6种：
    + EvalError eval()的使用和定义不一致
    + RangeError 数组越界
    + ReferenceError 非法或不能识别的引用数值
    + SyntaxErroe 发生语法解析错误
    + TypeError 操作数类型错误
    URIError URI处理函数使用不当
- 当try里面的代码出错了，try里面出错后面的代码就不会执行了，但在try外面的还可以正常执行
```js
try{
    console.log(a);
}catch(e){
console.log(e) // ReferenceError:a is not defined
```

3. ES5严格模式
- ES5严格模式是一种全新的ES5规范，在这个模式下，有一些es3的不标准规则就不能使用了
- 只要写上 `“use strict”;`这一行字符串就可以进入严格模式，不会堆不兼容严格模式浏览器产生影响，只要有两种用法：
    + 全局严格模式：就i是在js代码的第一行协商·不推荐使用
    + 局部严格模式：就函数里的第一行写上字符串
- 严格模式的作用
    + 当代码进入严格模式后，就不允许使用with函数，arguments.callee方法，function.caller属性
     + 变量赋值之前必须使用
     + 局部的this使用之前必须被赋值，除了全局的this默认指向window，其他的默认都是undefined，而且在非严格模式下Person.call(null/undefined)之后，里面的this还是指向window，但是如果严格模式那么传递null/undefined，this就是指向null/undefined
     + 拒绝重复属性和参数，不过有一些浏览器的属性名可以重复

- with方法是改变作用域链，可以把括号里面的执行期上下文或者作用域放在自己的作用域最顶端
```js
var obj = [a:123};
function test () {
    var a = 111;
    var b = 222;
    with(obj){
        console.log(a); // 123
        console.log(b); // 222
    }
    test();
}
```
- 本来没有with的话，在test函数里面作用域链的最顶端应该是自，下面次啊是window的作用域，但是有了with就会优先调用obj里面的a

# DOM开始
- DOM的全称Document Object Model文档对象模型， dom定义了表示和修改文档所需的对象，这些对象的行为和属性以及这些对象之间的关系
- dom对象即为宿主对象，由浏览器厂商定义，用来操作html和css功能的一类对象和集合，浏览器厂商大部分都遵循了W3C的规则

1. dom如何操作html
- document代表整个文档，它也是一个dom元素，都没可以堆html做一些增删改查的操作
- css中有id、class标签等选择器，同样documeng对象上也有很多定义了类似的方法查看元素节点。

2. getElementById
- document.getElementById('id);方法是通过元素的id来选择相对应元素的，因为id是唯一标识。在IE8一下的浏览器中，不区分大小写，而且通过name也能当作id选择出来

3. getElementsByClassName
- 获取到的是一个类数组，因为很多元素都可以用一个类名，可以通过【】的方法具体到那一个元素。

4. getElementsByTagName
- 通过标签名选择出来具体某一种元素的集合


5. getElementsByName
- 只有部分标签适用，表单、表单元素、img、iframe等
- 这里最常用的就是getElementById和getElementsByTagName因为所有浏览器都支持

6. querySelector()和querySelectorAll()
- 选择元素最强的是CSS，而这两个里面写的参数就是CSS选择器的写法
- 不过querySelector永远选择一组里面的第一个，所以返回的不是一个类数组而是一个具体的元素而如果要返回类数组的话就用querySelectorAll()写法。
- 不过这两个方法的问题在于，它返回的不像前面四个是一个实时改变的元素，而是一个副本，用这种方法选择出来的元素把本身元素改变而这个不会被改变

二. 节点
1. 节点类型
- 元素节点、文本节点、注释节点、属性节点等，可以通过nodeType属性来查看这个节点类型nodeType返回的是数字
    + 元素节点 ---> 1
    + 属性节点 ---> 2
    + 文本节点 ---> 3
    + 注释节点 ---> 8
    + docuemnt ---> 9
    + DocumentFragment ---> 11
   
2. 节点的其他属性
- nodeName这个属性可以返回元素的标签名，以大写形式表示，只读。
- 有几个特殊节点返回的不一样
    + 文本节点 ---> #text
    + document节点 ---> #document
- nodeValue Text节点或者Comment节点的文本内容，可以读写
- attributes把行间样式的属性都读取出来，放到一个对象中返回，对象里每一个属性都是一个节点，这个节点就是属性节点
> 注意：对象里面的属性叫做property，而元素里的属性叫做attributes，实际应该叫特性
- 节点还有一个方法：hasChildNodes()可以检测是否有节点

2. 遍历节点树
- `parentNode`查找父节点
- `childNodes`子节点
- `firstChild`第一个子节点
- `lastChild`最后一个子节点
- `nextSibliing`下一个兄弟节点
- `previousSibling`上一个兄弟节点
> 以上这些方法兼容性很好，所有浏览器都支持。

3. 基于元素系欸但树的遍历
- `parentElement`返回当前元素的父元素节点，在这个方法上卖弄，html上面的父元素就不是docuent而是null，IE不支持！！！
- `children`所有的子元素节点，这个方法所有浏览器都兼容
- `childElementCount` node.children.length === node.childElementCount，这个属性就素hi子元素节点的数量，常用的是children。
- `nextElementSibling和previousElementSibling`这两个分别是查找上一个和下一个兄弟元素，IE不兼容！！！

三. DO树总结
- getID方法定义在Document.prototype上，即Element上不能使用。
- getElementByName方法定义在HTMLDocument.prototype上，非html中的document不能使用（xmd document、Element）
- getElementsByTagName方法定义在Document.prototype和Element.prototype上，document和元素都可以使用这个方法
- HTMLDocument.prototype上定义了一些常用属性，body和head分别代表HTML文档中所对应的标签
- Document.prototype上定义了Document.Element属性，指代文档的根元素\<html>标签
- getElementByClassName、query Selector All、quuerySelector和Document、Element类中均有定义

# dom的基本操作代码
- 前面介绍了DOM的基本知识，这里是一些上面知识点的分装函数
1. 遍历元素节点树
```js
function retChild(node){
    var child = node.childNodes,
        len = child.length;
}
```