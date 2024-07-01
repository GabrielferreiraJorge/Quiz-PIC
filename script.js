const perguntas = [
  {
    pergunta: "Qual é o papel dos materiais concretos no desenvolvimento do raciocínio lógico-matemático das crianças?",
    alternativas: [
      "Estimulam a memorização de fórmulas matemáticas.",
      "Promovem a interação física e sensorial com os conceitos matemáticos.",
      "Reduzem o interesse das crianças nas aulas de matemática.",
      "Limitam a compreensão dos conceitos abstratos."
    ],
    respostaCorreta: "Promovem a interação física e sensorial com os conceitos matemáticos."
  },
  {
    pergunta: "Como os materiais concretos ajudam na construção de esquemas conceituais nas crianças?",
    alternativas: [
      "Facilitam a memorização de definições teóricas.",
      "Permitem que as crianças criem representações mentais abstratas.",
      "Proporcionam experiências tangíveis que apoiam a compreensão dos conceitos.",
      "Dificultam a aplicação prática dos conceitos aprendidos."
    ],
    respostaCorreta: "Proporcionam experiências tangíveis que apoiam a compreensão dos conceitos."
  },
  {
    pergunta: "Por que é importante utilizar materiais concretos para contextualizar o conteúdo de Matemática na educação infantil?",
    alternativas: [
      "Porque simplificam a compreensão dos conceitos matemáticos.",
      "Porque são mais fáceis de armazenar e organizar.",
      "Porque tornam as aulas de matemática menos dinâmicas.",
      "Porque não têm impacto no interesse dos alunos pelo assunto."
    ],
    respostaCorreta: "Porque simplificam a compreensão dos conceitos matemáticos."
  },
  {
    pergunta: "Quais são os benefícios de utilizar materiais concretos para facilitar a compreensão dos conceitos matemáticos?",
    alternativas: [
      "Desenvolvem apenas habilidades motoras das crianças.",
      "Permitem que as crianças visualizem e manipulem os conceitos matemáticos.",
      "Limitam o desenvolvimento do pensamento crítico.",
      "Não promovem um aprendizado significativo."
    ],
    respostaCorreta: "Permitem que as crianças visualizem e manipulem os conceitos matemáticos."
  },
  {
    pergunta: "Como os materiais concretos despertam o interesse dos alunos durante as aulas?",
    alternativas: [
      "Aumentando a dificuldade das atividades matemáticas.",
      "Proporcionando experiências sensoriais e interativas.",
      "Ignorando as preferências individuais dos alunos.",
      "Mantendo o conteúdo estritamente teórico."
    ],
    respostaCorreta: "Proporcionando experiências sensoriais e interativas."
  },
  {
    pergunta: "De que maneira os materiais concretos tornam as aulas mais dinâmicas e atraentes para as crianças?",
    alternativas: [
      "Introduzindo apenas atividades repetitivas.",
      "Permitindo a exploração ativa dos conceitos matemáticos.",
      "Focando exclusivamente em métodos de ensino tradicionais.",
      "Minimizando a interação entre os alunos."
    ],
    respostaCorreta: "Permitindo a exploração ativa dos conceitos matemáticos."
  },
  {
    pergunta: "Quais critérios devem ser considerados ao escolher materiais concretos adequados para atividades educacionais?",
    alternativas: [
      "Facilidade de armazenamento e custo baixo.",
      "Segurança, durabilidade e relevância para o conteúdo ensinado.",
      "Complexidade excessiva e dificuldade de manipulação.",
      "Falta de suporte aos objetivos pedagógicos."
    ],
    respostaCorreta: "Segurança, durabilidade e relevância para o conteúdo ensinado."
  },
  {
    pergunta: "Como os educadores podem integrar materiais concretos às atividades do dia a dia na educação infantil?",
    alternativas: [
      "Limitando o uso dos materiais concretos para atividades especiais.",
      "Incorporando-os de forma planejada e estruturada nas lições diárias.",
      "Desconsiderando as preferências individuais dos alunos.",
      "Utilizando apenas métodos tradicionais de ensino."
    ],
    respostaCorreta: "Incorporando-os de forma planejada e estruturada nas lições diárias."
  },
  {
    pergunta: "Quais são alguns exemplos práticos de atividades que podem ser realizadas com materiais concretos para ensinar conceitos matemáticos básicos?",
    alternativas: [
      "Memorização de fórmulas matemáticas.",
      "Representação gráfica de conceitos abstratos.",
      "Manipulação de objetos para contar e classificar.",
      "Discussão exclusiva de teorias matemáticas complexas."
    ],
    respostaCorreta: "Manipulação de objetos para contar e classificar."
  },
  {
    pergunta: "Como a interação física com materiais concretos pode promover o aprendizado mais significativo em comparação com métodos puramente teóricos?",
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
  const regexNome = /^[A-Za-zÀ-ÿ\s]{2,50}$/; // Permite letras, espaços e acentos, de 2 a 50 caracteres
  return regexNome.test(nome);
}

function validarTurma(turma) {
  const regexTurma = /^[A-Za-z0-9]{1,4}$/; // Permite letras e números, de 1 a 4 caracteres
  return regexTurma.test(turma);
}

function exibirPergunta(indicePergunta) {
  if (indicePergunta >= perguntas.length) {
    finalizarQuiz();
    return;
  }

  const divPerguntas = document.getElementById('perguntas');
  divPerguntas.innerHTML = ''; // Limpa as perguntas anteriores

  const perguntaAtual = perguntas[indicePergunta];
  const textoPergunta = perguntaAtual.pergunta;
  const alternativas = perguntaAtual.alternativas;

  const divPergunta = document.createElement('div');
  const h2Pergunta = document.createElement('h2');
  h2Pergunta.textContent = textoPergunta;
  divPergunta.appendChild(h2Pergunta);

  for (let i = 0; i < alternativas.length; i++) {
    const divAlternativa = document.createElement('div');
    const inputRadio = document.createElement('input');
    inputRadio.type = 'radio';
    inputRadio.id = `alternativa-${i}`;
    inputRadio.name = 'alternativa';
    inputRadio.value = alternativas[i];

    // Adicionando o event listener ao inputRadio
    inputRadio.addEventListener('click', () => {
      verificarResposta(inputRadio);
    });

    const labelAlternativa = document.createElement('label');
    labelAlternativa.textContent = alternativas[i];
    labelAlternativa.htmlFor = `alternativa-${i}`;

    divAlternativa.appendChild(inputRadio);
    divAlternativa.appendChild(labelAlternativa);
    divPergunta.appendChild(divAlternativa);
  }

  divPerguntas.appendChild(divPergunta);
}

  const divPerguntas = document.getElementById('perguntas');
  divPerguntas.innerHTML = '';

  const perguntaAtual = perguntas[indicePergunta];
  const textoPergunta = perguntaAtual.pergunta;
  const alternativas = perguntaAtual.alternativas;

  const divPergunta = document.createElement('div');
  const h2Pergunta = document.createElement('h2');
  h2Pergunta.textContent = textoPergunta;
  divPergunta.appendChild(h2Pergunta);

  for (let i = 0; i < alternativas.length; i++) {
    const divAlternativa = document.createElement('div');
    const inputRadio = document.createElement('input');
    inputRadio.type = 'radio';
    inputRadio.id = `alternativa-${i}`;
    inputRadio.name = 'alternativa';
    inputRadio.value = alternativas[i]; // Valor da alternativa

    const labelAlternativa = document.createElement('label');
    labelAlternativa.textContent = alternativas[i];
    labelAlternativa.htmlFor = `alternativa-${i}`;

    divAlternativa.appendChild(inputRadio);
    divAlternativa.appendChild(labelAlternativa);
    divPergunta.appendChild(divAlternativa);
  }

  divPerguntas.appendChild(divPergunta);

  document.getElementById('perguntas').addEventListener('click', (event) => {
    if (event.target.tagName === 'INPUT' && event.target.type === 'radio') {
      verificarResposta(event.target);
    }
  });


function mostrarFeedback(mensagem, isCorrect) {
  const feedbackDiv = document.getElementById('feedback');
  feedbackDiv.textContent = mensagem;
  feedbackDiv.className = isCorrect ? 'feedback-correct' : 'feedback-wrong';
}

function verificarResposta(inputSelecionado) {
  const respostaSelecionada = inputSelecionado.value;
  const respostaCorreta = perguntas[indicePerguntaAtual].respostaCorreta;

  if (respostaSelecionada === respostaCorreta) {
    pontuacao++;
    mostrarFeedback('Resposta Certa!', true);
  } else {
    mostrarFeedback('Resposta Errada!', false);
  }

  indicePerguntaAtual++;
  if (indicePerguntaAtual < perguntas.length) {
    exibirPergunta(indicePerguntaAtual);
  } else {
    finalizarQuiz();
  }
}

function finalizarQuiz() {
  const feedbackDiv = document.getElementById('feedback');
  feedbackDiv.textContent = `Parabéns ${nome}! Você concluiu o quiz com: ${pontuacao} pontos.`;
  feedbackDiv.className = '';
  document.getElementById('perguntas').style.display = 'none';
}
