const caixaPrincipal=document.querySelector(".caixa-principal")
const caixaPerguntas=document.querySelector(".caixa-perguntas")
const caixaAlternativas=document.querySelector(".caixa-alternativas")
const caixaResultado=document.querySelector(".caixa-resultado")
const caixaResultado=document.querySelector(".caixa-resultado")

const perguntas = [
    {
        enunciado:"vou ser rico?",
        alternativas:[
            "Sim",
            "Sim, claro",
                ]
    },
    {
        enunciado:"complete: qual nome é indigena?",
        alternativas:[
            "De freitas",
            "Tuponi",
                ]
    },
    {
        enunciado:"cachorro ou gato?",
        alternativas:[
            "canino",
            "felino",
                ]
    },
    {
        enunciado:"os profs são bons",
        alternativas:[
            "sim",
            "não",
                ]
    },
    {
        enunciado:"existe pos vida?",
        alternativas:[
            "sim",
            "não",
                ]
    },  
];

let atual =0;
let pergunta.Atual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado
    mostraAlternativas();
}
mostraPergunta();
function mostroAlternativas=document.createElemente("button");
for(constAlternativa of perguntaAtual.alternativas){
    const botaoAlternativa=documentcreateElement("button");
    botaoAlternativa.textContent=alternativa;
    caixaAlternativas.appendChild(botaoAlternativa)
}