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

let atual = 0;
let perguntaAtual;
let historiaFinal="";

function mostraPergunta(){
if(atual >= perguntas.length){
    mostrarResultado();
    return;
}
    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado
    caixaAlternativas.textContent = ""
    mostraAlternativas();
}
function mostraAlternativas() {
for(constAlternativa of perguntaAtual.alternativas){
    const botaoAlternativa=documentcreateElement("button");
    botaoAlternativa.textContent=alternativa;
    botaoAlternativas,addEventListener("click", () => repostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativa)
}
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal = afirmacao;
    atual++;
    mostraPergunta;
}

function mostrarResultado(){
    caixaPerguntas.textContent = "Esse texto é a introdução para juntar todas as afirmações das respostas..."
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent ="";
}

mostrapergunta();