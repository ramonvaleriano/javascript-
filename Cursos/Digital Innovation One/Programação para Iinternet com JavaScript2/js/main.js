function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar</b>"
}

function redirecionar(){
    window.open("https://www.linkedin.com/in/ramon-r-valeriano-/")
    //window.location.href = "https://www.linkedin.com/in/ramon-r-valeriano-/"
    
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "<b>Obrigado por passar o mouse aqui.</b>"
    //alert("Trocar Texto.")
    elemento.innerHTML = "<b>Obrigado por passar o mouse aqui.</b>"
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "<b>Passe o mouse aqui.</b>"
    elemento.innerHTML = "<b>Passe o mouse aqui.</b>"
}

function load(){
    alert("Página carregada!")
}

function funcaoChange(elemento){
    console.log(elemento.value)

}

/*
alert("Olá, testeando o Javascript")

function soma(n1, n2){
    return n1+n2
}
*/
/*
validar = 0

function validaIdade(idade){
    if(idade>=18){
        validar = true
    }
    else{
        validar = false
    }
    return validar
}

var idade = prompt("Qual a sua idade: ")
validaIdade(idade)
console.log(validar)
*/