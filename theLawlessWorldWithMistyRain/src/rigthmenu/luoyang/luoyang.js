module.exports = {

    collectResource: () => {
        let speed = 44;
        let x = Math.random() * 10;
        let y = Math.random() * 10;
        let menu = require("/rigthmenu/xitongshezhi");
        toast("采集赤铜矿");
        clickPoint(1528 + x, 258 + y);
        sleep(100000 / speed);
        clickPoint(990 + x, 523 + y);
        sleep(500);
        clickPoint(774 + x, 427 + y);
        sleep(1500);
        clickPoint(774 + x, 427 + y);
        sleep(1500);
        clickPoint(341 + x, 525 + y);
        sleep(170000 / speed);
        menu.collect("mine.png");
        toast("采集松树");
        clickPoint(665 + x, 147 + y);
        sleep(150000 / speed);
        clickPoint(1311 + x, 252 + y);
        sleep(80000 / speed);
        clickPoint(881 + x, 258 + y);
        sleep(100000 / speed);
        menu.collect("tree.png");
        toast("采集粗麻");
        clickPoint(1861 + x, 849 + y);
        sleep(330000 / speed);
        clickPoint(1638 + x, 844 + y);
        sleep(140000 / speed);
        clickPoint(1638 + x, 844 + y);
        sleep(140000 / speed);
        clickPoint(564 + x, 742 + y);
        sleep(120000 / speed);
        menu.collect("hemp.png");
        toast("采集甘草");
        clickPoint(1100 + x, 145 + y);
        sleep(150000 / speed);
        clickPoint(1738 + x, 150 + y);
        sleep(150000 / speed);
        clickPoint(1854 + x, 523 + y);
        sleep(150000 / speed);
        clickPoint(1641 + x, 843 + y);
        sleep(130000 / speed);
        clickPoint(1760 + x, 145 + y);
        sleep(150000 / speed);
        clickPoint(1760 + x, 145 + y);
        sleep(150000 / speed);
        clickPoint(1418 + x, 198 + y);
        sleep(140000 / speed);
        clickPoint(881 + x, 369 + y);
        sleep(100000 / speed);
        menu.collect("caoyaocong.png");
        toast("庖丁解牛");
        clickPoint(990 + x, 523 + y);
        sleep(500);
        clickPoint(663 + x, 357 + y);
        sleep(1500);
        clickPoint(990 + x, 523 + y);
        sleep(500);
        clickPoint(663 + x, 357 + y);
        sleep(1500);
        clickPoint(228 + x, 369 + y);
        sleep(160000 / speed);
        clickPoint(234 + x, 146 + y);
        sleep(160000 / speed);
        clickPoint(344 + x, 419 + y);
        sleep(140000 / speed);
        if (true) {
            menu.killCow();
        }
        sleep(500);
        clickPoint(1857 + x, 846 + y);
        sleep(160000 / speed);
        clickPoint(1857 + x, 747 + y);
        sleep(160000 / speed);
        clickPoint(1825 + x, 473 + y);
        sleep(120000 / speed);
    }
}
