var num = document.getElementById('txtn');
var tab = document.getElementById('seltab');

function gerarSoma(){
    if(num.value.length == 0){
        window.alert('[ERRO] Por favor digite um número!');
    }else{
        var n = Number(num.value);
        tab.innerHTML = ''; // <= para limpar a tela

        for(var cont = 1; cont <= 10; cont++){
            var item = document.createElement('option');
            item.text = `${n} + ${cont} = ${n + cont}`;
            item.value = `tab${cont}`;
            tab.appendChild(item);
        }
    }
}

function gerarSub(){
    if(num.value.length == 0){
        window.alert('[ERRO] Por favor digite um número!');
    }else{
        var n = Number(num.value);
        tab.innerHTML = '';
        for(var cont = 1; cont <=10; cont++){
            var item = document.createElement('option');
            item.text = `${n} - ${cont} = ${n - cont}`;
            item.value = `tab${cont}`;
            tab.appendChild(item);
        }
    }
}

function gerarMulti(){

    if(num.value.length == 0){
        window.alert('[ERRO] Por favor digite um número!');   
    }else{
        var n = Number(num.value);
        tab.innerHTML = '';
        

        for(var cont = 1; cont <= 10; cont++){
            var item = document.createElement('option');
            item.text = `${n} x ${cont} = ${n * cont}`;
            item.value = `tab${cont}`;
            tab.appendChild(item);
        }
    }
}    
    
function gerarDiv(){
    if(num.value.length == 0){
        window.alert('[ERRO] Por favor digite um número!');   
    }else{
        var n = Number(num.value);
        tab.innerHTML = '';
        

        for(var cont = 1; cont <= 10; cont++){
            var item = document.createElement('option');
            item.text = `${n} / ${cont} = ${(n / cont).toFixed(2)}`;
            item.value = `tab${cont}`;
            tab.appendChild(item);
        }
    }
}

