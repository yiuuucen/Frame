/**
 * Created by Administrator on 2017/9/4.
 */
setInterval(function(){
    var d= new Date();

    console.log('现在是'+ d.getFullYear()+'年'+ (d.getMonth()+1)+'月'+ d.getDay()+'日'+ d.getHours()+'时'+ d.getMinutes()+'分'+ d.getSeconds()+'秒');
},1000);
//getFullYear()
//getMonth()
//getDay()
//getHours()
//getMinutes()
//getSeconds()