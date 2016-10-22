$(function() {
        $.fn.stick = function(handler) { //在jQ上面的fn新添加一个方法，

            //获取高度宽度值
            var $cur = this, //this当前选中的元素,这个this本来就是JQ对象，不用加$封装了
                curH = $cur.height(),
                curW = $cur.width(),
                offsetTop = $cur.offset().top,
                offsetLeft = $cur.offset().left;

            //clone并且隐藏原先那个，但是现在先不用展示，需要展示的时候展示出来
            var $div = $cur.clone() //链式调用：任何操作得到的还是当前的结果
                .css({
                    'visibility': 'hidden',
                    'display': 'none'
                }) //只需要站位
                .insertBefore($cur)
                //.hide();

            //当窗口滚动的时候获取滚动的距离
            $(window).on('scroll', function() {
                var scrollTop = $(this).scrollTop();


                //滚动的距离大于offsetTop，就是该stick·的时候
                if (scrollTop >= offsetTop) {
                    if (!isFixed()) {
                        setFixed();
                    }
                } else {
                    if (isFixed()) {
                        unsetFixed();
                    }
                }
            });

            function isFixed() {
                return !!$cur.attr('data-fixed'); //没有设true，默认undefined，两次取反就是false
            }

            function setFixed() {
                $cur.attr('data-fixed', true) //设为固定
                    .css({
                        position: 'fixed',
                        top: 0,
                        left: offsetLeft,
                        'z-index': 9999,
                        width: curW,
                        margin: 0
                    });
                $div.show();
            }

            function unsetFixed() {
                $cur.removeAttr('data-fixed')
                    .removeAttr('style');
                $div.hide();
            }


        }


        $('#header').stick();
    })