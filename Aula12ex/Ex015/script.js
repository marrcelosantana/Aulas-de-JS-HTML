function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById("txtano");
    var res = document.querySelector("div#res");

    if(fano.value.length == 0 || Number(fano.value) > ano || Number(fano.value) == 0){
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    }
    else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        res.innerHTML = `Idade calculada: ${idade}.`;
        var gênero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (fsex[0].checked){
            gênero = 'Homem';
            if(idade >= 0 && idade < 15){
                img.setAttribute('src', 'foto-bebe-m.png');
                res.innerHTML = `Detectamos ${gênero} criança com ${idade} anos!`;
            }
            else if(idade < 21){
                img.setAttribute('src', 'foto-jovem-m.png');
                res.innerHTML = `Detectamos ${gênero} jovem com ${idade} anos!`;
            }
            else if(idade < 50){
                img.setAttribute('src', 'foto-adulto-m.png');
                res.innerHTML = `Detectamos ${gênero} adulto com ${idade} anos!`;
            }
            else{
                img.setAttribute('src', 'foto-idoso-m.png');
                res.innerHTML = `Detectamos ${gênero} idoso com ${idade} anos!`;
            }

        }else if (fsex[1].checked){
            gênero = 'Mulher';
            if(idade >= 0 && idade < 15){
                img.setAttribute('src', 'foto-bebe-f.png');
                res.innerHTML = `Detectamos ${gênero} criança com ${idade} anos!`;
            }
            else if(idade < 21){
                img.setAttribute('src', 'foto-jovem-f.png');
                res.innerHTML = `Detectamos ${gênero} jovem com ${idade} anos!`;
            }
            else if(idade < 50){
                img.setAttribute('src', 'foto-adulto-f.png');
                res.innerHTML = `Detectamos ${gênero} adulta com ${idade} anos!`;
            }
            else{
                img.setAttribute('src', 'foto-idoso-f.png');
                res.innerHTML = `Detectamos ${gênero} idosa com ${idade} anos!`;
            }

        }
        res.style.textAlign = 'center';
        
        res.appendChild(img);
    }

}