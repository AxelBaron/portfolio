$(document).ready(function () {
    $('button').bind('click', function () {
        $('button').removeClass();
        console.log('coucou');
        $(this).addClass('buttonActive');
    });
});