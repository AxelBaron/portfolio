function buttonActive() {
    $( 'button' ).bind( 'click' , function(){
        $( 'button' ).removeClass();
        $( this ).addClass( 'buttonActive' );
    } );
}


