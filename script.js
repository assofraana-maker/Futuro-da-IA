const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A Inteligência Artificial vai melhorar a vida das pessoas no futuro?",
        alternativas: [
            {
                texto: "Sim, já que a Inteligência Artificial poderá facilitar diversas tarefas do cotidiano, auxiliar na medicina, melhorar a educação e contribuir para o desenvolvimento de novas tecnologias."",
                afirmacao: "A IA possui um grande potencial para transformar positivamente a sociedade, desde que seja utilizada de maneira ética, responsável e voltada para o benefício da população."
            },
            {
                texto: "Não necessariamente, pois o avanço da Inteligência Artificial também pode causar problemas como desemprego, dependência tecnológica, disseminação de informações falsas e perda de privacidade.",
                afirmacao: "Apesar de seus benefícios, a IA pode trazer consequências negativas para a sociedade caso seu desenvolvimento e sua utilização não sejam acompanhados por regras e responsabilidade."
            }
        ]
    },
    {
        enunciado: "A Inteligência Artificial poderá substituir os seres humanos em muitos empregos no futuro?",
        alternativas: [
            {
                texto: "Sim, principalmente em trabalhos repetitivos ou perigosos, permitindo que os seres humanos tenham mais tempo para atividades criativas, estratégicas e que exigem habilidades sociais.",
                afirmacao: "A substituição de determinadas tarefas pela IA pode representar uma evolução no mercado de trabalho, fazendo com que as pessoas se concentrem em funções que dependem mais da criatividade e do pensamento crítico."
            },
            {
                texto: "Sim, porém isso pode gerar consequências negativas, já que muitas pessoas poderão perder seus empregos caso não tenham acesso a novas oportunidades de capacitação profissional.",
                afirmacao: "O avanço da IA no mercado de trabalho pode aumentar a desigualdade social se não houver investimentos em educação e qualificação para preparar os trabalhadores para as novas profissões."
            }
        ]
    },
    {
        enunciado: "A Inteligência Artificial poderá tornar o futuro melhor para a humanidade?",
        alternativas: [
            {
                texto: "Sim, pois a IA poderá contribuir para descobertas científicas, tratamentos médicos, preservação do meio ambiente e desenvolvimento de soluções para diversos problemas da sociedade.",
                afirmacao: "Quando utilizada de forma consciente e responsável, a Inteligência Artificial pode se tornar uma importante ferramenta para o progresso da humanidade e para a construção de um futuro melhor."
            },
            {
                texto: "Não necessariamente, pois a IA também pode ser utilizada para fins prejudiciais, como manipulação de informações, vigilância excessiva, golpes virtuais e desenvolvimento de tecnologias perigosas.",
                afirmacao: "O futuro proporcionado pela Inteligência Artificial dependerá da maneira como essa tecnologia será utilizada, sendo necessário estabelecer limites para evitar que seus avanços causem danos à sociedade."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sobre a leitura...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
