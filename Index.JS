import PromptSync from "prompt-sync"
import chalk from 'chalck'

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


