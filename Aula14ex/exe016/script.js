function contar(){
    var inicio = document.getElementById("txti");
    var fim = document.getElementById('txtf');
    var passo = document.getElementById('txtp');
    var res = document.getElementById('res');

    if(passo <= 0){
        window.alert('[ERRO] Passo inválido! Considerando passo 1.');
        passo = 1;
    }

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados!');
        res.innerHTML = 'Impossível contar!'
    }else{
        res.innerHTML = 'Contando: <br>';
        var i = Number(inicio.value);
        var f = Number(fim.value);
        var p = Number(passo.value);

        if(i < f){
            //Contagem crescente:
            for(var cont = i; cont <= f; cont += p){
                res.innerHTML += `${cont} \u{1F449}`;
            }
        }
        else{
            //Contagem regressiva:
            for(var cont = i; cont >= f; cont -= p){
                res.innerHTML += `${cont} \u{1F449}`;
            }
        }
        res.innerHTML += `FIM \u{1F3C1}`;


    }
}