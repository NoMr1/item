$(function () {
    //法律声明点击事件
    $(".has-list").click(function () {
        if ($(".left-other").css("display") == "block") {
            $(".left-other").slideUp(300);
        } else {
            $(".left-other").slideDown(300);
        }
    });
    //订阅邮件
    $("#emailDeliveryButton").click(function () {
        var email = $("#emailAddress").val();
        CheckMail(email);
    });
    function CheckMail(mail) {
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (filter.test(mail)) {
            return true;
        }
        else {
            $(".email-address").slideDown(400);
            var sum = 0;
            setInterval(function () {
                sum += 1;
                if (sum == 3) {
                    $(".email-address").slideUp(400);
                }
            }, 1000)
        }
    }

    /*任意页面到顶部*/
    $(window).scroll(function () {
        var height = $(window).scrollTop();
        if (height > 50) {
            $('.to-top').show();
        } else {
            $('.to-top').hide();
        }
        $('.to-top').on("click", function () {
            $('body').animate({scrollTop: '0px'}, "linear");
        });
        setTimeout(function () {
            $('body').stop(this, false, true)
        }, height);
    });
    //input事件
    $('#uesr-tel').blur(function () {
        if ($('#uesr-tel').val()) {
            $('.user-tel').css({'top': '43%', 'font-size': '12px'});
        }
    })
    $('#uesr-psd').blur(function () {
        if ($('#uesr-psd').val()) {
            $('.user-psd').css({'top': '66%', 'font-size': '12px'});
        }
    })
    // 记住密码事件
    $('.remember').click(function () {
        if ($(".remember2").css("display") == "block") {
            $(".remember2").hide();
        } else {
            $(".remember2").show();
        }
    });
    //点击关闭事件
    $('#click-close').click(function () {
        $('.click-bg').hide(1000);
        $('.click-data').hide(1000);
    });
    //登陆界面
    $('#user-enter').click(function () {
        $('.click-bg').show(1000);
        $('.click-data').show(1000);
    });
    $('#click-close2').click(function () {
        $('.click-bg').hide(1000);
        $('#users-register').hide(1000);
    });
    $('.user-all-click').click(function () {
        $('.click-data').hide(1000);
        $('.click-bg').show(1000);
        $('#users-register').show(1000);
    });
    //验证码输入点击事件
    $('#demand-inp').focus(function () {
        $('#demand-inp').val('');
    });
    $('#demand-inp').blur(function () {
        $('#demand-inp').val('请输入16位的验证码');
    })
    //职位详情点击
    $('.join-click').click(function () {
        if ($('.join-job2').css('display') == 'none') {
            $('.join-job2').show(500);
        } else {
            $('.join-job2').hide(500);
        }
    });
    $('.join-click1').click(function () {
        if ($('.join-job-2').css('display') == 'none') {
            $('.join-job-2').show(500);
        } else {
            $('.join-job-2').hide(500);
        }
    })
    $('.join-click2').click(function () {
        if ($('.join-job-3').css('display') == 'none') {
            $('.join-job-3').show(500);
        } else {
            $('.join-job-3').hide(500);
        }
    });
    //数量列表
    $('#mum-btn').click(function () {
            if ($('#num-list').children('li').css('display') == 'none') {
                $('#num-list').children('li').show();
            } else {
                $('#num-list').children('li').hide();
            }
            $('#num-list').children('li').click(function () {
            $('.b-m-inp').val($(this).html());
                $('#num-list').children('li').hide();
            })
        }
    );
});


