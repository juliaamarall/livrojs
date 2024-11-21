const frm = document.querySelector("form");
const respLista = document.querySelector("#respLista");
const respNome = document.querySelector("#respNome");

const pacientes = [];

// Evento de envio do formulário
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o recarregamento da página
    const nome = frm.nomE.value; // Captura o nome do paciente e remove espaços extras

    if (!nome) {
        alert("Informe um nome válido!");
        frm.nomE.focus();
        return;
    }

    pacientes.push(nome); // Adiciona o nome no final da lista
    atualizarLista();
    frm.nomE.value = ""; // Limpa o campo de entrada
    frm.nomE.focus(); // Reposiciona o cursor
});

// Evento do botão de urgência
frm.btnUrgencia.addEventListener("click", () => {
    if (!frm.checkValidity()) {
        alert("Informe o nome do paciente a ser atendido em caráter de urgência.");
        frm.nomE.focus();
        return;
    }

    const nome = frm.nomE.value;

    if (!nome) {
        alert("Informe um nome válido!");
        frm.nomE.focus();
        return;
    }

    pacientes.unshift(nome); // Adiciona o nome no início da lista
    atualizarLista();
    frm.nomE.value = ""; // Limpa o campo de entrada
    frm.nomE.focus(); // Reposiciona o cursor
});

//botao atender

frm.btnAtender.addEventListener("click", () => {
    // se tamanho do vetor 0
    if(pacientes.length == 0){
        alert("Não há pacientes na lista de espera!")
        frm.nomE.focus()
        return
    }

    const atender = pacientes.shift()
    respNome.innerText = atender
    atualizarLista()
    respLista.innerText = lista
})


// Função para atualizar a lista de pacientes
function atualizarLista() {
    let lista = "";
    pacientes.forEach((paciente, i) => {
        lista += `${i + 1}. ${paciente}\n`;
    });
    respLista.innerText = lista; // Atualiza a exibição
}

