/**
 * Created by Administrator on 1/29/2016.
 */

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
function factorialRecur(n) {
    if (n == 0){
        return 1;
    }
    return n * factorialRecur(n-1);
}