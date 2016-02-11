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

}

var MyCapicua = function(){
    //properties
    var numbers;
    //this.numbers =numbers;
    this.isCapicua=function() {
        //arguments = [4,5,6]
        numbers = arguments;
        console.log('Capicúa?', this.Capicua(numbers));}

        this.Capicua=function(num) {
            var n = num;

            function reverse(n) {
                return parseInt(n.toString().split('').reverse());
            }

            function opCapicua(n) {
                return n.toString() === reverse(n).toString();
            }

        }
    }


function reverseString(cadena) {

    var cad = cadena;
    // Convertir la cadena en un array
    var cadarray = cad.split('');
    //reverse();
    var i=0, newcad = [];
    do {
         newcad[i] = newcad[i]+ cadarray[cadena.length-1];
          i++;

    } while (i == cadena.length - 1)

}

function factorial(num) {
    res = 1;
    for (var i = 1; i <= num; i++) {
        res *= i;
    }
    return res;
}


/*

function invertir(cadena) {
    var x = cadena.length;
    var cadinver = "";

    while (x>=0) {
        cadinver = cadinver + cadena.charAt(x);
        x--;
    }
    return cadinver;
}
*/



