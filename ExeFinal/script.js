var num = document.getElementById('txtn');
var lista = document.getElementById('flista');
var res = document.querySelector('div#res');
var valores = [];

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true;
    }
    else{
        return false;
    }
}

function inLista(n , l){
    if(l.indexOf(Number(n)) != -1){
        return true;
    }
    else{
        return false;
    }
}

function add(){
    if(isNumber(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value));
        var item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado!`;
        lista.appendChild(item);
        res.innerHTML = '';
    }
    else{
        window.alert('[ERRO] Valor inválido ou já adicionado!');
    }
    num.value = '';
    num.focus();

}

function ler(){
    var total = valores.length;
    return `Ao todo temos ${total} números cadastrados.<br><br>`
}

function maiorValor(){
    var maior = valores[0];  
    for(var i = 0; i < valores.length; i++){
        if(valores[i] > maior){
            maior = valores[i];
            Number(maior.value);
        }   
    }
    return `O maior número é ${maior}.<br><br>`;
      
}

function menorValor(){
    var menor = valores[0];
    for(var i in valores){
        if(valores[i] < menor){
            menor = valores[i];
            Number(menor.value);
        }
    }
    return `O menor número é ${menor}.<br><br>`;
}

function somar(){
    var soma = 0;
    for(var i in valores){
        soma += valores[i];
        Number(soma.value);  
    }
    return `Somando todos os valores temos: ${soma}<br><br>`;
}

function media(){
    var soma = 0;
    var media = 0;
    for(var i in valores){
        soma += valores[i];
        media = (soma / valores.length);
        Number(media.value);
    }
    return `A média dos valores é ${(media).toFixed(2)}<br><br>`;
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar!');
    } else{
        var info = '';
        info += ler();
        info += maiorValor();
        info += menorValor();
        info += somar();
        info += media();
        
        return res.innerHTML = info;
    }
}
