function getJSON(url) {
  return new Promise((resolve, reject) => {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', url);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState === 4) {
        if (xmlhttp.status === 200) {
          resolve(xmlhttp.responseText);
        } else {
          reject('获取失败');
        }
      }
    };
  });
}

getJSON('./data.json')
  .then(
    value => {
      console.log(value);

      showData(value);
    },
    error => {
      console.log(error);
    }
  )
  .finally(() => '结束');

function showData(value) {
  let data = JSON.parse(value);
  console.log(data);
  let box = document.querySelector('#box');

  for (let key in data) {
    let htmlStr = `<h5>${key}:</h5>`;
    for (let i = 0; i < data[key].length; i++) {
      htmlStr += `<li>${data[key][i].name}  (${data[key][i].age}岁)</li>`;
    }
    let ul = document.createElement('ul');
    ul.innerHTML = htmlStr;
    box.appendChild(ul);
  }
}
