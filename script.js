const perguntas = [
  {
    pergunta: "1. Qual é o papel dos materiais concretos no desenvolvimento do raciocínio lógico-matemático das crianças?",
    alternativas: [
      "Estimulam a memorização de fórmulas matemáticas.",
      "Promovem a interação física e sensorial com os conceitos matemáticos.",
      "Reduzem o interesse das crianças nas aulas de matemática.",
      "Limitam a compreensão dos conceitos abstratos."
    ],
    respostaCorreta: "Promovem a interação física e sensorial com os conceitos matemáticos."
  },
  {
    pergunta: "2. Como os materiais concretos ajudam na construção de esquemas conceituais nas crianças?",
    alternativas: [
      "Facilitam a memorização de definições teóricas.",
      "Permitem que as crianças criem representações mentais abstratas.",
      "Proporcionam experiências tangíveis que apoiam a compreensão dos conceitos.",
      "Dificultam a aplicação prática dos conceitos aprendidos."
    ],
    respostaCorreta: "Proporcionam experiências tangíveis que apoiam a compreensão dos conceitos."
  },
  {
    pergunta: "3. Por que é importante utilizar materiais concretos para contextualizar o conteúdo de Matemática na educação infantil?",
    alternativas: [
      "Porque simplificam a compreensão dos conceitos matemáticos.",
      "Porque são mais fáceis de armazenar e organizar.",
      "Porque tornam as aulas de matemática menos dinâmicas.",
      "Porque não têm impacto no interesse dos alunos pelo assunto."
    ],
    respostaCorreta: "Porque simplificam a compreensão dos conceitos matemáticos."
  },
  {
    pergunta: "4. Quais são os benefícios de utilizar materiais concretos para facilitar a compreensão dos conceitos matemáticos?",
    alternativas: [
      "Desenvolvem apenas habilidades motoras das crianças.",
      "Permitem que as crianças visualizem e manipulem os conceitos matemáticos.",
      "Limitam o desenvolvimento do pensamento crítico.",
      "Não promovem um aprendizado significativo."
    ],
    respostaCorreta: "Permitem que as crianças visualizem e manipulem os conceitos matemáticos."
  },
  {
    pergunta: "5. Como os materiais concretos despertam o interesse dos alunos durante as aulas?",
    alternativas: [
      "Aumentando a dificuldade das atividades matemáticas.",
      "Proporcionando experiências sensoriais e interativas.",
      "Ignorando as preferências individuais dos alunos.",
      "Mantendo o conteúdo estritamente teórico."
    ],
    respostaCorreta: "Proporcionando experiências sensoriais e interativas."
  },
  {
    pergunta: "6. De que maneira os materiais concretos tornam as aulas mais dinâmicas e atraentes para as crianças?",
    alternativas: [
      "Introduzindo apenas atividades repetitivas.",
      "Permitindo a exploração ativa dos conceitos matemáticos.",
      "Focando exclusivamente em métodos de ensino tradicionais.",
      "Minimizando a interação entre os alunos."
    ],
    respostaCorreta: "Permitindo a exploração ativa dos conceitos matemáticos."
  },
  {
    pergunta: "7. Quais critérios devem ser considerados ao escolher materiais concretos adequados para atividades educacionais?",
    alternativas: [
      "Facilidade de armazenamento e custo baixo.",
      "Segurança, durabilidade e relevância para o conteúdo ensinado.",
      "Complexidade excessiva e dificuldade de manipulação.",
      "Falta de suporte aos objetivos pedagógicos."
    ],
    respostaCorreta: "Segurança, durabilidade e relevância para o conteúdo ensinado."
  },
  {
    pergunta: "8. Como os educadores podem integrar materiais concretos às atividades do dia a dia na educação infantil?",
    alternativas: [
      "Limitando o uso dos materiais concretos para atividades especiais.",
      "Incorporando-os de forma planejada e estruturada nas lições diárias.",
      "Desconsiderando as preferências individuais dos alunos.",
      "Utilizando apenas métodos tradicionais de ensino."
    ],
    respostaCorreta: "Incorporando-os de forma planejada e estruturada nas lições diárias."
  },
  {
    pergunta: "9. Quais são alguns exemplos práticos de atividades que podem ser realizadas com materiais concretos para ensinar conceitos matemáticos básicos?",
    alternativas: [
      "Memorização de fórmulas matemáticas.",
      "Representação gráfica de conceitos abstratos.",
      "Manipulação de objetos para contar e classificar.",
      "Discussão exclusiva de teorias matemáticas complexas."
    ],
    respostaCorreta: "Manipulação de objetos para contar e classificar."
  },
  {
    pergunta: "10. Como a interação física com materiais concretos pode promover o aprendizado mais significativo em comparação com métodos puramente teóricos?",
    alternativas: [
      "Limitando o desenvolvimento de habilidades práticas.",
      "Apoiando a compreensão dos conceitos através da experiência prática.",
      "Reduzindo a motivação dos alunos para aprender matemática.",
      "Aumentando a complexidade das atividades educacionais."
    ],
    respostaCorreta: "Apoiando a compreensão dos conceitos através da experiência prática."
  }
];

let indicePerguntaAtual = 0;
let pontuacao = 0;
let nome = '';
let respostasUsuario = [];

