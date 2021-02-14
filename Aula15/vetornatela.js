var num = [8, 1, 7, 4, 2, 9];

/*for(var i = 0; i < num.length; i++){
    console.log(num[i]);
}*/

for(i in num){
    console.log(num[i]);
}

var n = num.indexOf(4);
console.log(`O valor 4 está na posição ${n}`);