// 倒计时
(function () {
    var day = document.querySelector('.days span:nth-child(1)');
    var hour = document.querySelector('.hours span:nth-child(1)');
    var minute = document.querySelector('.mins span:nth-child(1)');
    var second = document.querySelector('.secs span:nth-child(1)');
    var [targetDay, targetHour, targetMinute, targetSecond] = [0, 0, 0, 0];
    var targetAllSecond = Date.parse('2021/11/30');
    // 初始化
    var dateSecond = new Date().getTime();
    var timeDiff = (targetAllSecond - dateSecond) / 1000;
    countDown();

    setInterval(function () {
        dateSecond = new Date().getTime();
        timeDiff = (targetAllSecond - dateSecond) / 1000;
        countDown();
    }, 1000);

    function countDown() {
        targetDay = Math.floor(timeDiff / 86400);
        targetHour = Math.floor((timeDiff % 86400) / 3600);
        targetMinute = Math.floor(((timeDiff % 86400) % 3600) / 60);
        targetSecond = Math.floor(((timeDiff % 86400) % 3600) % 60);
        targetDay = targetDay < 10 ? ('0' + targetDay) : targetDay;
        targetHour = targetHour < 10 ? ('0' + targetHour) : targetHour;
        targetMinute = targetMinute < 10 ? '0' + targetMinute : targetMinute;
        targetSecond = targetSecond < 10 ? '0' + targetSecond : targetSecond;

        day.innerText = targetDay;
        hour.innerText = targetHour;
        minute.innerText = targetMinute;
        second.innerText = targetSecond;
    }
})();