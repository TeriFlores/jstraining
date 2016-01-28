/**
 * Created by Administrator on 1/26/2016.
 */
var currentDay=function()
{
    var date = new Date();
    var day;
    if (date.getDay()==0)
        day="Sunday";
    else if (date.getDay()==1)
        day="Monday";
    else if (date.getDay()==2)
        day="Tuesday";
    else if (date.getDay()==3)
        day="Wednesday";
    else if (date.getDay()==4)
        day="Thursday";
    else if (date.getDay()==5)
        day="Friday";
    else if (date.getDay()==6)
        day="Saturday";
    var month = new Array ("January","February","March","April","May","Jun","July","August","September","Octuber","November","December");
    var d = new Date();
    console.log('Date: '+d.getDate(),month[d.getMonth()],d.getFullYear())
    //day ={0:'sun',1:'mon',2:'tues'};
    console.log ('Today is:',day);
    console.log ('Current time is:',d.getHours(),':'+ d.getMinutes(),':'+d.getSeconds());
};



