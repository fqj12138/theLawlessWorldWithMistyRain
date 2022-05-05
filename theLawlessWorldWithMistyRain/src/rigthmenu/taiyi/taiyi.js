module.exports = {

    collectResource: () => {
        let speed = 44;
        let x = Math.random() * 10;
        let y = Math.random() * 10;
        let menu = require("/rigthmenu/xitongshezhi");
        toast("采集松树");
        clickPoint(448 + x, 152 + y);
        sleep(100000 / speed);
        clickPoint(560 + x, 203 + y);
        sleep(100000 / speed);
        clickPoint(888 + x, 361 + y);
        sleep(60000 / speed);
        menu.clickImage("pine.png");
        sleep(1000);
        menu.clickImage("collect.png");
        sleep(1000);
        menu.forImage("cancel.png");
        clickPoint(Math.floor(Math.random() * 50), Math.floor(Math.random() * 50));
        toast("采集白芍");
        clickPoint(1314 + x, 911 + y);
        sleep(100000 / speed);
        clickPoint(1432 + x, 854 + y);
        sleep(95000 / speed);
        clickPoint(877 + x, 911 + y);
        sleep(100000 / speed);
        clickPoint(647 + x, 897 + y);
        sleep(110000 / speed);
        clickPoint(229 + x, 150 + y);
        sleep(100000 / speed);
        clickPoint(126 + x, 853 + y);
        sleep(170000 / speed);
        clickPoint(1314 + x, 900 + y);
        sleep(110000 / speed);
        clickPoint(1860 + x, 846 + y);
        sleep(120000 / speed);
        clickPoint(1852 + x, 420 + y);
        sleep(120000 / speed);
        clickPoint(1210 + x, 419 + y);
        sleep(70000 / speed);
        menu.clickImage("caoyaocong.png");
        sleep(500);
        menu.clickImage("collect.png");
        sleep(1000);
        menu.forImage("cancel.png");
        clickPoint(Math.floor(Math.random() * 50), Math.floor(Math.random() * 50));
        clickPoint(1093 + x, 802 + y);
    }
}
