priceList = {
    '$ 19.99':'$ 199.99',
    '$ 24.99':'$ 249.99',
    '$ 39.99':'$ 399.99',
    '$ 199.99':'$ 19.99',
    '$ 249.99':'$ 24.99',
    '$ 399.99':'$ 39.99'
}

$('document').ready(function () {
    $('input[name=checkbox]').change(function() {
        if ($(this).is(':checked')) {
           $("p[class=price]").each(function (){
               var $price =  $(this).html();
               if  (priceList.hasOwnProperty($price)) {
                   $(this).html(priceList[$price])
               }
           });
        } else {
            var $price =  $(this).html();
            $(this).html(priceList[$price])
            $("p[class=price]").each(function (){
                var $price =  $(this).html();
                if  (priceList.hasOwnProperty($price)) {
                    $(this).html(priceList[$price])
                }
            });
        }
    });
});