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
    this.getSum = function( initialIndex,endIndex) {
        if(initialIndex === endIndex);
        { return numbers[endIndex]};
        return numbers[initialIndex] + this.getSum(initialIndex+1, endIndex);
    };
    this.getAvg = function( initialIndex,endIndex) {
        return this.getSum(initialIndex,endIndex)/numbers.length;

    };
};