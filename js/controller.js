$('document').ready(function () {
    $('input[name=checkbox]').change(function() {
        if ($(this).is(':checked')) {
           $("p[class=price]").each(function (){
               $fragments.append($(this).html())
               $(this).html()

           });
        } else {

        }
    });
});