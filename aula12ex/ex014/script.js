function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    // var hora = data.getHours();
    var hora = 20
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'fotomanha.png';
        document.body.style.background = '#ffe3ad';
    } else if (hora >= 12 && hora <= 18){
        //Boa tarde
        img.src = 'fototarde.png';
        document.body.style.background = '#f7a367';
    } else {
        //Boa noite
        img.src = 'fotonoite.png';
        document.body.style.background = '#2f5c7a';
    }
}
