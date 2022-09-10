var aite = document.getElementById('aite');
var textarea = document.getElementById('textarea');

aite.onclick =function() {
    if(aite=='@'){
      textarea.innerHTML= textarea.innerHTML + '@'
    }else{
      textarea.innerHTML=textarea.innerHTML + '@'
    }
};

var btn = document.getElementById('btn');
var text =document.getElementById('textarea');
var ul = document.querySelector('.ul1');

btn.onclick = function() {
  if (text.value == '') {
      alert('输入点内容再提交吧');
      return false;
  } else {
      // console.log(text.value);
      // (1) 创建元素
      var li = document.createElement('li');
      // 先有li 才能赋值
      li.innerHTML =text.value + "<a href='javascript:;'>删除</a>";
      // (2) 添加元素
      // ul.appendChild(li);
      ul.insertBefore(li, ul.children[ul]);
      // (3) 删除元素 删除的是当前链接的li  它的父亲
      var as = document.querySelectorAll('a');
      for (var i = 0; i < as.length; i++) {
          as[i].onclick = function() {
              // node.removeChild(child); 删除的是 li 当前a所在的li  this.parentNode;
              ul.removeChild(this.parentNode);
          }
      }
  }
};

    var btns = document.getElementsByTagName('button');


    for (var i = 0; i < btns.length; i++) {
      btns[i].onclick = function() {
          // (1) 我们先把所有的按钮背景颜色去掉  干掉所有人
          for (var i = 0; i < btns.length; i++) {
          btns[i].style.backgroundColor = '';
          btns[i].style.color ='#000000';
          }
          // (2) 然后才让当前的元素背景颜色为pink 留下我自己
          this.style.backgroundColor = '#cc0d11';
          this.style.color ='white';
          this.style.outline = 'none';
          
      }
  };
  //2. 首先先排除其他人，然后才设置自己的样式 这种排除其他人的思想我们成为排他思想