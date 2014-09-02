$(document).ready(function () {
    $("#nav ul li a[href^='#']").on('click', function (e) {

        // prevent default anchor click behavior
        e.preventDefault();

        // animate
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 300, function () {

            // when done, add hash to url
            // (default click behaviour)
            window.location.hash = this.hash;
        });

    });

    ////////////////////////////////
    $('.thumbnail-small').popover({
        placement: 'right',
        offset: 15,
        trigger: 'manual',
        delay: {
            show: 350,
            hide: 100
        },
        html: true,
    });
    var timer, popover_parent;

    function hidePopover(elem) {
        $(elem).popover('hide');
    }
    $('.thumbnail-small').hover(
        function () {
            var self = this;
            clearTimeout(timer);
            $('.popover').hide(); //Hide any open popovers on other elements.
            popover_parent = self
            $(self).popover('show');
        },
        function () {
            var self = this;
            timer = setTimeout(function () {
                hidePopover(self)
            }, 300);
        });

    //    $('.popover').live({
    //        mouseover: function () {
    //            clearTimeout(timer);
    //        },
    //        mouseleave: function () {
    //            var self = this;
    //            timer = setTimeout(function () {
    //                hidePopover(popover_parent)
    //            }, 300);
    //        }
    //    });

    ////////////////////////////////

    //Syncing highlights of left and right image with equal sign
    $(function () {
        $('.equal-sign').hover(
            function () {
                $('.right-image').css('border-color', '#428bca');
                $('.left-image').css('border-color', '#428bca');
                $('.equal-sign').css('border-color', '#428bca');
                //                alert('$thumbnail-border');
            },
            function () {
                $('.right-image').css('border-color', '#dddddd');
                $('.left-image').css('border-color', '#dddddd');
                $('.equal-sign').css('border-color', '#dddddd');
            }
        );
    });
    //Syncing highlights of left image and left arrow
    $(function () {
        $('.left-arrow,.left-image').hover(
            function () {
                $('.left-arrow').css('border-color', '#428bca');
                $('.left-image').css('border-color', '#428bca');
                //                alert('$thumbnail-border');
            },
            function () {
                $('.left-arrow').css('border-color', '#dddddd');
                $('.left-image').css('border-color', '#dddddd');
            }
        );
    });
    //Syncing highlights of right image and right arrow
    $(function () {
        $('.right-arrow,.right-image').hover(
            function () {
                $('.right-arrow').css('border-color', '#428bca');
                $('.right-image').css('border-color', '#428bca');
                //                alert('$thumbnail-border');
            },
            function () {
                $('.right-arrow').css('border-color', '#dddddd');
                $('.right-image').css('border-color', '#dddddd');
            }
        );
    });
    //Sparkline JavaScript

//    $(function () {
          //        $('.inlinesparkline-worst').sparkline('html', {
          //            type: 'line',
          //            height: '37px',
          //            width: '200px',
          //            lineColor: '#bbb',
          //            fillColor: 'rgba(255, 0, 64,0.70)'
          //        });
          //    });
          //
          //    $(function () {
          //        $('.inlinesparkline-best').sparkline('html', {
          //            type: 'line',
          //            height: '37px',
          //            width: '200px',
          //            lineColor: '#bbb',
          //            fillColor: 'rgba(00, 255, 64,0.70)'
          //        });
          //    });
});
