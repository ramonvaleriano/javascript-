function soma(n1, n2){
    return n1 + n2
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

function validaIdade(idade){
    var validar;
    if (idade >=18){
        validar = True
    }
    else{
        validar = False
    }
    return validar
}

idade = prompt("Você é Maior de idade: ")
console.log(validaIdade(idade))


//alert(soma(5, 10))
//alert(setReplace("Vai Japão", "Japão", "Brasil"))

/*
var d = new Date;
alert(d)
alert(d.getMonth()+1)
alert(d.getMinutes())
alert(d.getDay())
alert(d.getHours())
*/
/*
var count;
for(count=0;count<5;count++){
    console.log(count); 
}
*/

/*
var count = 0;
while (count<5){
    console.log(count);
    count++;
}
*/

/*
var idade = prompt("Qual sua idade: ");
//var idade = 18;
if (idade>18){
    alert("Maior de idade");
}
else{
    alert("Menor de idade");
}
*/

/*
var frutas = [{nome:"maçã", cor:"Vermelha"},{nome:"uva", cor:"roxa"}]

console.log(frutas)
alert(frutas[0].nome)
*/

/*
var fruta = {
    nome:"maçã",
    cor:"Vermelha"
}

console.log(fruta)
alert(fruta.cor) */

/*
var lista = ["Maçã", "Pêra", "Laranja"];
console.log(lista);
console.log(lista[0]);
console.log(lista[1]);
console.log(lista[2]);
lista.push("uva");
console.log(lista);
console.log(lista[3]);
lista.pop();
console.log(lista);
console.log(lista.length);
lista.push("uva");
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" ")); */

/*
var nome = "Ramon Rodrigues Valeriano";
var nome2 = "Milla Gabriela B. D. Valeriano";
var idade = 31;
var idade2 = 30;
var frase = "Japão é o melhor time do mundo."
alert("Meu primeiro JS.");
alert("Bem vindo "+nome); 
// Primeiro Colaborador
alert(nome + " tem " + idade + " Anos");

alert(nome2 + " tem " + idade2+ " Anos");
// Somando as idades
alert(idade+idade2);

console.log(nome);
console.log(idade);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toLocaleUpperCase());
console.log(frase.toLowerCase());

alert(frase.replace("Japão", "Brasil"));
*/