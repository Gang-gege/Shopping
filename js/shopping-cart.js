// 清空购物车
(function () {
    var clearBtn = document.querySelector('.product-effect span:nth-child(1)');
    clearBtn.addEventListener('click', function () {
        var productList = document.querySelectorAll('.product-group li');
        for (var i = 0; i < productList.length; i++) {
            productList[i].remove();
        }
        lastPrice();
    })
})();


// 购物车数量加减并改变价格 
(function () {
    var ulBubble = document.getElementsByClassName('product-group')[0];
    ulBubble.addEventListener('click', function (e) {
        var target = e.target;
        // 累加并改变总价 写入total
        var [unitPrice, totalPrice, count] = [0, 0, 0];
        function plus(tragetNode) {
            // 单价
            unitPrice = Number(target.parentNode.previousElementSibling.lastElementChild.innerText);
            // 商品项的总价
            totalPrice = target.parentNode.nextElementSibling.firstElementChild;
            // 个数*单价
            count = unitPrice * tragetNode.value;
            totalPrice.innerText = '$' + count.toFixed(2);
        }
        if (target.tagName === 'SPAN' && target.innerText === '-' && target.nextElementSibling.value > 1) {
            target.nextElementSibling.value--;
            plus(target.nextElementSibling);
        } else if (target.tagName === 'SPAN' && target.innerText === '+' && target.previousElementSibling.value < 199) {
            target.previousElementSibling.value++;
            plus(target.previousElementSibling);
        };

        // 点击商品项最后的删除按钮删除整个商品项
        if (target.tagName === 'I' && target.innerText === 'X') {
            target.parentNode.parentNode.remove();
        }

        // input输入框失去焦点
        if (target.tagName === 'INPUT') {
            target.addEventListener('blur', function () {

                // 如果填入非数字则变为1
                if (!Number(this.value)) {
                    this.value = 1;
                }

                // 判断如果填入小数则四舍五入
                if (Number(this.value) !== Math.round(this.value)) {
                    this.value = Math.round(this.value);
                }

                // 判断最大不能超过199，最小不能小于1
                if (this.value > 199) {
                    this.value = 199;
                } else if (this.value < 1) {
                    this.value = 1;
                }
                plus(this);
            })
        }

        document.addEventListener('click', lastPrice);
        // 给整个文档添加一个事件监听，点击时修改所有商品的总价
    })
})();



var goodsArr = [
    {
        showImg: 'images/products/28.png',
        productTitle: "Men's leather shoes",
        price: 129,
        quantity: 3,
    },
    {
        showImg: 'images/products/29.png',
        productTitle: "Cat type Bluetooth headset",
        price: 54,
        quantity: 1,
    },
    {
        showImg: 'images/products/30.png',
        productTitle: "Ceramic bowl",
        price: 12,
        quantity: 2,
    },
    {
        showImg: 'images/products/31.png',
        productTitle: "Sofa chair",
        price: 88,
        quantity: 4,
    }
];
(function () {
    var ulNode = document.querySelector('.product-group');
    for (var m = 0; m < goodsArr.length; m++) {
        var liNode = document.createElement('li');
        liNode.innerHTML = `<div class="product-comm">
            <div class="show-img">
                <img src=${goodsArr[m].showImg} alt="">
            </div>
            <h6><a href="">${goodsArr[m].productTitle}</a></h6>
            </div>
            <div class="unit">
            <span>$</span><span class="unit-price">${goodsArr[m].price.toFixed(2)}</span>
            </div>
            <div class="add">
            <span>-</span>
            <input type="text" value="${goodsArr[m].quantity}">
            <span>+</span>
            </div>
            <div class="total">
            <span>${'$' + (goodsArr[m].price.toFixed(2) * goodsArr[m].quantity).toFixed(2)}</span>
            <i>X</i>
            </div>`
        ulNode.insertBefore(liNode, null);
    }
    lastPrice();
})();

// 计算总价函数
function lastPrice() {
    var totalNode = document.querySelector('.last-price');
    var subTotal = document.querySelectorAll('.product-group .total span');
    var addPrice = 0;
    for (var i = 0; i < subTotal.length; i++) {
        (function (i) {
            addPrice += Number(subTotal[i].innerText.slice(1));
        })(i)
    }
    totalNode.innerText = '$' + addPrice.toFixed(2);
}