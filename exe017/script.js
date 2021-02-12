function gerar(){
    var num = document.getElementById('txtn');
    var tab = document.getElementById('seltab');

    if(num.value.length == 0){
        window.alert('[ERRO] Por favor digite um número!');   
    }else{
        var n = Number(num.value);
        tab.innerHTML = ''; // <= para limpar a tela

        for(var cont = 1; cont <= 10; cont++){
            var item = document.createElement('option');
            item.text = `${n} x ${cont} = ${n * cont}`;
            item.value = `tab${cont}`;
            tab.appendChild(item);
        }
    }
    


}