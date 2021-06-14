// 滚动条初始化
var scrInit = function () {
    var scrollBtn = document.querySelector('.scrollBtn');
    var scrollTop = document.documentElement.scrollTop;
    var header = document.querySelector('header');
    if (scrollTop > 400) {
        scrollBtn.style.bottom = '60px';
    } else {
        scrollBtn.style.bottom = '-60px';
    };
    if (scrollTop > 0) {
        header.style.backgroundColor = '#ebe7e7';
    } else {
        header.style.backgroundColor = '#f5f5f5';
    }
};
scrInit();

// 点击置顶按钮置顶事件和滚动条事件
(function () {
    var header = document.querySelector('header');
    var scrollBtn = document.querySelector('.scrollBtn');
    document.addEventListener('scroll', function () {
        scrInit();
    });
    scrollBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    })
})();


// 开启和关闭事件
(function () {
    var userClose = document.querySelector('.user-close span');
    var userBtn = document.querySelector('.other ul .active>span');
    userBtn.addEventListener('click', function () {
        user.style.display = 'inline-block';
        setTimeout(function () {
            user.style.transform = 'translate(0, 0)';
            user.style.opacity = 1;
        }, 0)
    })
    var user = document.querySelector('.user')
    userClose.addEventListener('click', function () {
        user.style.transform = 'translate(0, 100px)';
        user.style.opacity = 0;
        setTimeout(function () {
            user.style.display = 'none';
        }, 500)
    })
})();



// 关闭打开遮罩层
(function () {
    var maskClose = document.querySelector('.mask .search-close');
    var mask = document.querySelector('.mask');
    var search = document.querySelector('.search');
    function searchClick() {
        mask.style.display = 'block';
        setTimeout(function () {
            mask.style.transition = 'transform .8s';
            mask.style.transform = 'translateX(0)';
        }, 0)
    }


    // search按钮点击事件
    search.addEventListener('click', searchClick);



    // 遮罩层关闭事件
    maskClose.addEventListener('click', function () {
        search.removeEventListener('click', searchClick);
        mask.style.transform = 'translateX(-100%)';
        setTimeout(function () {
            mask.style.transition = 'none';
            mask.style.transform = 'translateX(100%)';
            search.addEventListener('click', searchClick);
        }, 800)
    })
})();