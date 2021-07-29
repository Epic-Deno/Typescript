/*
 * @Description: KEEP CALM AND MAKE EPIC SHIT - PONY ZHANG
 * @Version: 2.0
 * @Author: PONY ZHANG
 * @Date: 2020-11-10 23:32:46
 * @LastEditors: Pony
 * @LastEditTime: 2021-07-29 09:52:55
 */
import Fade from "./Fade";
import Slide from "./Slide";
import { setEl, setType } from "./utils";

interface IOptions {
    el: string,
    type: TYPE | string
}
export enum TYPE {
    FADE = "fade",
    SLIDE = "slide",
}

class Tab {

    private _el: HTMLElement;
    private _type: TYPE | string;

    constructor(options: IOptions) {
        const { el, type }: IOptions = options;
        this._type = setType(type);
        this._el = setEl(el, this._type as TYPE);
        
    }



    //fade直接切换  slide滚动切换
    create() {
        switch (this._type) {
            case TYPE.FADE:
                return new Fade(this._el);
            case TYPE.SLIDE:
                return new Slide(this._el);
            default:
                break;
        }
    }
}
export default Tab;