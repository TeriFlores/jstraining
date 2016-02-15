/**
 * Created by Administrator on 2/12/2016.
 */
    
var TableCreate =function(n,y) {
    //body
    var body = document.getElementsByTagName("body")[0];
    // create elements <table> and a <tbody>
    var table1     = document.createElement("table");
    var tableBody1 = document.createElement("tbody");

    // cells creation
    for (var j = 0; j <= n; j++) {
        // table row creation
        var row = document.createElement("tr");

        for (var i = 0; i < y; i++) {
            // create element <td>
            var cell = document.createElement("td");
            var cellText = document.createTextNode("row "+j+", column "+i);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        //row added to end of table body
        tableBody1.appendChild(row);
    }
    //<tbody> inside the <table>
    table1.appendChild(tableBody1);
    // put <table> in the <body>
    body.appendChild(table1);
    // <table> border attribute
    table1.setAttribute("border", "2");
}


/*
*var CrearTabla =function(row, col) {

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

 * */