function resfreshRem() {
    var desW = 640;
    var winW = document.documentElement.clientWidth;
    var ratio = winW / desW;
    document.documentElement.style.fontSize = ratio * 100 + 'px';

}
resfreshRem()
/*resize 事件 调整浏览器窗口的大小时，发生 resize 事件*/
window.addEventListener('resize', resfreshRem)
var mySwiper = new Swiper('.swiper-container', {
    //参数配置
    direction: 'vertical',
    loop: true,
    onTransitionEnd: function (swiper) {
        //swiper.slides; 获取的是一个对象数组 滑块的长度
        var slides = swiper.slides,
        //swiper.activeIndex 滑块当前的索引值
            curIndex = swiper.activeIndex,
        //所有滑块的长度
            total = slides.length,
            targetId = 'page0';
        switch (curIndex) {
            case 0:
                targetId += (total - 2);
                break;
            case (total - 1):
                targetId += 1;
                break;
            default:
                targetId += curIndex;
        }
        [].forEach.call(slides, function (item, index) {
            if (curIndex == index) {
                item.id = targetId;
            } else {
                item.id = null;
            }
        });
    }
});
//music
/*var oMusic=document.getElementById('music'),
    audioMusic=document.getElementById('audioMusic');*/

var music=document.querySelector(".music");
var beyond=document.querySelector("#audioMusic");
window.setTimeout(function () {
    beyond.play();
    //边缓冲边播放
    beyond.addEventListener("canplay",function () {
        music.style.opacity="1";
        music.className="music  musicMove";
    },false)
},1000);
music.addEventListener("click",function () {
    if(beyond.paused){//如果是为true 为停止 为false 播放
        beyond.play();
        music.className="music  musicMove"
    }else {
        beyond.pause();//停止
        music.className="music";
    }
},false)

