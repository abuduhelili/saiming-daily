// 设置cookie
function setCookie(key, value, days) {
  var date = new Date();
  date.setDate(date.getDate() + days);
  document.cookie = key + "=" + value + ";expires=" + date;
}

// 获取cookie
function getCookie(key) {
  console.log("get-test");
  var cookie = document.cookie;
  var arr = cookie.split(";");
  for (let i = 0; i < arr.length; i++) {
    let arr2 = arr[i].split("=");
    if ((arr2[0] = key)) {
      console.log(decodeURI(arr2[1]));
    }
    return "";
  }
}

// 删除cookie
function removeCookie(key) {
  setCookie(key, "", -1);
}
