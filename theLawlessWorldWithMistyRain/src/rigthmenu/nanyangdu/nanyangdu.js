module.exports = {

    collectResource: () => {
        let speed = 44;
        let x = Math.random() * 10;
        let y = Math.random() * 10;
        let menu = require("/rigthmenu/xitongshezhi");
        toast("采集金银花");
        clickPoint(990 + x, 523 + y);
        sleep(500);
        clickPoint(1315 + x, 690 + y);
        sleep(1500);
        clickPoint(1100 + x, 585 + y);
        sleep(1000);
        clickPoint(990 + x, 523 + y);
        sleep(500);
        clickPoint(1203 + x, 643 + y);
        sleep(1500);
        clickPoint(1203 + x, 643 + y);
        sleep(1500);
        clickPoint(881 + x, 580 + y);
        sleep(1000);
        menu.clickImage("caoyaocong.png");
        sleep(1000);
        menu.clickImage("collect.png");
        sleep(1000);
        menu.forImage("cancel.png");
        clickPoint(Math.floor(Math.random() * 50), Math.floor(Math.random() * 50));
        toast("采集桐树");
        clickPoint(872 + x, 903 + y);
        sleep(160000 / speed);
        clickPoint(1210 + x, 940 + y);
        sleep(130000 / speed);
        clickPoint(1767 + x, 915 + y);
        sleep(100000 / speed);
        clickPoint(830 + x, 930 + y);
        sleep(120000 / speed);
        clickPoint(447 + x, 803 + y);
        sleep(120000 / speed);
        clickPoint(222 + x, 149 + y);
        sleep(150000 / speed);
        clickPoint(222 + x, 149 + y);
        sleep(120000 / speed);
        menu.clickImage("tree.png");
        sleep(500);
        menu.clickImage("collect.png");
        sleep(500);
        menu.forImage("cancel.png");
        clickPoint(Math.floor(Math.random() * 50), Math.floor(Math.random() * 50));
        toast("采集铁矿")
        clickPoint(1744 + x, 908 + y);
        sleep(150000 / speed);
        clickPoint(1635 + x, 854 + y);
        sleep(120000 / speed);
        clickPoint(1725 + x, 154 + y);
        sleep(150000 / speed);
        clickPoint(1850 + x, 742 + y);
        sleep(180000 / speed);
        clickPoint(1744 + x, 908 + y);
        sleep(150000 / speed);
        clickPoint(775 + x, 947 + y);
        sleep(160000 / speed);
        clickPoint(990 + x, 523 + y);
        sleep(500);
        clickPoint(1197 + x, 629 + y);
        sleep(1500);
        clickPoint(1203 + x, 418 + y);
        sleep(1000);
        menu.collect("mine.png");
        toast("采集粗麻");
        clickPoint(990 + x, 523 + y);
        sleep(500);
        clickPoint(663 + x, 357 + y);
        sleep(1500);
        clickPoint(990 + x, 523 + y);
        sleep(500);
        clickPoint(663 + x, 357 + y);
        sleep(1500);
        clickPoint(872 + x, 151 + y);
        sleep(140000 / speed);
        clickPoint(215 + x, 146 + y);
        sleep(140000 / speed);
        clickPoint(1528 + x, 149 + y);
        sleep(140000 / speed);
        clickPoint(1744 + x, 146 + y);
        sleep(140000 / speed);
        clickPoint(1010 + x, 107 + y);
        sleep(140000 / speed);
        menu.collect("hemp.png");
        clickPoint(457 + x, 151 + y);
        sleep(150000 / speed);
        clickPoint(434 + x, 568 + y);
        sleep(120000 / speed);
        if (true) {
            let tempImg = readResAutoImage("cow.png");
            let points = image.findImageEx(tempImg, 0, 0, 0, 0, 0.6, 0.8, 1, 5);
            if (points) {
                menu.clickImage("cow.png");
                clickPoint(930 + x, 284 + y);
                sleep(500);
                menu.clickImage("killcow.png");
            }
        }
        sleep(500);
        clickPoint(1644 + x, 205 + y);
        sleep(100000 / speed);
    }
}
