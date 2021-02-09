function carregar(){
var msg = document.getElementById('msg');
var img = document.getElementById('imagem');
var data = new Date();
var hora = data.getHours();


msg.innerHTML = `Agora são <strong>${hora}</strong> horas!`;

if(hora <= 4){
    img.src = 'noite.png';
    document.body.style.background = '#043576';
}
else if(hora > 4 && hora < 12){
    img.src = 'manha.png';
    document.body.style.background = '#f4d3ba';
}else if(hora >= 12 && hora < 18){
    img.src = 'tarde.png';
    document.body.style.background = '#fe9e0a';
}
else{
    img.src = 'noite.png';
    document.body.style.background = '#043576';
}


}