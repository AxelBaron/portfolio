$(document).ready(function () {
    $('.button').bind('click', function () {
        $('button').removeClass();
        $(this).addClass('buttonActive');
        document.getElementById('afficher').style.visibility="hidden";
        
    });
    
    $('#tous').bind('click', function () {
        document.getElementById('afficher').style.visibility="visible";
    });
});