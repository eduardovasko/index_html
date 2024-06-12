const caixaPrincipal=document.querySelector(".caixa-principal")
const caixaPerguntas=document.querySelector(".caixa-perguntas")
const caixaAlternativas=document.querySelector(".caixa-alternativas")
const caixaResultado=document.querySelector(".caixa-resultado")
const caixaResultado=document.querySelector(".caixa-resultado")

const perguntas = [
    {
        enunciado:"vou ser rico?",
        alternativas:[
            {
            texto: "Sim",
            afirmação: "afirmação",
            },
            {
            texto: "Sim, claro",
            afirmação:"afirmação",
            },
                ]
    },
    {
        enunciado:"complete: qual nome é indigena?",
        alternativas:[
            {
            texto: "De freitas",
            afirmação: "afirmação",
            },
            {
            texto: "Tuponi",
            afirmação:"afirmação",
            },
                ]
    },
    {
        enunciado:"cachorro ou gato?",
        alternativas:[
            {
            texto: "canino",
            afirmação:"afirmação",
            },
            {
            texto: "felino",
            afirmação:"afirmação",
            },
                ]
    },
    {
        enunciado:"os profs são bons",
        alternativas:[
            {
            texto: "sim",
            afirmação:"afirmação",
            },
            {
            texto: "não",
            afirmação:"afirmação",
            },
                ]
    },
    {
        enunciado:"existe pos vida?",
        alternativas:[
            {
            texto: "sim",
            afirmação:"afirmação",
            },
            {
            texto: "não",
            afirmação:"afirmação",
            },
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