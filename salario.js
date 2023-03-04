import PromptSync from "prompt-sync"

const prompt = PromptSync()

let salario = Number(prompt("Qual o seu salário?"))
let porcentagem = Number(prompt("Qual % de reajuste?"))
let resultado = salario + (salario * (porcentagem/100))

console.log(`O salário atualizado é ${resultado}`)