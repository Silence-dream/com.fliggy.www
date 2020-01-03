

/* 用户下拉菜单 */
/* 获取用户头像 */
let user = document.getElementById("user");
// 获取下拉列表
let userList = document.getElementById("user-list");
let flag = 0;
user.onclick = function () {
    if (flag == 0) {
        userList.style.display = "block";
        flag++;
    }
    else {
        userList.style.display = "none";
        flag = 0;
    }

}






/* 鼠标滚动事件 */
let topEntirety = document.getElementById("top-entirety");

// window.onmousewheel = function () {
//     topEntirety.style.position = "fixed"
//     topEntirety.style.top = "0";
//     topEntirety.style.left = "0";
//     topEntirety.style.zIndex = "999";
//     topEntirety.style.backgroundColor = "#ff3b32";
//     topEntirety.style.width = "100%"
//     console.log(1)
// }
// window.onscroll = function () {
//     console.log(2)
// }


var agent = navigator.userAgent;
if (/.*Firefox.*/.test(agent)) {
    document.addEventListener("DOMMouseScroll", function (e) {
        e = e || window.event;
        var detail = e.detail;
        if (detail > 0) {
            // console.log("鼠标向下滚动");
            topEntirety.style.position = "fixed"
            topEntirety.style.top = "0";
            topEntirety.style.left = "0";
            topEntirety.style.zIndex = "999";
            topEntirety.style.backgroundColor = "#ff3b32";
            topEntirety.style.width = "100%"
            // topEntirety.style.transitionProperty = "all"
            // topEntirety.style.transitionDuration = "0.4s"

        } else {
            // console.warn("鼠标向上滚动");
            topEntirety.style.cssText = "";
            // topEntirety.style.position = "static";
            // topEntirety.style.backgroundColor = "blue";
        }
    });
}
else {
    document.onmousewheel = function (e) {
        e = e || window.event;
        var wheelDelta = e.wheelDelta;
        if (wheelDelta > 0) {
            topEntirety.style.cssText = "";
            // topEntirety.style.position = "static"
            // console.log("鼠标向上滚动");

        } else {
            topEntirety.style.position = "fixed"
            topEntirety.style.top = "0";
            topEntirety.style.left = "0";
            topEntirety.style.zIndex = "999";
            topEntirety.style.backgroundColor = "#ff3b32";
            topEntirety.style.width = "100%"
            // console.warn("鼠标向下滚动");
        }
    }
}



