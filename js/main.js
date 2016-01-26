/**
 * Created by Administrator on 1/20/2016.
 */
/*var numbers;
var doOperations=function(){
    //arguments = [4,5,6]
    numbers = arguments;

    console.log('Avg is:',getAvg(0,numbers.length-1))
    console.log('Sum is:',getSum(0,numbers.length-1))
    console.log('Min is:',getMin(0,numbers.length-1))
    console.log('Max is:',getMax(0,numbers.length-1))

};
var getSum = function( initialIndex,endIndex) {
    if(initialIndex === endIndex)
    { return numbers[endIndex]}
    return numbers[initialIndex] + getSum(initialIndex+1, endIndex);
};

var getMin= function(initialIndex,endIndex) {
    if(initialIndex === endIndex)
    { return numbers[endIndex] }
    else
    {   if (numbers[initialIndex] < numbers[initialIndex+1])
        { numbers[initialIndex+1] = numbers[initialIndex]}
        return getMin(initialIndex+1, endIndex);
    }

};

var getMax= function(initialIndex,endIndex) {
    if(initialIndex === endIndex)
    { return numbers[endIndex] }
    else
    {   if (numbers[initialIndex] > numbers[initialIndex+1])
        { numbers[initialIndex+1] = numbers[initialIndex]}
        return getMax(initialIndex+1, endIndex);
    }

};

var getAvg = function( initialIndex,endIndex) {
    return getSum(initialIndex,endIndex)/numbers.length;

};*/

var Class1 = function(){
    //properties
    var numbers;
    this.numbers =numbers;
    this.doOperations=function(){
        //arguments = [4,5,6]
        numbers = arguments;
        //console.log('Max is:',getMax(0,numbers.length-1))
        console.log('Avg is:',this.getAvg(0,numbers.length-1));
        console.log('Sum is:',this.getSum(0,numbers.length-1));
        //console.log('Min is:',getMin(0,numbers.length-1))
    };
    this.getSum=function(){
        numbers = arguments;
        console.log('Sum is:',this.getSum(0,numbers.length-1));
    }
    this.getSum = function( initialIndex,endIndex) {
        if(initialIndex === endIndex);
        { return numbers[endIndex]};
        return numbers[initialIndex] + this.getSum(initialIndex+1, endIndex);
    };
    this.getAvg = function( initialIndex,endIndex) {
        return this.getSum(initialIndex,endIndex)/numbers.length;

    };
};


var countWords=function(paragraph)
{
   //return paragraph.length;
   // return 4;
   return paragraph.split(' ').length;
};


var paragraph = 'Hello Guys'
var totalWords=countWords(paragraph);
console.log ('TotalWords:',totalWords);

var currentDay=function()
{ var date = new Date();
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



