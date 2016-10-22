//gotop
            function GoTop(ct,target){
            this.ct = ct;//页面的容器
            this.target = target;
            this.bindEvent();
            this.createNode();

        }

        GoTop.prototype.bindEvent =function() {
            var _this = this;
            $(window).on('scroll', function(){
                var top = $(window).scrollTop();//窗口滚动的距离
                if (top>200) {
                    _this.target.css('display', 'block')//当滚动距离大于200px，显示回到顶部
                }else{
                    _this.target.css('display', 'none')
                }
            })

        }
        GoTop.prototype.createNode = function(){
            this.target.on('click', function(){
                $(window).scrollTop(0);
            })
        }

        var $ct = $('.ct');
        var $target = $('.go-top');
        new GoTop($ct,$target)