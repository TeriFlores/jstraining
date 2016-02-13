/**
 * Created by Administrator on 2/12/2016.
 */
var CrearTabla =function(row, col) {

    var body = document.getElementsByTagName("body")[0];
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");

    for( var i= 1; i<= row; i++){
        var tblTr = document.createElement("tr");


        for (var j = 0; j < col; j++) {

            var celda = document.createElement("td");
            var textoCelda = document.createTextNode("row "+i+", col "+j);
            celda.appendChild(textoCelda);
            tblTr.appendChild(celda);
        }

        tblBody.appendChild(tblTr);
    }


}
