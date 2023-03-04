import PromptSync from "prompt-sync"

const prompt = PromptSync()

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
