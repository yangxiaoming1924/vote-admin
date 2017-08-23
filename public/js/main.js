/**
 * Created by user on 2017/7/18.
 */
$(function () {
document.onreadystatechange= function () {
      if(document.readyState=="complete"){
          ani();
      }
  }

});
function ani() {
    //墨滴方法出现logo

    $('.mo').css({'width':'100vw','margin-left':'-50vw','top':'6.5vh'});
    setTimeout(
        function () {
            $('.logoc').addClass('fadeIn');
            $('.logoj').addClass('fadeIn');
        }
        ,2000);
    //墨滴淡出
    setTimeout(
        function () {
            $('.mo').addClass('fadeOut');
        }
        ,3000);
    //logo先转浅色
    setTimeout(
        function () {
            $('.logoc').css({'opacity':'.5'});
            $('.logoc').removeClass('fadeIn');

        }
        ,4000);
    //logo先转浅色
    setTimeout(
        function () {
            $('.logoc').css({'opacity':'0'});

        }
        ,6000);
    //logo淡出
    setTimeout(
        function () {
            $('.logoj').css({'opacity':'0'});
            $('.logoj').removeClass("fadeIn");
            $('.shizi').css('opacity','1');
        }
        ,7000);
//            //笔画竖由远及近，落至指定位置
//            setTimeout(
//                    function () {
//                        $('.shu').css({'top':'256px','right':'211px','width':'39px','opacity':'1','transition':'all 3s','transform':'scale(1)'});
//
//
//                    }
//                    ,6000);
//            //笔画横由远及近，落至指定位置
//            setTimeout(
//                    function () {
//                        $('.heng').css({'top':'270px','left':'114px','width':'48px','opacity':'1','transition':'all 3s','transform':'scale(1)'});
//
//
//                    }
//                    ,9000);
    //十字笔画出现
    setTimeout(
        function () {
//                        $('.heng').css('opacity','0');
//                        $('.shu').css('opacity','0');



        }
        ,8000);
    //
    setTimeout(function () {
        $('.shizi').css({'opacity':'0'});

    },9000);
    setTimeout(
        function () {
            // $('.heng').hide();
            // $('.shu').hide();
            //$('.shizi').css('display','block');
            $('.zhi').css({'opacity':'1'});


        }
        ,10000);
    //3页文字出现
    setTimeout(
        function () {
            $('.xing').css({'opacity':'1'});


        }
        ,11500);
    //3页文字出现
    setTimeout(
        function () {
            $('.zhi').css({"top":"26.5vh","left":"30.1vw",'transition':"all 1s"});
            $('.xing').css({"top":"34.3vh","left":"52.3vw",'transition':"all 1s"});

        }
        ,12000);
    //3页文字出现
    setTimeout(
        function () {
            $('.three_txt').css('opacity','1');
        }
        ,13500);
    //4页右远山
    setTimeout(
        function () {
            $('.four_right').css('opacity','1');
            $('.show').animate({'background-position-y':'35vw'},2000);
        }
        ,14000);
    //4页右远山
    setTimeout(
        function () {
            $('.four_left').css('opacity','1');
            $('.three_txt').css('opacity','0');
        }
        ,15000);

    //4大道出现
    setTimeout(
        function () {
           // $('.changjing').addClass('cj_4');
            $('.dadao').css('height','30vh');
            // 动画1
            // $('.cj_l').css('backgroundPosition','-64vw -203vh');
            // $('.cj_r').css('backgroundPosition','-519.2vw -230.5vh');
            $('.changjing').css({"background":"url(./img/4页山脉_02.png)  0  12vh no-repeat ",'opacity':'1','backgroundSize':'100%','transition':'all 3s'});

        }
        ,16000);
    function jiaobu(){
        $('.jiaoyin:nth-of-type(2)').removeClass('fadeOut');
        setTimeout(function(){
            $('.jiaoyin:nth-of-type(3)').removeClass('fadeOut');
        },1000)
        setTimeout(function(){
            $('.jiaoyin:nth-of-type(4)').removeClass('fadeOut');
        },2000)
        setTimeout(function(){
            $('.jiaoyin:nth-of-type(5)').removeClass('fadeOut');
        },3000)
        setTimeout(function(){
            $('.jiaoyin:nth-of-type(6)').removeClass('fadeOut');
        },4000)
        setTimeout(function(){
            $('.jiaoyin:nth-of-type(7)').removeClass('fadeOut');
        },5000)
    }
    //4第一步脚印
    setTimeout(
        function () {
            jiaobu();
            //$('.zhixing').css({"top":"393px", "left":"211px","transform":'scale(.5)'});
            $('.zhi').css({"top":"58.5vh", "left":"66.7vw","transform":'scale(.4)','transition':"all 2s"});
            $('.xing').css({"top":"61.1vh", "left":"75.5vw","transform":'scale(.4)','transition':"all 2s"});
        }
        ,17500);
    //4第二步脚印
    setTimeout(
        function () {
            $('.four_center').removeClass('fadeOut');
        }
        ,18500);
    //4第三步脚印
    setTimeout(
        function () {
            $('.four_left1').removeClass('fadeOut');
        }
        ,19500);
    //4第四步脚印
    setTimeout(
        function () {
            $('.four_left2').removeClass('fadeOut');
        }
        ,20500);
    //4第五步脚印
    setTimeout(
        function () {
            $('.four_left3').removeClass('fadeOut');
        }
        ,21500);
    //4第六步脚印
    setTimeout(
        function () {

        }
        ,22500);
    //4脚印走完退出动画 关键字提升
    setTimeout(
        function () {
        $('.four_left3').css({"left": "50%","top":"30.5vh","width":"21.3vw","margin-left":"-8.8vw","transition":'all 3s'});
            //$('.changjing').removeClass('cj_4');
            //$('.dadao').css('height','0');
            $('.jiaoyin').addClass('fadeOut');
            $('.four_center').addClass('fadeOut');
            $('.four_left1').addClass('fadeOut');
            $('.four_left2').addClass('fadeOut');

            //$('.zhixing').addClass('fadeOut');
            $('.four_left').addClass('fadeOut');
            $('.four_right').addClass('fadeOut');
        }
        ,23500);
    setTimeout(function () {
        $('.four_left3').addClass('fadeOut');
        // 动画2

        // $('.cj_l').css('backgroundPosition',' -202.4vw -141.6vh');
        // $('.cj_r').css('backgroundPosition',' -389.3vw -167.5vh');
        $('.changjing').css({"background":"url(./img/5页城市_02.png)  0  10vh no-repeat ",'opacity':'1','backgroundSize':'100%','transition':'all 3s'});

    },25500)
    //5关键字淡出，开启下一幕动画
    setTimeout(
        function () {
           // $('.changjing').addClass('cj_5');
           //  $('.dadao').css('height','23.2vh');
            jiaobu()
        }
        ,26500);
    //5第一步脚印
    setTimeout(
        function () {

        }
        ,27500);
    //5第二步脚印
    setTimeout(
        function () {
            $('.five_center').removeClass('fadeOut');
        }
        ,28500);
    //5第三步脚印
    setTimeout(
        function () {
            $('.five_left1').removeClass('fadeOut');
        }
        ,29500);
    //5第四步脚印
    setTimeout(
        function () {

        }
        ,30500);
    //5第五步脚印
    setTimeout(
        function () {
            $('.five_left2').removeClass('fadeOut');
        }
        ,31500);
    //5第六步脚印
    setTimeout(
        function () {
            $('.five_left2').css({"left": "50%","top":"30.5vh","width":"21.3vw","margin-left":"-8.8vw","transition":'all 3s'});
            //$('.changjing').removeClass('cj_4');
            //$('.dadao').css('height','0');
            $('.jiaoyin').addClass('fadeOut');
            $('.five_center').addClass('fadeOut');
            $('.five_left1').addClass('fadeOut');



        }
        ,32500);
    //6关键字淡出，开启下一幕动画
    setTimeout(
        function () {
            // $('.changjing').addClass('cj_5');
            $('.five_left2').css('opacity','0');
            jiaobu();
                //  动画3
                // $('.cj_l').css('backgroundPosition','-316.8vw -95.5vh');
                // $('.cj_r').css('backgroundPosition','-254.4vw -108.3vh');
            $('.changjing').css({"background":"url(./img/6页水乡_02.png)  0  13vh no-repeat ",'opacity':'1','backgroundSize':'100%','transition':'all 3s'});

        }
        ,34500);
    //6第一步脚印
    setTimeout(
        function () {

        }
        ,35500);
    //6第二步脚印
    setTimeout(
        function () {
            $('.six_center').removeClass('fadeOut');
        }
        ,36500);
    //6第三步脚印
    setTimeout(
        function () {
            $('.six_right1').removeClass('fadeOut');
        }
        ,37500);
    //6第四步脚印
    setTimeout(
        function () {
            $('.six_right2').removeClass('fadeOut');
        }
        ,38500);
    //6第五步脚印
    setTimeout(
        function () {
            $('.six_right3').removeClass('fadeOut');
        }
        ,39500);
    //6第六步脚印
    setTimeout(
        function () {
            $('.six_right3').css({"left": "50%","top":"22.5vh","width":"21.3vw","margin-left":"-8.8vw","transition":'all 3s'});
            //$('.changjing').removeClass('cj_4');
            //$('.dadao').css('height','0');
            $('.jiaoyin').addClass('fadeOut');
            $('.six_center').addClass('fadeOut');
            $('.six_right1').addClass('fadeOut');
            $('.six_right2').addClass('fadeOut');




        }
        ,40500);
    //7关键字淡出，开启下一幕动画
    setTimeout(
        function () {
            // $('.changjing').addClass('cj_5');
            $('.six_right3').css('opacity','0');
            jiaobu();
            //动画4
            // $('.cj_l').css('backgroundPosition','-416.8vw -50.7vh');
            // $('.cj_r').css('backgroundPosition','-150.4vw -61.85vh');
            $('.changjing').css({"background":"url(./img/7页森林_02.png)  0  12vh no-repeat ",'opacity':'1','backgroundSize':'100%','transition':'all 3s'});

        }
        ,42500);
    //7第一步脚印
    setTimeout(
        function () {

        }
        ,43500);
    //7第二步脚印
    setTimeout(
        function () {
            $('.seven_center').removeClass('fadeOut');
        }
        ,44500);
    //7第三步脚印
    setTimeout(
        function () {
            $('.seven_right1').removeClass('fadeOut');
        }
        ,45500);
    //7第四步脚印
    setTimeout(
        function () {
            $('.seven_right3').removeClass('fadeOut');
        }
        ,47000);
    //7第五步脚印
    setTimeout(
        function () {
            //$('.seven_right3').removeClass('fadeOut');
        }
        ,47500);
    //7第六步脚印
    setTimeout(
        function () {
            $('.seven_right3').css({"left": "50%","top":"12.5vh","width":"14.3vw","margin-left":"-7.1vw","transition":'all 3s'});
            //$('.changjing').removeClass('cj_4');
            //$('.dadao').css('height','0');
            $('.jiaoyin').addClass('fadeOut');
            $('.seven_center').addClass('fadeOut');
            $('.seven_right1').addClass('fadeOut');
            $('.seven_right2').addClass('fadeOut');



        }
        ,48500);
    //8关键字淡出，开启下一幕动画
    setTimeout(
        function () {
            // $('.changjing').addClass('cj_5');
            $('.seven_right3').css('opacity','0');
            jiaobu();
                //动画5
                // $('.cj_l').css('backgroundPosition','-534.9vw 1vh');
                // $('.cj_r').css('backgroundPosition','-19.7vw -9.6vh');
            $('.changjing').css({"background":"url(./img/8页水乡酒楼_02.png)  0  8vh no-repeat ",'opacity':'1','backgroundSize':'100%','transition':'all 3s'});

        }
        ,50500);
    //8第一步脚印
    setTimeout(
        function () {
            $('.eight_1').removeClass('fadeOut');

        }
        ,51500);
    //8第二步脚印
    setTimeout(
        function () {
            $('.eight_2').removeClass('fadeOut');
            $('.zhi').css('opacity','0');
            $('.xing').css('opacity','0');
        }
        ,52500);
    //8第三步脚印
    setTimeout(
        function () {
            $('.eight_3').removeClass('fadeOut');
        }
        ,53500);
    //8第四步脚印
    setTimeout(
        function () {
            $('.eight_4').removeClass('fadeOut');
        }
        ,54500);
    //8第五步脚印
    setTimeout(
        function () {
            $('.eight_5').removeClass('fadeOut');
        }
        ,55500);
    //8第六步脚印
    setTimeout(
        function () {

            //$('.jiaoyin').addClass('fadeOut');



        }
        ,56500);
    //finally
    setTimeout(function () {
        $('.changjing').css({'bottom':'-12vh',"transition":"2s"});
        $('.dadao').css({'bottom':'-12vh',"transition":"2s"});
        $('.eight_2').css({'bottom':'13vh',"transition":"2s"});
    },56500);
    setTimeout(function () {
        $('.jt1').addClass('shanshuo');
        $('.ri').removeClass('fadeOut');
    },57000);
















    // setTimeout(function () {
    //     //  动画3
    //     $('.cj_l').css('backgroundPosition','-1188px -576px');
    //     $('.cj_r').css('backgroundPosition','-954px -653px');
    // },33500);
    // setTimeout(function () {
    //     //动画4
    //     $('.cj_l').css('backgroundPosition','-1563px -306px');
    //     $('.cj_r').css('backgroundPosition','-564px -373px');
    // },39500);
    // setTimeout(function () {
    //     //动画5
    //     $('.cj_l').css('backgroundPosition','-2006px 6px');
    //     $('.cj_r').css('backgroundPosition','-74px -58px');
    // },41500)






};