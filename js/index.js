
        // 1. 获取元素
        var sliderbar = document.querySelector('.slider-bar');
        var banner = document.querySelector('.banner');
        // banner.offestTop 就是被卷去头部的大小 一定要写到滚动的外面
        var bannerTop = banner.offsetTop
            // 当我们侧边栏固定定位之后应该变化的数值
        var sliderbarTop = sliderbar.offsetTop - bannerTop;
        // 获取main_20 主体元素
        var main_20 = document.querySelector('.main_20');
        var goBack = document.querySelector('.goBack');
        var main_20Top = main_20.offsetTop;
        // 2. 页面滚动事件 scroll
        document.addEventListener('scroll', function() {
                // console.log(11);
                // window.pageYOffset 页面被卷去的头部
                // console.log(window.pageYOffset);
                // 3 .当我们页面被卷去的头部大于等于了 172 此时 侧边栏就要改为固定定位
                if (window.pageYOffset >= bannerTop) {
                    sliderbar.style.position = 'fixed';
                    sliderbar.style.top = sliderbarTop + 'px';
                } else {
                    sliderbar.style.position = 'absolute';
                    sliderbar.style.top = '300px';
                }
                // 4. 当我们页面滚动到main_20盒子，就显示 goback模块
                if (window.pageYOffset >= main_20Top) {
                    goBack.style.display = 'block';
                } else {
                    goBack.style.display = 'none';
                }

            })
            // 3. 当我们点击了返回顶部模块，就让窗口滚动的页面的最上方
        goBack.addEventListener('click', function() {
            // 里面的x和y 不跟单位的 直接写数字即可
            // window.scroll(0, 0);
            // 因为是窗口滚动 所以对象是window
            animate(window, 0);
        });
        // 动画函数
        function animate(obj, target, callback) {
            // console.log(callback);  callback = function() {}  调用的时候 callback()

            // 先清除以前的定时器，只保留当前的一个定时器执行
            clearInterval(obj.timer);
            obj.timer = setInterval(function() {
                // 步长值写到定时器的里面
                // 把我们步长值改为整数 不要出现小数的问题
                // var step = Math.ceil((target - obj.offsetLeft) / 10);
                var step = (target - window.pageYOffset) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                if (window.pageYOffset == target) {
                    // 停止动画 本质是停止定时器
                    clearInterval(obj.timer);
                    // 回调函数写到定时器结束里面
                    // if (callback) {
                    //     // 调用函数
                    //     callback();
                    // }
                    callback && callback();
                }
                // 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
                // obj.style.left = window.pageYOffset + step + 'px';
                window.scroll(0, window.pageYOffset + step);
            }, 15);
        };

          // 1. 获取元素
          var login = document.querySelector('.login');
          var mask = document.querySelector('.login-bg');
          var link = document.querySelector('#link');
          var closeBtn = document.querySelector('#closeBtn');
          var title = document.querySelector('#title');
          // 2. 点击弹出层这个链接 link  让mask 和login 显示出来
          link.addEventListener('click', function() {
                  mask.style.display = 'block';
                  login.style.display = 'block';
              })
              // 3. 点击 closeBtn 就隐藏 mask 和 login 
          closeBtn.addEventListener('click', function() {
                  mask.style.display = 'none';
                  login.style.display = 'none';
              })
              // 4. 开始拖拽
              // (1) 当我们鼠标按下， 就获得鼠标在盒子内的坐标
          title.addEventListener('mousedown', function(e) {
              var x = e.pageX - login.offsetLeft;
              var y = e.pageY - login.offsetTop;
              // (2) 鼠标移动的时候，把鼠标在页面中的坐标，减去 鼠标在盒子内的坐标就是模态框的left和top值
              document.addEventListener('mousemove', move)
  
              function move(e) {
                  login.style.left = e.pageX - x + 'px';
                  login.style.top = e.pageY - y + 'px';
              }
              // (3) 鼠标弹起，就让鼠标移动事件移除
              document.addEventListener('mouseup', function() {
                  document.removeEventListener('mousemove', move);
              })
          });

          
          var eye =document.getElementById('eye');
          var pwd = document.getElementById('password');

          var flag = 0;
          eye.onclick = function(){
             if(flag == 0){
                pwd.type= 'text';
                eye.src = 'images/open.png';
                flag = 1;
             }else{
                pwd.type = 'password';
                eye.src = 'images/close.png';
                flag = 0;
            }
          };


