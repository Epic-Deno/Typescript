/*
 * @Description: KEEP CALM AND MAKE EPIC SHIT - PONY ZHANG
 * @Version: 2.0
 * @Author: PONY ZHANG
 * @Date: 2020-11-11 21:57:16
 * @LastEditors: PONY ZHANG
 * @LastEditTime: 2020-11-11 22:52:07
 */
import Base from "./Base"
import { TYPE } from "./Tab"

class Fade extends Base{
    constructor (el: HTMLElement) {
        super(el, TYPE.FADE);
        this.getMethod(this.setPage)
    }

    private setPage (pageItems: HTMLCollection, curIdx: number) {
        [...pageItems].map((item: HTMLElement) => {
            item.className = "page-item";
        });

        pageItems[curIdx].className += ' active';
    }
}

export default Fade