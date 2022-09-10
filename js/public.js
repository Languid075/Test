
// 底部按钮
var btns = document.getElementsByTagName('button');

for(var i=0; i<btns.length; i++){
    btns[i].onclick = function(){
    for(var i = 0; i<btns.length; i++){
            btns[i].style.backgroundColor = '';
            btns[i].style.color = '#000000';
    } 
            this.style.backgroundColor = '#cc0d11';
            this.style.color = 'white';
            this.style.outline = 'none';
    }
};
