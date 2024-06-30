const perguntas = [
    { pergunta: "Qual é o papel dos materiais concretos no desenvolvimento do raciocínio lógico-matemático das crianças?", 
        alternativas: [" Estimulam a memorização de fórmulas matemáticas.", "Promovem a interação física e sensorial com os conceitos matemáticos.", "Reduzem o interesse das crianças nas aulas de matemática.", "Limitam a compreensão dos conceitos abstratos."], respostaCorreta: 1 },
    { pergunta: "Como os materiais concretos ajudam na construção de esquemas conceituais nas crianças?", 
        alternativas: ["Facilitam a memorização de definições teóricas.", "Permitem que as crianças criem representações mentais abstratas.", "Proporcionam experiências tangíveis que apoiam a compreensão dos conceitos.", " Dificultam a aplicação prática dos conceitos aprendidos."], respostaCorreta: 2 },
    { pergunta: "Por que é importante utilizar materiais concretos para contextualizar o conteúdo de Matemática na educação infantil?", 
        alternativas: ["Porque simplificam a compreensão dos conceitos matemáticos.", "Porque são mais fáceis de armazenar e organizar.", "Porque tornam as aulas de matemática menos dinâmicas.", "Porque não têm impacto no interesse dos alunos pelo assunto."], respostaCorreta: 0 },
    { pergunta: "Quais são os benefícios de utilizar materiais concretos para facilitar a compreensão dos conceitos matemáticos?", 
        alternativas: ["Desenvolvem apenas habilidades motoras das crianças.", "Permitem que as crianças visualizem e manipulem os conceitos matemáticos.", "Limitam o desenvolvimento do pensamento crítico.", "Não promovem um aprendizado significativo."], respostaCorreta: 1 },
    { pergunta: "Como os materiais concretos despertam o interesse dos alunos durante as aulas?", 
        alternativas: ["Aumentando a dificuldade das atividades matemáticas.", "Proporcionando experiências sensoriais e interativas.", "Ignorando as preferências individuais dos alunos.", "Mantendo o conteúdo estritamente teórico."], respostaCorreta: 1 },
    { pergunta: "De que maneira os materiais concretos tornam as aulas mais dinâmicas e atraentes para as crianças?", 
        alternativas: ["Introduzindo apenas atividades repetitivas.", " Permitindo a exploração ativa dos conceitos matemáticos.", "Focando exclusivamente em métodos de ensino tradicionais.", "Minimizando a interação entre os alunos."], respostaCorreta: 1 },
    { pergunta: "Quais critérios devem ser considerados ao escolher materiais concretos adequados para atividades educacionais?", 
        alternativas: ["Facilidade de armazenamento e custo baixo.", "Segurança, durabilidade e relevância para o conteúdo ensinado.", "Complexidade excessiva e dificuldade de manipulação.", "Falta de suporte aos objetivos pedagógicos."], respostaCorreta: 1 },
    { pergunta: "Como os educadores podem integrar materiais concretos às atividades do dia a dia na educação infantil?", 
        alternativas: ["Limitando o uso dos materiais concretos para atividades especiais.", " Incorporando-os de forma planejada e estruturada nas lições diárias.", "Desconsiderando as preferências individuais dos alunos.", "Utilizando apenas métodos tradicionais de ensino."], respostaCorreta: 1 },
    { pergunta: "Quais são alguns exemplos práticos de atividades que podem ser realizadas com materiais concretos para ensinar conceitos matemáticos básicos?", 
        alternativas: ["Memorização de fórmulas matemáticas.", "Representação gráfica de conceitos abstratos.", "Manipulação de objetos para contar e classificar.", "Discussão exclusiva de teorias matemáticas complexas."], respostaCorreta: 2 },
    { pergunta: "Como a interação física com materiais concretos pode promover o aprendizado mais significativo em comparação com métodos puramente teóricos?", 
        alternativas: ["Limitando o desenvolvimento de habilidades práticas.", "Apoiando a compreensão dos conceitos através da experiência prática.", "Reduzindo a motivação dos alunos para aprender matemática.", "Aumentando a complexidade das atividades educacionais."], respostaCorreta: 1 },
  ];
  
  let indicePerguntaAtual = 0;
  let pontuacao = 0;
  let nome = '';
  
  function iniciarQuiz() {
    nome = document.getElementById('nome').value;
    const turma = document.getElementById('turma').value;
  
    if (nome && turma) {
      document.getElementById('inicio').style.display = 'none';
      document.getElementById('quiz').style.display = 'block';
  
      exibirPergunta(indicePerguntaAtual);
    } else {
      alert('Por favor, preencha todos os campos!');
    }
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
      inputRadio.value = i;
  
      const labelAlternativa = document.createElement('label');
      labelAlternativa.textContent = alternativas[i];
      labelAlternativa.htmlFor = `alternativa-${i}`;
  
      divAlternativa.appendChild(inputRadio);
      divAlternativa.appendChild(labelAlternativa);
      divPergunta.appendChild(divAlternativa);
    }
  
    divPerguntas.appendChild(divPergunta);
  
    document.querySelectorAll('input[name="alternativa"]').forEach(radio => {
      radio.addEventListener('click', verificarResposta);
    });
  }
  
  function mostrarFeedback(mensagem, isCorrect) {
    const feedbackDiv = document.getElementById('feedback');
    if (feedbackDiv) {
      feedbackDiv.innerHTML = mensagem;
      feedbackDiv.className = isCorrect ? 'feedback-correct' : 'feedback-wrong';
    } else {
      console.error('Elemento feedback não encontrado.');
    }
  }
  
  function verificarResposta() {
    const inputSelecionado = document.querySelector('input[name="alternativa"]:checked');
    if (!inputSelecionado) return; // Se nenhuma alternativa estiver selecionada, retorna
  
    const indiceAlternativaSelecionada = parseInt(inputSelecionado.value, 10);
    if (isNaN(indiceAlternativaSelecionada)) return; // Se a conversão falhar, retorna
  
    const respostaCorreta = perguntas[indicePerguntaAtual].respostaCorreta;
  
    if (indiceAlternativaSelecionada === respostaCorreta) {
      pontuacao++;
      mostrarFeedback('Resposta Certa!', true);
    } else {
      mostrarFeedback('Resposta Errada!', false);
    }
  
    indicePerguntaAtual++;
    if (indicePerguntaAtual < perguntas.length) {
      exibirPergunta(indicePerguntaAtual); // Passar para próxima pergunta
    } else {
      finalizarQuiz();
    }
  }
  
  // Função para finalizar o quiz
  function finalizarQuiz() {
    const feedback = document.getElementById('feedback');
    if (feedback) {
      feedback.innerHTML = 'Parabéns ' + nome + '! Você concluiu o quiz com: ' + pontuacao + ' pontos.';
      feedback.className = ''; // Remove classes de feedback anteriores
      feedback.style.backgroundColor = ''; // Remove cor de fundo anterior
    } else {
      console.error('Elemento feedback não encontrado.');
    }
    document.getElementById('perguntas').style.display = 'none';
  }
  