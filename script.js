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
  // Permite letras, espaços e acentos, de 2 a 50 caracteres
  const regexNome = /^[A-Za-zÀ-ÿ\s]{2,50}$/;
  return regexNome.test(nome.trim());
}

function validarTurma(turma) {
  // Permite números de 1 a 99, opcional hífen, e letras de 'A' até 'E'
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
  const textoPergunta = perguntaAtual.pergunta;
  const alternativas = perguntaAtual.alternativas;

  const divPergunta = document.createElement('div');
  const h2Pergunta = document.createElement('h2');
  h2Pergunta.textContent = textoPergunta;
  divPergunta.appendChild(h2Pergunta);

  alternativas.forEach((alternativa, i) => {
    const divAlternativa = document.createElement('div');
    const inputRadio = document.createElement('input');
    inputRadio.type = 'radio';
    inputRadio.id = `alternativa-${i}`;
    inputRadio.name = 'alternativa';
    inputRadio.value = alternativa;

    inputRadio.addEventListener('click', () => {
      verificarResposta(inputRadio);
    });

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
  if (indicePerguntaAtual < perguntas.length) {
    exibirPergunta(indicePerguntaAtual);
    desabilitarBotaoAvancar();
  } else {
    finalizarQuiz();
  }
});

function desabilitarBotaoAvancar(){
  const botaoAvancar = document.getElementById('botaoAvancar');
  botaoAvancar.disabled = true;
  botaoAvancar.classList.remove('enabled');
  botaoAvancar.classList.add('disabled');
}

function habilitarBotaoAvancar(){
  const botaoAvancar = document.getElementById('botaoAvancar');
  botaoAvancar.disabled = false;
  botaoAvancar.classList.remove('disabled');
  botaoAvancar.classList.add('enabled');
}

function finalizarQuiz() {
  document.getElementById('quiz').style.display = 'none';
  const feedbackDiv = document.getElementById('resultado');
  const mensagemFinal = document.getElementById('mensagemFinal');
  
  mensagemFinal.textContent = `Você acertou ${pontuacao} de ${perguntas.length} perguntas.\n`;

  const listaRespostas = document.createElement('ul');
  respostasUsuario.forEach(resposta => {
    const itemLista = document.createElement('li');
    const spanPergunta = document.createElement('span');
    spanPergunta.textContent = `Pergunta: `;
    spanPergunta.classList.add(resposta.correta ? 'correcta' : 'incorrecta');
    
    itemLista.appendChild(spanPergunta);
    itemLista.appendChild(document.createTextNode(`${resposta.pergunta} - ${resposta.correta ? 'Correta' : 'Errada'}`));
    listaRespostas.appendChild(itemLista);
  });

  mensagemFinal.appendChild(listaRespostas);
  
  if (pontuacao / perguntas.length >= 0.7) {
    mensagemFinal.textContent += ` Parabéns, seu total de acertos é de ${(pontuacao / perguntas.length * 100).toFixed(0)}% do conhecimento aplicado.`;
    confetti({
      particleCount: 150,
      spread: 180,
      origin: { y: 0.6 }
    });
  }

  feedbackDiv.style.display = 'block';
}


document.getElementById('tentarNovamente').addEventListener('click', () => {
  indicePerguntaAtual = 0;
  pontuacao = 0;
  respostasUsuario = [];
  document.getElementById('resultado').style.display = 'none';
  document.getElementById('quiz').style.display = 'block';
  exibirPergunta(indicePerguntaAtual);
  desabilitarBotaoAvancar();
});

document.getElementById('reiniciar').addEventListener('click', () => {
  indicePerguntaAtual = 0;
  pontuacao = 0;
  respostasUsuario = [];
  document.getElementById('resultado').style.display = 'none';
  document.getElementById('inicio').style.display = 'block';
  desabilitarBotaoAvancar();
});
