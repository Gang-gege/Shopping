// 切图片
(function () {
    var all = document.querySelector('.main-three .container .three-top ul li:nth-child(1) a')
    var funture = document.querySelector('.main-three .container .three-top ul li:nth-child(2) a')
    var electronics = document.querySelector('.main-three .container .three-top ul li:nth-child(3) a')
    var houseHold = document.querySelector('.main-three .container .three-top ul li:nth-child(4) a')
    var decor = document.querySelector('.main-three .container .three-top ul li:nth-child(5) a')
    var onne = document.querySelector('.main-three .container .three-mid .product-list.pl15.one')
    var twoo = document.querySelector('.main-three .container .three-mid .product-list.pl15.two')
    var threee = document.querySelector('.main-three .container .three-mid .product-list.pl15.three')
    var fourr = document.querySelector('.main-three .container .three-mid .product-list.pl15.four')
    var fivee = document.querySelector('.main-three .container .three-mid .product-list.pl15.five')
    var sixx = document.querySelector('.main-three .container .three-mid .product-list.pl15.six')
    all.addEventListener('click', function () {
        onne.style.display = 'inline-block'
        twoo.style.display = 'inline-block'
        threee.style.display = 'inline-block'
        fourr.style.display = 'inline-block'
        fivee.style.display = 'inline-block'
        sixx.style.display = 'inline-block'
    })
    funture.addEventListener('click', function () {
        onne.style.display = 'none'
        twoo.style.display = 'none'
        threee.style.display = 'none'
        fourr.style.display = 'inline-block'
        fivee.style.display = 'none'
        sixx.style.display = 'none'

    })
    electronics.addEventListener('click', function () {
        onne.style.display = 'none'
        twoo.style.display = 'none'
        threee.style.display = 'none'
        fourr.style.display = 'inline-block'
        fivee.style.display = 'inline-block'
        sixx.style.display = 'none'
    })
    houseHold.addEventListener('click', function () {
        onne.style.display = 'inline-block'
        twoo.style.display = 'inline-block'
        threee.style.display = 'inline-block'
        fourr.style.display = 'none'
        fivee.style.display = 'none'
        sixx.style.display = 'inline-block'
    })
    decor.addEventListener('click', function () {
        onne.style.display = 'none'
        twoo.style.display = 'inline-block'
        threee.style.display = 'none'
        fourr.style.display = 'none'
        fivee.style.display = 'none'
        sixx.style.display = 'none'
    })
})();
