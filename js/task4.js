/**
 * Created by Administrator on 2/1/2016.
 */
/*
 * Say Hello
 * @param name
 * @param {function}cb any function to execute
*/
var sayHello1 = function(name,cb){
    //this.name = name;
    console.log('Hello '+ name);
    cb(name);
};
sayHello1('Lucy',function(name2){
    console.log('How are you'+ name2);
});

sayHello1('Lucy',function(name3){
    console.log('How are Age'+ name3);
});

//autoejecutable en base funtions anonimas
(
    function(){
        var a=2;
        var b=3;
        var res= a+b;
        console.log('Sum is:'+ res);
    })();

// autoejecutable
(function(a,b){
    var a= 1,b=3;
    var res= a+b;
    console.log('Sum is:'+ res);
})();