function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigada por clicar"; //chamar o elemento pelo Id
    console.log(document.getElementById("agradecimento"));
    //alert("Obrigada por clicar");
}

function redirecionar(){
    window.open("https://www.instagram.com");
    window.location.href = "https://www.instagram.com";
}

function trocar(elemento){
   // document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse!";
    elemento.innerHTML = "Obrigada por passar o mouse!";
   //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada.")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}
/*
function soma(n1, n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;    
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));

alert(soma(5,10));
\*


/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
alert(setReplace("Vai Japão","Japão", "Brasil")); //escreve a frase "Vai Japão" e troca Japão por Brasil
\*

/*
var d = new Date();
alert(d.getMonth()+1);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
\*

/*
var count;
for (count=0; count <= 5; count++){
        alert (count);
};
*/

/*
var count = 0;
while (count < 5){
    console.log(count);
    alert (count);
    count++;    
};
*/

/*
var idade = prompt("Qual a sua idade?");
// var idade = 18
if (idade>=18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}
*/

/*
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maçã","pêra","laranja"]; //arrey
//console.log(lista);
//console.log(lista[1]);
//lista.pop(); //tira o último elemento da lista
//lista.push("uva"); // acrescenta um elemento
//console.log(lista[0]);
// console.log(lista.length);
// console.log(lista.reverse()); //inverte a lista
//console.log(lista.toString()[3]);
// alert(lista[0]);
// console.log(lista.join(" - "));


//var nome = "Juliana Sabioni";
//var idade = 38;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
// alert(nome + " tem " + idade + " anos.");
// alert (idade + idade2);
//console.log(nome);// console no browser (inspecionar - console)
//console.log(idade + idade2); 
//console.log(frase.toLowerCase());
// console.log(frase.replace("Japão", "Brasil"));
// alert (frase.replace("Japão", "Brasil"));