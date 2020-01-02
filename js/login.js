

/* 获取两个输入框 */
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");

//  获取两个叉
let ca1 = document.getElementById("ca1");
let ca2 = document.getElementById("ca2");

input1.onclick = function () {
    ca1.style.display = 'block';
}
input1.onblur = function () {
    ca1.style.display = 'none';
}
input2.onclick = function () {
    ca2.style.display = 'block';
}
input2.onblur = function () {
    ca2.style.display = 'none';
}