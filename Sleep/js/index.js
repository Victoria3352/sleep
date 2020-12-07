$(function(){
    var num=0;
    var num1 = 50;
    setInterval(function(){
        num1 = num1 - 1
        num = num+0.02;
        if(num >=1){
            num=1
        }
        if(num1 < 30){
            num1 =30
            
        }
        $('.show').css({'opacity':num,'top':num1+'%'})
       
    },100)
  $('.click').click(function(){
      $(this).hide()
      $('.time').show()

  })
  $('.btn').click(function(){
    var date = new Date();
    var y = date.getFullYear()
    var m = date.getMonth()+1
    var d = date.getDate()
    var z = m+'/'+d+'/'+y
    if($('#test4').val() ===  ''){
        alert('Please select the time')
        console.log($('#test4').val());
    }else{
        $('.show').hide()
        $('.item1').show()
        $('.item2').show()
        $('.item3').show()
        var s1 = 0;
        var s2 = 0;
        var s3 = 0;
        setInterval(function(){
            s1++;    
            if(s1<10){
                s1 = '0'+s1
            }
            if(s1===60){
                s2++;     
                s1=0;
                if(s2<10){
                    s2 = '0'+s2
                }
                if(s2===60){
                    s2=0
                    s3++
                    if(s3<10){
                        s3 = '0'+s3
                    }
                }
            }
        if(s2===0){
            s2 = '0'+s2
        }else if(s3===0){
            s3 = '0'+s3
        }else if(s1<0){
            s1 = '0'+s1
        }
            
            
           
            $('.seconds1').text(s1)
            $('.minutes1').text(s2)
            $('.hours1').text(s3)
        },1000)
        $('.countdown').downCount({
            date: z+' '+$('#test4').val(),
            offset: +10
        }, function () {
            alert('倒计时结束!');
        });
    }
    $('.history').click(function(){
        $('.show2').hide()
        $('.box').show()
    })
    var num = 0;
    var array = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
    var array2 = ['./images/s2.svg','./images/s1.svg','./images/s3.svg']
    $('.add').click(function(){
        $('.table').show()
        var tr = '<tr></tr>'
        var td = '<td>'+array[num]+'</td>'
        var td2 = '<td>'+$('.text1').val()+'</td>'
        var sleep = parseInt($('.text1').val().substring(0,2))
        if(sleep <= 21 && sleep >9 ){
            var td3 = '<td style="background:green">'+'<img src="'+array2[0]+'">'
        }else if(sleep <= 23 && sleep > 21){
            var td3 = '<td style="background:yellow">'+'<img src="'+array2[1]+'">'
        }else if(sleep >= 0 && sleep <= 8){
            var td3 = '<td style="background:red">'+'<img src="'+array2[2]+'">'
        }
        
        var tr2 = $(tr).append(td+td2+td3)
        $('.table tbody').append(tr2)
        num++
        if(num == 7){
            num=0
        }
    })
  })

  $.fn.downCount = function (options, callback) {
    var settings = $.extend({
            date: null,
            offset: null
        }, options);
    var container = this;
    var currentDate = function () {
        var date = new Date();
        var utc = date.getTime() + (date.getTimezoneOffset() * 60000- 15 * 3600 * 1000);
        var new_date = new Date(utc + (3600000*settings.offset))
        return new_date;
    };
    function countdown () {
        var target_date = new Date(settings.date), 
            current_date = currentDate(); 
        var difference = target_date - current_date;
        var number = difference;
        // var number = difference - 86400000;
        if (difference < 0) {
            clearInterval(interval);
            if (callback && typeof callback === 'function') callback();
            return;
        }
        if(number <3600000){
            $('.item4').show()
            $('.item5').hide()
        }else if(number > 3600000 && number < 7200000){
            $('.item5').show()
            $('.item6').hide()
        }else{
            $('.item6').show()
        }
        var _second = 1000,
            _minute = _second * 60,
            _hour = _minute * 60,
            _day = _hour * 24;
        var hours = Math.floor((difference % _day) / _hour),
            minutes = Math.floor((difference % _hour) / _minute),
            seconds = Math.floor((difference % _minute) / _second);

            hours = (String(hours).length >= 2) ? hours : '0' + hours;
            minutes = (String(minutes).length >= 2) ? minutes : '0' + minutes;
            seconds = (String(seconds).length >= 2) ? seconds : '0' + seconds;

        var ref_hours = (hours === 1) ? 'hour' : 'hours',
            ref_minutes = (minutes === 1) ? 'minute' : 'minutes',
            ref_seconds = (seconds === 1) ? 'second' : 'seconds';
        container.find('.hours').text(hours);
        container.find('.minutes').text(minutes);
        container.find('.seconds').text(seconds);

        container.find('.hours_ref').text(ref_hours);
        container.find('.minutes_ref').text(ref_minutes);
        container.find('.seconds_ref').text(ref_seconds);
    };
    var interval = setInterval(countdown, 1000);
};
  
})