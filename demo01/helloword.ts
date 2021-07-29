var a:string = 'xioayaozi';
// console.log(a)

var age:number = 12;
// console.log(age)

//枚举
enum ren{zz,ee,age}
// console.log(ren.ee)

//对象
enum  ren {
    zhang = '张',
    zhen = "朕"
}
// console.log(ren.zhen);

//any类型
var t:any = 10;
t = "zhen"
t = true
// console.log(t)
//定义函数
function shearchXiaoyaozi(age:number):string{
    return '找到'+age+'逍遥子'
}
var age:number = 27
var result:string = shearchXiaoyaozi(age);
// console.log(result);


//可选参数

function xiaoyaozi(age:number,name?:string):string{
    let yy:string = ''
    yy = `我今年${age}岁`
    if(name !=undefined){
         yy = yy + name
    }
    return yy + '逍遥子'
}
var results:string = xiaoyaozi(27,'张朕')
// console.log(results)


function zhangzhen(name:string = '张朕',age:number=27):string{
    let str:string = '';
        str= `我今年${age}岁`
    if(name!=undefined){
        str=str+name
    }
    return str + '小哥哥'
}
var bew:string = zhangzhen();
// console.log(bew)

function chengxuyuan(...objs:string[]):string{
    let yy:string = '我会'
    for(let i = 0;i<objs.length;i++ ){
        yy = yy+objs[i]
        if(i<objs.length){
            yy = yy+'、'
        }
    }
    return yy
}
let abilitys:string = chengxuyuan('React','Vue','Flutter','微信小程序','Typescript')
// console.log(abilitys)

//函数作用域
function zhengxing():void{
    var yangzi:string= '刘德华'
    console.log(yangzi)
};
// zhengxing();

let Tony:string = "逍遥子"

function TonyStack():void{
    console.log(`张朕就是${Tony}`)
}
// TonyStack();
// console.log(Tony)


//变量重复使用
var xiaoyaoziF:string='逍遥子'

function zhangzhenL():void{
    // var xiaoyaoziF:string = '张朕'
    console.log(`张朕是${xiaoyaoziF}`)
    
}
//let关键字的作用域问题

function zhangzhenC():void{
    var pony:string = '马化腾'
    {
        let ponyZ:string = "小马哥"
        console.log(`pony的小名是${ponyZ}`)
    }
    console.log(`pony的真名是:${pony}`);
}
// zhangzhenC();
//初始化声明的办法
let  arr1:number[] = [1,2,3] //数据类型的数组
let  arr2:Array<string>=['a','c','d'] //字符串类型的数字
let arr3:string[] =['逍遥子','无崖子','李秋水'] //字符串数组
// console.log(arr1,arr2,arr3)

//元祖数组，多个不同类型的数字

let  x : [string,number]

x = ['hello',12]

//字符串常用的
let something:string = '逍遥子，有三个徒弟：李秋水、无崖子、天山童姥'
let xiaojiejie:string = '无崖子'
// console.log(something.indexOf(xiaojiejie));
// console.log(something.lastIndexOf(xiaojiejie));
// console.log(something.replace(xiaojiejie,'大徒弟'))

//日期类型
let d:Date = new Date()
// console.log(d)
let d1:Date = new Date('2020/02/04 13:42:00')
let d2:Date = new Date('2020-02-04 13:42:00')
let d3:Date = new Date('2020-02-04T13:42:00')
// console.log(d1,d2,d3)

//正则
let reg1:RegExp = new RegExp('xiaoyaozi')  //正则表示

// console.log(reg1)

let reg2:RegExp = new RegExp("jspang",'gi')
// console.log(reg2)

//RegExp常用的方法

let newReg:RegExp = /xiaoyaozi/i

let webSite:string = 'xiaoyaozilaotie' 

let NResult:boolean =  newReg.test(webSite);
// console.log(NResult,newReg.exec(webSite));

//类

class XiaoJieJie{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name =name;
        this.age =age;
    }
    say(){
        console.log('小姐姐')
    }
}
let jiejie:XiaoJieJie = new XiaoJieJie('李秋水',1000)
// console.log(jiejie);
// jiejie.say();

//访问修饰符

class xiaoYaoZi{
    public sex:string
    protected name:string
    private age:number
    public  constructor(sex:string,name:string,age:number){
        this.sex =sex
        this.name= name
        this.age=age
    }
    public sayHello():void{
        console.log('逍遥子')
    }
    protected sayLove():void{
        console.log('我爱你')
    }
}
var zhangdabiao:xiaoYaoZi = new xiaoYaoZi('男','张朕',27);
// console.log(zhangdabiao.sex)
// console.log(zhangdabiao.name)报错
// zhangdabiao.sayHello();
// zhangdabiao.seyLove();报错
//只读属性的类
class Man{
    public readonly sex:string = '男'
}
var man:Man = new Man();
// man.sex = '女'只读属性

//类的继承
class zhangzhenX{
    public name:string
    public age:number
    public skill:string
    constructor(name:string,age:number,skill:string){
        this.name = name
        this.age =age
        this.skill= skill
    }
    public interest():void{
        console.log('少女爱上芙兰')
    }

}
let zhangzhenH:zhangzhenX = new zhangzhenX('张朕',27,'web')
// zhangzhenH.interest()
//类的继承 借助extends 不支持多重态继承
class zhangzijing extends zhangzhenX{
    public waimao:string = 'handsome'
    public ability():void{
        console.log('全能天才')
    }
}
let zijing:zhangzijing = new zhangzijing('张子敬',5,'天才')
// zijing.interest()
// zijing.ability()

//类方法的重写
class zhangyuexuan extends zhangzhenX{
    public xingwei:string = '逍遥'
    public interest():void{
        super.interest();
        console.log('逍遥子的儿子')
    }
    public zhuangqian():void{
        console.log('一天一个亿')
    }
}
let yuexuan:zhangyuexuan = new  zhangyuexuan('张悦轩',0,'boy')
// yuexuan.interest()


//接口定义  关键字interface
interface Husband{
    sex:string
    interset:string
    //可选参数
    maibaobao?:boolean
}
let myHusband:Husband = {sex:'男',interset:'家务',maibaobao:true};
console.log(myHusband)
//空间命名
namespace laotie{
    export class Dehua{
        public name:string = '逍遥子'
        talk(){
            console.log('我是逍遥子')
        }
    }
}
namespace wuyaozi{
   export class Dehua{
       public name:string = "无崖子"
       talk(){
           console.log('逍遥子是我师傅')
       }
   }
}
let liqiushui:laotie.Dehua = new laotie.Dehua()
let tianshantonglao:laotie.Dehua =new wuyaozi.Dehua()
liqiushui.talk();