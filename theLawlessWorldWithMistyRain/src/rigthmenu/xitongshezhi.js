module.exports = {
    clickImage : (fileName) => {
        var menu = readResAutoImage(fileName);
        var points = image.findImageEx(menu, 0, 0, 0, 0, 0.5, 0.6, 1, 5);
        clickRandomRect(points[0]);
        image.recycle(menu);
    },
    forImage : (fileName) => {
        let tempImg = readResAutoImage(fileName);
        let points = image.findImageEx(tempImg, 0, 0, 0, 0, 0.6, 0.8, 1, 5);
        while (points != null) {
            points = image.findImageEx(tempImg, 0, 0, 0, 0, 0.6, 0.8, 1, 5);
            sleep(1000);
        }
        image.recycle(tempImg);
    },
    collect : (fileName) => {
        var img1 = readResAutoImage(fileName);
        var points1 = image.findImageEx(img1, 0, 0, 0, 0, 0.5, 0.6, 1, 5);
        clickRandomRect(points1[0]);
        image.recycle(img1);
        sleep(1000);

        var img2 = readResAutoImage("collect.png");
        var points2 = image.findImageEx(img2, 0, 0, 0, 0, 0.5, 0.6, 1, 5);
        clickRandomRect(points2[0]);
        image.recycle(img2);
        sleep(1000);

        let tempImg = readResAutoImage("cancel.png");
        let points3 = image.findImageEx(tempImg, 0, 0, 0, 0, 0.6, 0.8, 1, 5);
        while (points3 != null) {
            points3 = image.findImageEx(tempImg, 0, 0, 0, 0, 0.6, 0.8, 1, 5);
            sleep(1000);
        }
        image.recycle(tempImg);
        clickPoint(Math.floor(Math.random() * 50), Math.floor(Math.random() * 50));
    },
    killCow: () => {
        let cow = readResAutoImage("cow.png");
        let points = image.findImageEx(cow, 0, 0, 0, 0, 0.6, 0.8, 1, 5);
        if (points) {
            clickRandomRect(points[0]);
            image.recycle(points);

            clickPoint(930 + x, 284 + y);
            sleep(500);

            var killCow = readResAutoImage("killCow.png");
            var killCowImage = image.findImageEx(killCow, 0, 0, 0, 0, 0.6, 0.8, 1, 5);
            clickRandomRect(killCowImage[0]);
            image.recycle(killCowImage);
        }
    }
}
