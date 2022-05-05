/**
 * 常用JS变量:
 * agentEvent = 代理模式下自动点击模块
 * acEvent= 无障碍模式下自动点击模块
 * device = 设备信息模块
 * file = 文件处理模块
 * http = HTTP网络请求模块
 * shell = shell命令模块
 * thread= 多线程模块
 * image = 图色查找模块
 * utils= 工具类模块
 * global = 全局快捷方式模块
 * 常用java变量：
 *  context : Android的Context对象
 *  javaLoader : java的类加载器对象
 * 导入Java类或者包：
 *  importClass(类名) = 导入java类
 *      例如: importClass(java.io.File) 导入java的 File 类
 *  importPackage(包名) =导入java包名下的所有类
 *      例如: importPackage(java.util) 导入java.util下的类
 *
 */

function main() {
    //如果自动化服务正常
    if (!autoServiceStart(3)) {
        logd("自动化服务启动失败，无法执行脚本")
        exit();
        return;
    }
    var request = image.requestScreenCapture(20000,0);
    if (request){
        toast("申请截图成功");
    }else {
        toast("申请截图失败，停止脚本！");
        exit();
    }
    sleep(1000);
    var initOpenCV = image.initOpenCV();
    if (initOpenCV){
        toast("初始化OPENCV 类库成功");
    }else {
        toast("初始化OPENCV 类库失败，停止脚本！");
        exit();
    }
    sleep(2000);
    // let menu = require("/rigthmenu/xitongshezhi");
    // menu.clickImage("menu.png");
    // sleep(500);
    // menu.clickImage("setting.png");
    // sleep(500);
    // menu.clickImage("big.png")
    // sleep(500);
    // menu.clickImage("middle.png");
    // clickPoint(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10));
    // sleep(500);
    // clickPoint(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10));

    // 太乙
    // let taiYi = require("/rigthmenu/taiyi/taiyi.js");
    // taiYi.collectResource();

    // 南阳渡
    // sleep(8000);
    // let nanYangDu = require("/rigthmenu/nanyangdu/nanyangdu.js");
    // nanYangDu.collectResource();

    // 洛阳
    // sleep(8000);
    // let luoyang = require("/rigthmenu/luoyang/luoyang.js");
    // luoyang.collectResource();

    // 嵩山
    // sleep(8000);
    // let songshan = require("/rigthmenu/songshan/songshan.js");
    // songshan.collectResource();

    // 落霞镇
    // sleep(8000);
    let luoxia = require("/rigthmenu/luoxia/luoxia.js");
    luoxia.collectResource();
}

function autoServiceStart(time) {
    for (var i = 0; i < time; i++) {
        if (isServiceOk()) {
            return true;
        }
        var started = startEnv();
        logd("第" + (i + 1) + "次启动服务结果: " + started);
        if (isServiceOk()) {
            return true;
        }
    }
    return isServiceOk();
}

main();
