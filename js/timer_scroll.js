//fonction qui empeche le scroll
window.onscroll = function () {
    window.scrollTo(0,0);
}

//On ré-active le scroll dans 4 secondes.
setTimeout(function(){
    window.onscroll = function () {

    }
}, 4000);