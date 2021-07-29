/*
 * @Description: KEEP CALM AND MAKE EPIC SHIT - PONY ZHANG
 * @Version: 2.0
 * @Author: PONY ZHANG
 * @Date: 2020-11-11 21:59:18
 * @LastEditors: PONY ZHANG
 * @LastEditTime: 2020-11-11 23:04:24
 */
import { TYPE } from "./Tab";

abstract  class Base {
    private _curIdx: number = 0;
    private _el: HTMLElement;
    private _tabItems: HTMLCollection;
    private _methodArr: any[] = [];
    private _pageElement: HTMLElement | HTMLCollection;

    constructor (el: HTMLElement, type: TYPE) {
           this._el = el;
           this._tabItems = this._el.getElementsByClassName('tab-item');
            //切换底部的页面
           switch(type) {
               case TYPE.FADE:
                   this._pageElement = this._el.getElementsByClassName('page-item');
                   break;
                case TYPE.SLIDE:
                    this._pageElement = this._el.getElementsByClassName('inner')[0] as HTMLElement;  
                    break;
                default:
                    break;
           }

            this.init();
    }

    private init() {
        this.bindEvent();
    }

    private bindEvent () {
        this._el.addEventListener('click', this.setTab.bind(this));
    }

    private setTab (e: MouseEvent) {
        const tar = e.target as HTMLElement;
        const className = tar.className;
        
        if(className === 'tab-item') {
            this._tabItems[this._curIdx].className = 'tab-item';//目标类名称替换成 tab-item
            this._curIdx = [].indexOf.call(this._tabItems,tar); //当前点击的位置下标 
            this._tabItems[this._curIdx].className += '  active';
            this.notify();
        }
    }

    private notify() {
        this._methodArr.forEach((item: any) => {
            //执行子类传递的方法
            item(this._pageElement, this._curIdx);
        })
    }

    protected getMethod (method: any) {
        this._methodArr.push(method);
    }
}
export default Base;