/*
 * @Description: KEEP CALM AND MAKE EPIC SHIT - PONY ZHANG
 * @Version: 2.0
 * @Author: PONY ZHANG
 * @Date: 2020-11-11 21:58:48
 * @LastEditors: PONY ZHANG
 * @LastEditTime: 2020-11-11 22:45:17
 */
import Base from "./Base"
import { TYPE } from "./Tab"

class Slide extends Base{
    constructor (el: HTMLElement) {
        super(el, TYPE.SLIDE);
        this.getMethod(this.setPage);
    }

    private setPage (pageInner: HTMLElement, curIdx: number) {
        pageInner.style.transform = `translate3d(${-(curIdx * 500)}px, 0, 0)`;
    }
}

export default Slide