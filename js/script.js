
  /* =====================================================================
     SCRIPT PRINCIPAL — todas as interações da página
     Comentários em português de Portugal, organizados por funcionalidade.
     ===================================================================== */

  // ----- 1. Alternância entre tema claro e escuro -----
  const elementoRaiz = document.documentElement;
  const botaoTema = document.getElementById('botaoTema');

  // Respeita a preferência do sistema operativo na primeira visita
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    elementoRaiz.setAttribute('data-theme', 'dark');
  }
  botaoTema.addEventListener('click', () => {
    const temaAtual = elementoRaiz.getAttribute('data-theme');
    elementoRaiz.setAttribute('data-theme', temaAtual === 'dark' ? 'light' : 'dark');
  });

  // ----- 2. Sombra/fundo do cabeçalho ao fazer scroll -----
  const cabecalho = document.getElementById('cabecalho');
  window.addEventListener('scroll', () => {
    cabecalho.classList.toggle('scroll-ativo', window.scrollY > 40);
  });

  // ----- 3. Menu hambúrguer (navegação em dispositivos móveis) -----
  const botaoHamburguer = document.getElementById('botaoHamburguer');
  const menuMovel = document.getElementById('menuMovel');
  const sobreposicaoMovel = document.getElementById('sobreposicaoMovel');
  const fecharMovel = document.getElementById('fecharMovel');

  const abrirMenuMovel = () => { menuMovel.classList.add('aberto'); sobreposicaoMovel.classList.add('aberto'); };
  const fecharMenuMovel = () => { menuMovel.classList.remove('aberto'); sobreposicaoMovel.classList.remove('aberto'); };

  botaoHamburguer.addEventListener('click', abrirMenuMovel);
  fecharMovel.addEventListener('click', fecharMenuMovel);
  sobreposicaoMovel.addEventListener('click', fecharMenuMovel);
  document.querySelectorAll('.ligacao-movel').forEach(ligacao => ligacao.addEventListener('click', fecharMenuMovel));

  // ----- 4. Efeito de digitação (typing effect) no título do Hero -----
  const frasesHero = [
    'Técnico de Informática',
    'Formador de Informática',
    'Programador Web'
  ];
  const elementoTexto = document.getElementById('texto-digitado');
  let indiceFrase = 0;
  let indiceLetra = 0;
  let apagando = false;

  function efeitoDigitacao(){
    const fraseAtual = frasesHero[indiceFrase];

    if (!apagando) {
      // A escrever a frase, letra a letra
      elementoTexto.textContent = fraseAtual.substring(0, indiceLetra + 1);
      indiceLetra++;
      if (indiceLetra === fraseAtual.length) {
        apagando = true;
        setTimeout(efeitoDigitacao, 1600); // pausa antes de começar a apagar
        return;
      }
    } else {
      // A apagar a frase, letra a letra
      elementoTexto.textContent = fraseAtual.substring(0, indiceLetra - 1);
      indiceLetra--;
      if (indiceLetra === 0) {
        apagando = false;
        indiceFrase = (indiceFrase + 1) % frasesHero.length;
      }
    }
    const velocidade = apagando ? 45 : 85;
    setTimeout(efeitoDigitacao, velocidade);
  }
  efeitoDigitacao();

  // ----- 5. Animação "reveal" ao aparecer na janela de visualização -----
  const observadorReveal = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visivel');
        observadorReveal.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(elemento => observadorReveal.observe(elemento));

  // ----- 6. Animação das barras de competências -----
  const observadorBarras = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        entrada.target.style.width = entrada.target.dataset.largura + '%';
        observadorBarras.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('.barra-preenchimento').forEach(barra => observadorBarras.observe(barra));

  // ----- 7. Filtro dos cartões de projetos/serviços -----
  const botoesFiltro = document.querySelectorAll('.botao-filtro');
  const cartoesProjetos = document.querySelectorAll('.projeto-cartao');

  botoesFiltro.forEach(botao => {
    botao.addEventListener('click', () => {
      // Atualiza o estado visual do botão ativo
      botoesFiltro.forEach(b => b.classList.remove('ativo'));
      botao.classList.add('ativo');

      const categoriaEscolhida = botao.dataset.categoria;

      cartoesProjetos.forEach(cartao => {
        const mostrar = categoriaEscolhida === 'todos' || cartao.dataset.categoria === categoriaEscolhida;
        if (mostrar) {
          cartao.style.display = '';
          // pequena animação de entrada ao filtrar
          cartao.style.animation = 'none';
          requestAnimationFrame(() => { cartao.style.animation = 'apareceFiltro .5s ease'; });
        } else {
          cartao.style.display = 'none';
        }
      });
    });
  });

  // Keyframe da animação de entrada dos cartões filtrados (injetado via JS)
  const folhaEstilosFiltro = document.createElement('style');
  folhaEstilosFiltro.textContent = `@keyframes apareceFiltro{ from{ opacity:0; transform:translateY(10px);} to{ opacity:1; transform:translateY(0);} }`;
  document.head.appendChild(folhaEstilosFiltro);

  // ----- 8. Validação simples do formulário de contacto (apenas frontend) -----
  const formularioContacto = document.getElementById('formularioContacto');
  const mensagemSucesso = document.getElementById('mensagemSucesso');

  function validarCampo(idCampo, valor, mensagem){
    const campo = document.getElementById(idCampo);
    const erro = campo.querySelector('.mensagem-erro');
    if (!valor) {
      campo.classList.add('invalido');
      erro.textContent = mensagem;
      return false;
    }
    campo.classList.remove('invalido');
    erro.textContent = '';
    return true;
  }

  formularioContacto.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const assunto = document.getElementById('assunto').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let valido = true;
    valido = validarCampo('campoNome', nome, 'Por favor, indique o seu nome.') && valido;
    valido = validarCampo('campoEmail', email && regexEmail.test(email), email ? '' : 'Por favor, indique um e-mail válido.') && valido;
    if (email && !regexEmail.test(email)) {
      document.getElementById('campoEmail').classList.add('invalido');
      document.querySelector('#campoEmail .mensagem-erro').textContent = 'Formato de e-mail inválido.';
      valido = false;
    }
    valido = validarCampo('campoAssunto', assunto, 'Por favor, indique o assunto.') && valido;
    valido = validarCampo('campoMensagem', mensagem, 'Por favor, escreva a sua mensagem.') && valido;

    if (valido) {
      mensagemSucesso.style.display = 'block';
      formularioContacto.reset();
      setTimeout(() => { mensagemSucesso.style.display = 'none'; }, 5000);
    } else {
      mensagemSucesso.style.display = 'none';
    }
  });

  // ----- 9. Botão "Voltar ao topo" -----
  const botaoTopo = document.getElementById('botao-topo');
  window.addEventListener('scroll', () => {
    botaoTopo.classList.toggle('visivel', window.scrollY > 500);
  });
  botaoTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ----- 10. Ano atual no rodapé (atualizado automaticamente) -----
  document.getElementById('ano-atual').textContent = new Date().getFullYear();
