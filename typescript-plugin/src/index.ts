/*
 * @Description: KEEP CALM AND MAKE EPIC SHIT - PONY ZHANG
 * @Version: 2.0
 * @Author: PONY ZHANG
 * @Date: 2020-11-10 23:04:18
 * @LastEditors: PONY ZHANG
 * @LastEditTime: 2020-11-11 23:13:21
 */
import Tab from './Tab';

(() => {

    const init = () => {
        let model: string = 'fade';
        const tab: Tab = new Tab({
            el: 'tab',
            type: model,
        })

        tab.create();
    }

    init();
})();