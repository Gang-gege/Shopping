// 点击打开下拉框 和 点击下拉框里内容进行替换
(function () {
    var dropList = document.querySelector('#section-two .top-left');
    dropList.addEventListener('click', function (e) {
        var target = e.target;
        // 打开下拉框
        if (target.previousElementSibling !== null) {
            var displayState = target.previousElementSibling.style.display;
        };
        if (target.className === 'click-div' && target.tagName === 'DIV' && displayState === 'none') {
            target.previousElementSibling.style.display = 'block';
        } else if (target.className === 'click-div' && target.tagName === 'DIV' && displayState === 'block') {
            target.previousElementSibling.style.display = 'none';
        };
        // 替换内容
        if (target.tagName === 'LI') {
            var liText = target.innerText;
            var targetNode = target.parentNode.parentNode.firstElementChild;
            targetNode.innerText = liText;
        }
    })
})();

// 转换按钮
(function () {
    var turnBtns = document.querySelectorAll('.two-right li');
    var turnNum = 1;
    for (var i = 0; i < turnBtns.length; i++) {
        (function (i) {
            turnBtns[i].addEventListener('click', function () {
                for (var j = 0; j < turnBtns.length; j++) {
                    turnBtns[j].classList.remove('active');
                }
                if (i === turnBtns.length - 1 && turnNum < turnBtns.length - 2) {
                    turnNum++;
                } else if (i === 0 && turnNum > 1) {
                    turnNum--;
                } else if (i > 0 && i < turnBtns.length - 1) {
                    turnNum = i;
                }
                turnBtns[turnNum].classList.add('active');
            })
        })(i)
    }
})()