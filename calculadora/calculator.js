/**
 * Created by Administrator on 3/3/2016.
 */




var calculator = function()

{

 this.draw = function()
 {
$(function ()
{


    var $calculator = $('<div/>', {id: 'calculator'}).appendTo('body');
    var $input = $('<input/>', {id: 'input'}).appendTo($calculator);
    var $buttons = $('<div/>', {id: 'buttons'}).appendTo($calculator);


    $.each('1234567890.=+-*/?C'.split(''), function () {
        var $button = $('<button/>', {text: this.toString(), click: function () {

            switch ($(this).text()) {

                case '=': try {$input.val(eval($input.val()));} catch (e) {$input.val('ERROR');}

                    break; case 'C': return $input.val('');

                break; case '?': return $input.val($input.val().replace(/.$/, ''));

                break; default: $input.val($input.val() + $(this).text());
            }
        }}).appendTo($buttons);
    });
});
 }

}

/*
var calculator = function()
{ var elemen = new ();
 var arrayTable;
    this.draw = function () {
        var body = $('body');
        var table = $('<table></table>');
         for (var i = 0; i < 4; i++) {
            var tr = $('<tr></tr>');
            for (var j = 0; j < 4; j++) {

                var td = $('<td>  </td>');

                td.text(arrayTable[i][j] = element1.getValue());

                var id = i + '' + j;
                td.attr('id',id);

                tr.append(td);
            }
            table.append(tr);
        }

        body.append(table);
        /*$('tr').on('click','td', control.push);
        $('tr').on('click','td', control.addEvents);*/

        //$('tr').on('click','td', control.compare);
/*
}

}*/
