/**
 * Created by Administrator on 2/12/2016.
 */
/*
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
            // create elements <td>
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
    // <table> in the <body>
    body.appendChild(table1);
    // <table> border
    table1.setAttribute("border", "2");
}

*/
 var mouseOverHandler=function(e){
     e.target.innerText= Date.now() ;// elemento html donde se lanzo el click o mouse
     console.log('hola');
     e.target.style.color = 'red';
     e.target.removeEventListener('mouseover',mouseOverHandler)
    
     // e.target.style.bgColor = 'Yellow';

     // alert('hola');
     //mouseover
     //console.log('hola');

 }
var mouseOutHandler=function(e) {
    e.target.innerText= Date.now() ;// elemento html donde se lanzo el click o mouse
    console.log('hola');
    e.target.style.color = 'blue';
    e.target.removeEventListener('mouseout',mouseOutHandler)
}
var clickHandler=function(e) {
    e.target.innerText= Date.now() ;// elemento html donde se lanzo el click o mouse
    console.log('hola');
    e.target.style.color = 'yellow';
    e.target.removeEventListener('click',clickHandler)
}

var createTable=function (size){
    var myTable=document.createElement('table');
  var row, cell;


    for (var i=0; i< size; i++){
         row =document.createElement('tr');
        for (var j=0; j<size;j++){
            cell=document.createElement('td');
            cell.innerText='row'+i+'cell'+j;
            cell.addEventListener('mouseover',mouseOverHandler );
            cell.addEventListener('mouseout',mouseOutHandler );
            cell.addEventListener('click',clickHandler );
            row.appendChild(cell);
        }
        myTable.appendChild(row);
    }

//manipula el obj
    var body =document.getElementsByTagName('body')[0];
    body.appendChild(myTable);
    myTable.setAttribute("border", "2");
}


window.onload =function(){
    //recien se ejecuta esta funcion , es mejor organizado

    createTable(3);
};


