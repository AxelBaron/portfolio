function close_fenetre(){
    document.getElementById('mask').style.display="none";
    document.getElementById('fenetre_mail').style.display="none";
}

function close_fmod_rea(){
    var c = document.getElementById('contact');
    c.style.position='block';
    c.style.zIndex="0";
    document.getElementById('mask_rea').style.display="none";
    document.getElementById('fenetre_rea').style.display="none";
}