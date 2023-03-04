import PromptSync from "prompt-sync"

const prompt = PromptSync()

const nome = prompt("Digite o seu nome: ")
console.log(`Olá, ${nome}!`)

const temp = Number(prompt("Digite a temperatura: "))

if(temp > 37){
    console.log("Febre")
}
else if (temp < 26){
    console.log("Morreu")
}
else{
    console.log("Tudo ok")
}


let salario = Number(prompt("Qual o seu salário?"))
let porcentagem = Number(prompt("Qual % de reajuste?"))
let resultado = salario + (salario * (porcentagem/100))

console.log(`O salário atualizado é ${resultado}`)



let anoNasc = Number(prompt("Quando você nasceu?"))
let idade = 2023-anoNasc

if (idade >= 18)
{
    console.log("Já pode tirar a CNH")
}
else
{
    console.log("Não pode tirar a CNH")
}
