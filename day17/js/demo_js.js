// 打印hello world
// console.log('hello world');
// console.log('hello world!');
// console.log('hello world!!');
// console.log('hello world!!!');


// more / login
var more = document.getElementById('more');
var more_menu = document.getElementById('more_menu');
var login = document.getElementById('login');
var login_page = document.getElementById('login_page');
var out = document.getElementById('out');

//鼠标移入，显示more_menu
more.onmouseover = function () {
    more_menu.style.display = 'block';
}
// 鼠标移出，隐藏
more.onmouseout = function () {
    more_menu.style.display = 'none';
}
// 点击，显示登录页面
login.onclick = function () {
    login_page.style.display = 'block';
}
// 退出
out.onclick = function () {
login_page.style.display = 'none';
}




//  box_hello
var box_hello = document.getElementById('box_hello');
// 点击事件
box_hello.onclick = function () {
    this.style.display = 'flex';
    this.style.backgroundColor = 'black';
    this.style.color = 'white';
    this.style.justifyContent = 'center';
    this.style.alignItems = 'center';
}
 

// box_2
var box_2 = document.getElementById('box_2');
var box_2_set = document.getElementById('box_2_set');
var box_2_get = document.getElementById('box_2_get');
var box_2_img = document.getElementById('box_2_img');
// 事件
box_2_set.onclick = function () {
    // box_2_img.innerHTML = '设置成功';
    box_2_img.innerHTML = '<img src="./logo.png" alt="百度">';
}

box_2_get.onclick = function () { 
    var x = box_2_img.innerHTML;
    console.log(x);
    console.log('successful')
}
