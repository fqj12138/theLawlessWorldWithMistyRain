module.exports = {

    collectResource: () => {
        let speed = 44;
        let x = Math.random() * 10;
        let y = Math.random() * 10;
        let menu = require("/rigthmenu/xitongshezhi");
        toast("采集当归");
        clickPoint(558 + x, 124 + y);
        sleep(160000 / speed);
        menu.collect("caoyaocong.png");
        sleep(500);
        toast("采集松树");
        clickPoint(1854 + x, 298 + y);
        sleep(350000 / speed);
        clickPoint(1726 + x, 152 + y);
        sleep(150000 / speed);
        clickPoint(1748 + x, 149 + y);
        sleep(150000 / speed);
        clickPoint(1854 + x, 637 + y);
        sleep(150000 / speed);
        clickPoint(1851 + x, 202 + y);
        sleep(150000 / speed);
        clickPoint(1317 + x, 472 + y);
        sleep(100000 / speed);
        menu.collect("tree.png");
        clickPoint(198 + x, 851 + y);
        sleep(160000 / speed);
        clickPoint(228 + x, 687 + y);
        sleep(150000 / speed);
        clickPoint(216 + x, 482 + y);
        sleep(150000 / speed);
        clickPoint(338 + x, 851 + y);
        sleep(150000 / speed);
        clickPoint(234 + x, 907 + y);
        sleep(150000 / speed);
        clickPoint(1525 + x, 902 + y);
        sleep(150000 / speed);
        clickPoint(234 + x, 689 + y);
        sleep(160000 / speed);
        sleep(7000);
        clickPoint(247 + x, 901 + y);
        sleep(150000 / speed);
        clickPoint(247 + x, 901 + y);
        sleep(150000 / speed);
        clickPoint(247 + x, 901 + y);
        sleep(150000 / speed);
        clickPoint(323 + x, 303 + y);
        sleep(150000 / speed);
        clickPoint(234 + x, 147 + y);
        sleep(150000 / speed);
        clickPoint(341 + x, 205 + y);
        sleep(130000 / speed);
    }
}
