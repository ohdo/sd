var city=null;
$(function(){
   
/*    function getinput(){
    //监听input窗口的placeholder
      if($('input#city').val()==null){
          $("input#city").attr('placeholder',"请输入城市名称");
      }else{
          $("input#city").attr('placeholder',city);
      }
    }
    setInterval("getinput()",100);*/
    $('#search').on('click',function(){ 
    /*
    * 1.输入城市名
    * 2，点击的时候发送请求
    * 3.响应成功渲染页面
    * */
        city = $('input#city').val();
        $("input#city").attr('placeholder',city);
/*        $citycode=urlencode(city);
        console.log($citycode);*/
        $("input#city").val("");
        url='http://v.juhe.cn/weather/index?&cityname='+city+'&dtype=json&format=1&key=9a25c714f9ee408a1e4d6d8d6c078d3d';
        $.ajax({
            url: url,
            dataType: "jsonp",
            type:"get",
            data:{location:city},
            success:function(data){
                if(data.result==null){
                  $("input#city").attr('placeholder',"请输入城市名称");
                  alert("请输入正确的城市");
                }else{
                  $("title").html(city+"天气"); 
                  var sk = data.result.sk;
                  var today = data.result.today;
                  $("#now").css('display','none');
                  $("#now").html(
                    "<table class='table'>"+
                    "<tr>"+
                    "<td>城市</td><td>"+today.city+"</td>"+
                    /*+ '当前:  ' + sk.temp + '℃  , ' + sk.wind_direction + sk.wind_strength + ' , ' + '空气湿度' + sk.humidity + ' , 更新时间' + sk.time + "</p>"+
                    "<p >" + today.city + ' 今天是:  ' + today.date_y + ' ' + today.week + ' , ' + today.temperature + ' , ' + today.weather + ' , ' + today.wind + "</p>"+
                    */
                    "</tr>"+
                    "<tr>"+
                    "<td>天气</td><td>"+today.weather +"</td>"+
                    "</tr>"+
                    "<tr>"+
                    "<td>今日气温</td><td>"+today.temperature +"</td>"+
                    "</tr>"+
                    "<tr>"+
                    "<td>当前温度</td><td>"+sk.temp +"℃</td>"+
                    "</tr>"+
                    "<tr>"+
                    "<td>当前湿度</td><td>"+sk.humidity +"</td>"+
                    "</tr>"+
                    "<tr>"+
                    "<td>当前风向</td><td>"+sk.wind_direction +"</td>"+
                    "</tr>"+
                    "<tr>"+
                    "<td>当前风力</td><td>"+sk.wind_strength +"</td>"+
                    "</tr>"+
                    "<tr>"+
                    "<td>穿衣指数</td><td>"+today.dressing_index +"</td>"+
                    "</tr>"+
                    "<tr>"+
                    "<td>穿衣建议</td><td>"+today.dressing_advice +"</td>"+
                    "</tr>"+
                    "<tr>"+
                    "<td>紫外线强度</td><td>"+today.uv_index +"</td>"+
                    "</tr>"+
                    "<tr>"+
                    "<td>洗车指数</td><td>"+today.wash_index +"</td>"+
                    "</tr>"+
                    "<tr>"+
                    "<td>旅游指数</td><td>"+today.travel_index +"</td>"+
                    "</tr>"+
                    "<tr>"+
                    "<td>晨练指数</td><td>"+today.exercise_index +"</td>"+
                    "</tr>"+
                    "<tr>"+
                    "<td>更新时间</td><td>"+today.date_y+today.week+sk.time +"</td>"+
                    "</tr>"+
                    "<tr>"+
                    "<td></td><td></td>"+
                    "</tr>"+
                    "</table>"
                  );
                  $("#now").slideDown(2000);
                  $("#now").fadeIn(1000);
                }
            },
        });  
//        function urlencode (str) { 
//            str = (str + '').toString(); 
//            return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28'). 
//            replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+'); 
//        } 
    });
})