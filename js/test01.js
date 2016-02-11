/**
 * Created by Administrator on 2/11/2016.
 */

/*
Class JStest
*/
(var JStest = function() {

 })();

JStest.prototype.getPrimeNumbers = function(num)

     {
         var i;
         for ( i=1;i<= num ;i++)
         {
             if(num%i==0)
                return false

         }
         return true;
     }

JStest.prototype.getFactorial = function(num){
         var res =1;
         for ( var i=1;i<= num ;i++)
         {
             res *= i;
         }
         return res;
     }

JStest.prototype.countVowels=function(texto){

    var vocala = /[^a$]/;
    var vocale = /[^e$]/;
    var vocali = /[^i$]/;
    var vocalo = /[^o$]/;
    var vocalu = /[^u$]/;

     var texto1 = texto.replace (vocala," ");
    var texto2 = texto1.replace (vocale," ");
    var texto3 = texto2.replace (vocali," ");
    var texto4 = texto3.replace (vocalo," ");
    var texto5 = texto4.replace (vocalu," ");
    var textDiv = texto5.split(" ");
    var numbervocals = textDiv.length;
    console.log(numbervocals);

     }
JStest.prototype.evalParagraph= function(parapha, letter){

    var textDiv = parapha.split(" ");
    var numbertexto = textDiv.length;
    Console.log(numbertexto);

}



/*var getFactorial = function(num){
    var res =1;
    for ( var i=1;i<= num ;i++)
    {
        res *= i;
    }
    return res;
}*/



function person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
};