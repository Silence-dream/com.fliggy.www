

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


