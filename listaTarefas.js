(() => {
  //capturar o valor do formulario...
  //ARROW FUNCTION :
  const criarTarefa = (evento) => {
    //PREVINE O COMPORTAMENTO PADRAO DO FORMULARIO QUE DA RELOAD NA PAGINA
    evento.preventDefault();

    const lista = document.querySelector("[data-list]");
    //SELECIONA O CONTEUDO DO INPUT DO FORMULARIO NO HTML E ADICIONA EM UMA VARIAVEL
    const input = document.querySelector("[data-form-input]");
    // COM A PROPRIEDADE VALUE, SE OBTEM APENAS O VALOR INTERNO DO INPUT
    const valor = input.value;
    // aqui o elemento .createElement, vai crir uma TAG "LI" no arquivo Html
    const tarefa = document.createElement("li");
    //
    tarefa.classList.add("task");
    //
    const novoConteudo = `<p class="content">${valor}</p>`;

    tarefa.innerHTML = novoConteudo;
    tarefa.appendChild(botaoConclui());
    lista.appendChild(tarefa);
    //AQUI O VALOR DO INPUT E RESETADO.
    input.value = "";
  };
  //criada uma cons para salvar o comporamento do botao
  const novaTarefa = document.querySelector("[data-form-button]");
  //evento : click, executa a funcao , quando o botal for clicado
  //tarefa:addEventListener escutar o quando o botao e cliclado e copiar o conteudo do input na cont: novaTarefa
  novaTarefa.addEventListener("click", criarTarefa);

  const botaoConclui = () => {
    const botaoConclui = document.createElement("button");

    botaoConclui.classList.add("check-button");
    botaoConclui.innerText = "concluir";

    botaoConclui.addEventListener("click", concluirTarefa);

    return botaoConclui;
  };

  const concluirTarefa = (evento) => {
    const botaoConclui = evento.target;

    const tarefaCompleta = botaoConclui.parentElement;
    tarefaCompleta.classList.toggle("done");
  };
  //botoa de Deletar
  const BotaoDeleta = () => {
    const botaoDeleta = document.createElement("button");

    botaoDeleta.innerText = "deletar";
    botaoDeleta.addEventListener("click", deletarTarefa);
    return botaoDeleta;
  };
  const deletarTarefa = (evento) => {
    const botaoDeleta = evento.target;
    const tarefaCompleta = botaoDeleta.parentElement;
    tarefaCompleta.remove;
    return botaoDeleta;
  };
})();
