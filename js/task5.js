/**
 * Created by Administrator on 2/2/2016.
 */
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