function iniciarQuiz() {
  const nomeInput = document.getElementById('nome');
  const turmaInput = document.getElementById('turma');

  const nomeValido = validarNome(nomeInput.value);
  const turmaValida = validarTurma(turmaInput.value);

  if (nomeValido && turmaValida) {
    nome = nomeInput.value;
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    exibirPergunta(indicePerguntaAtual);
  } else {
    alert('Por favor, preencha os campos corretamente!');
  }
}

function validarNome(nome) {
  return /^[A-Za-zÀ-ÿ\s]{2,50}$/.test(nome.trim());
}

function validarTurma(turma) {
  return /^(0?[1-9]|[1-9][0-9])[-]?[A-Ea-e]$/.test(turma.trim());
}

function exibirPergunta(indicePergunta) {
  if (indicePergunta >= perguntas.length) {
    finalizarQuiz();
    return;
  }

  const divPerguntas = document.getElementById('perguntas');
  divPerguntas.innerHTML = '';

  const perguntaAtual = perguntas[indicePergunta];
  const divPergunta = document.createElement('div');
  const h2Pergunta = document.createElement('h2');
  h2Pergunta.textContent = perguntaAtual.pergunta;
  divPergunta.appendChild(h2Pergunta);

  perguntaAtual.alternativas.forEach((alternativa, i) => {
    const divAlternativa = document.createElement('div');
    const inputRadio = document.createElement('input');
    inputRadio.type = 'radio';
    inputRadio.id = `alternativa-${i}`;
    inputRadio.name = 'alternativa';
    inputRadio.value = alternativa;
    inputRadio.addEventListener('click', () => verificarResposta(inputRadio));

    const labelAlternativa = document.createElement('label');
    labelAlternativa.textContent = alternativa;
    labelAlternativa.htmlFor = `alternativa-${i}`;

    divAlternativa.appendChild(inputRadio);
    divAlternativa.appendChild(labelAlternativa);
    divPergunta.appendChild(divAlternativa);
  });

  divPerguntas.appendChild(divPergunta);
  desabilitarBotaoAvancar();
}

function verificarResposta(inputSelecionado) {
  const respostaSelecionada = inputSelecionado.value;
  const respostaCorreta = perguntas[indicePerguntaAtual].respostaCorreta;

  const respostaCorretaOuNao = respostaSelecionada === respostaCorreta;
  if (respostaCorretaOuNao) {
    pontuacao++;
  }

  respostasUsuario.push({
    pergunta: perguntas[indicePerguntaAtual].pergunta,
    resposta: respostaSelecionada,
    correta: respostaCorretaOuNao
  });

  habilitarBotaoAvancar();
}

document.getElementById('botaoAvancar').addEventListener('click', () => {
  indicePerguntaAtual++;
  exibirPergunta(indicePerguntaAtual);
  desabilitarBotaoAvancar();
});

document.getElementById('reiniciar').addEventListener('click', () => {
  location.reload();
});

document.getElementById('tentarNovamente').addEventListener('click', () => {
  pontuacao = 0;
  indicePerguntaAtual = 0;
  respostasUsuario = [];
  document.getElementById('resultado').style.display = 'none';
  document.getElementById('quiz').style.display = 'block';
  exibirPergunta(indicePerguntaAtual);
});

function habilitarBotaoAvancar() {
  const botaoAvancar = document.getElementById('botaoAvancar');
  botaoAvancar.classList.remove('disabled');
  botaoAvancar.disabled = false;
}

function desabilitarBotaoAvancar() {
  const botaoAvancar = document.getElementById('botaoAvancar');
  botaoAvancar.classList.add('disabled');
  botaoAvancar.disabled = true;
}

function finalizarQuiz() {
  document.getElementById('quiz').style.display = 'none';
  document.getElementById('resultado').style.display = 'block';

  const mensagemFinal = document.getElementById('mensagemFinal');
  const resultadoHTML = `Parabéns ${nome}, você acertou ${pontuacao} de ${perguntas.length} perguntas.`;
  mensagemFinal.textContent = resultadoHTML;

  const divRespostas = document.getElementById('respostas');
  divRespostas.innerHTML = '';

  respostasUsuario.forEach(resposta => {
    const divResposta = document.createElement('div');
    const pPergunta = document.createElement('p');
    pPergunta.textContent = resposta.pergunta;
    divResposta.appendChild(pPergunta);

    const pResposta = document.createElement('p');
    pResposta.textContent = `Resposta: ${resposta.resposta}`;
    pResposta.classList.add(resposta.correta ? 'correcta' : 'incorrecta');
    divResposta.appendChild(pResposta);

    divRespostas.appendChild(divResposta);
  });

  const confettiDuration = 15 * 1000;
  const confettiEnd = Date.now() + confettiDuration;
  const confettiColors = ['#ff00ff', '#00ff00', '#800080'];
  
  const confettiInterval = setInterval(function() {
    const timeLeft = confettiEnd - Date.now();
  
    if (timeLeft <= 0) {
      return clearInterval(confettiInterval);
    }
  
    const particleCount = 50 * (timeLeft / confettiDuration);
    confetti({
      particleCount,
      origin: { x: Math.random(), y: Math.random() - 0.2 },
      colors: confettiColors
    });
  }, 250);
}
