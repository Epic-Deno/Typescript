"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a = 'xioayaozi';
// console.log(a)
var age = 12;
// console.log(age)
//枚举
var ren;
(function (ren) {
    ren[ren["zz"] = 0] = "zz";
    ren[ren["ee"] = 1] = "ee";
    ren[ren["age"] = 2] = "age";
})(ren || (ren = {}));
// console.log(ren.ee)
//对象
(function (ren) {
    ren["zhang"] = "\u5F20";
    ren["zhen"] = "\u6715";
})(ren || (ren = {}));
// console.log(ren.zhen);
//any类型
var t = 10;
t = "zhen";
t = true;
// console.log(t)
//定义函数
function shearchXiaoyaozi(age) {
    return '找到' + age + '逍遥子';
}
var age = 27;
var result = shearchXiaoyaozi(age);
// console.log(result);
//可选参数
function xiaoyaozi(age, name) {
    var yy = '';
    yy = "\u6211\u4ECA\u5E74" + age + "\u5C81";
    if (name != undefined) {
        yy = yy + name;
    }
    return yy + '逍遥子';
}
var results = xiaoyaozi(27, '张朕');
// console.log(results)
function zhangzhen(name, age) {
    if (name === void 0) { name = '张朕'; }
    if (age === void 0) { age = 27; }
    var str = '';
    str = "\u6211\u4ECA\u5E74" + age + "\u5C81";
    if (name != undefined) {
        str = str + name;
    }
    return str + '小哥哥';
}
var bew = zhangzhen();
// console.log(bew)
function chengxuyuan() {
    var objs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objs[_i] = arguments[_i];
    }
    var yy = '我会';
    for (var i = 0; i < objs.length; i++) {
        yy = yy + objs[i];
        if (i < objs.length) {
            yy = yy + '、';
        }
    }
    return yy;
}
var abilitys = chengxuyuan('React', 'Vue', 'Flutter', '微信小程序', 'Typescript');
// console.log(abilitys)
//函数作用域
function zhengxing() {
    var yangzi = '刘德华';
    console.log(yangzi);
}
;
// zhengxing();
var Tony = "逍遥子";
function TonyStack() {
    console.log("\u5F20\u6715\u5C31\u662F" + Tony);
}
// TonyStack();
// console.log(Tony)
//变量重复使用
var xiaoyaoziF = '逍遥子';
function zhangzhenL() {
    // var xiaoyaoziF:string = '张朕'
    console.log("\u5F20\u6715\u662F" + xiaoyaoziF);
}
//let关键字的作用域问题
function zhangzhenC() {
    var pony = '马化腾';
    {
        var ponyZ = "小马哥";
        console.log("pony\u7684\u5C0F\u540D\u662F" + ponyZ);
    }
    console.log("pony\u7684\u771F\u540D\u662F:" + pony);
}
// zhangzhenC();
//初始化声明的办法
var arr1 = [1, 2, 3]; //数据类型的数组
var arr2 = ['a', 'c', 'd']; //字符串类型的数字
var arr3 = ['逍遥子', '无崖子', '李秋水']; //字符串数组
// console.log(arr1,arr2,arr3)
//元祖数组，多个不同类型的数字
var x;
x = ['hello', 12];
//字符串常用的
var something = '逍遥子，有三个徒弟：李秋水、无崖子、天山童姥';
var xiaojiejie = '无崖子';
// console.log(something.indexOf(xiaojiejie));
// console.log(something.lastIndexOf(xiaojiejie));
// console.log(something.replace(xiaojiejie,'大徒弟'))
//日期类型
var d = new Date();
// console.log(d)
var d1 = new Date('2020/02/04 13:42:00');
var d2 = new Date('2020-02-04 13:42:00');
var d3 = new Date('2020-02-04T13:42:00');
// console.log(d1,d2,d3)
//正则
var reg1 = new RegExp('xiaoyaozi'); //正则表示
// console.log(reg1)
var reg2 = new RegExp("jspang", 'gi');
// console.log(reg2)
//RegExp常用的方法
var newReg = /xiaoyaozi/i;
var webSite = 'xiaoyaozilaotie';
var NResult = newReg.test(webSite);
// console.log(NResult,newReg.exec(webSite));
//类
var XiaoJieJie = /** @class */ (function () {
    function XiaoJieJie(name, age) {
        this.name = name;
        this.age = age;
    }
    XiaoJieJie.prototype.say = function () {
        console.log('小姐姐');
    };
    return XiaoJieJie;
}());
var jiejie = new XiaoJieJie('李秋水', 1000);
// console.log(jiejie);
// jiejie.say();
//访问修饰符
var xiaoYaoZi = /** @class */ (function () {
    function xiaoYaoZi(sex, name, age) {
        this.sex = sex;
        this.name = name;
        this.age = age;
    }
    xiaoYaoZi.prototype.sayHello = function () {
        console.log('逍遥子');
    };
    xiaoYaoZi.prototype.sayLove = function () {
        console.log('我爱你');
    };
    return xiaoYaoZi;
}());
var zhangdabiao = new xiaoYaoZi('男', '张朕', 27);
// console.log(zhangdabiao.sex)
// console.log(zhangdabiao.name)报错
// zhangdabiao.sayHello();
// zhangdabiao.seyLove();报错
//只读属性的类
var Man = /** @class */ (function () {
    function Man() {
        this.sex = '男';
    }
    return Man;
}());
var man = new Man();
// man.sex = '女'只读属性
//类的继承
var zhangzhenX = /** @class */ (function () {
    function zhangzhenX(name, age, skill) {
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
    zhangzhenX.prototype.interest = function () {
        console.log('少女爱上芙兰');
    };
    return zhangzhenX;
}());
var zhangzhenH = new zhangzhenX('张朕', 27, 'web');
// zhangzhenH.interest()
//类的继承 借助extends 不支持多重态继承
var zhangzijing = /** @class */ (function (_super) {
    __extends(zhangzijing, _super);
    function zhangzijing() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.waimao = 'handsome';
        return _this;
    }
    zhangzijing.prototype.ability = function () {
        console.log('全能天才');
    };
    return zhangzijing;
}(zhangzhenX));
var zijing = new zhangzijing('张子敬', 5, '天才');
// zijing.interest()
// zijing.ability()
//类方法的重写
var zhangyuexuan = /** @class */ (function (_super) {
    __extends(zhangyuexuan, _super);
    function zhangyuexuan() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xingwei = '逍遥';
        return _this;
    }
    zhangyuexuan.prototype.interest = function () {
        _super.prototype.interest.call(this);
        console.log('逍遥子的儿子');
    };
    zhangyuexuan.prototype.zhuangqian = function () {
        console.log('一天一个亿');
    };
    return zhangyuexuan;
}(zhangzhenX));
var yuexuan = new zhangyuexuan('张悦轩', 0, 'boy');
var myHusband = { sex: '男', interset: '家务', maibaobao: true };
console.log(myHusband);
//空间命名
var laotie;
(function (laotie) {
    var Dehua = /** @class */ (function () {
        function Dehua() {
            this.name = '逍遥子';
        }
        Dehua.prototype.talk = function () {
            console.log('我是逍遥子');
        };
        return Dehua;
    }());
    laotie.Dehua = Dehua;
})(laotie || (laotie = {}));
var wuyaozi;
(function (wuyaozi) {
    var Dehua = /** @class */ (function () {
        function Dehua() {
            this.name = "无崖子";
        }
        Dehua.prototype.talk = function () {
            console.log('逍遥子是我师傅');
        };
        return Dehua;
    }());
    wuyaozi.Dehua = Dehua;
})(wuyaozi || (wuyaozi = {}));
var liqiushui = new laotie.Dehua();
var tianshantonglao = new wuyaozi.Dehua();
liqiushui.talk();
