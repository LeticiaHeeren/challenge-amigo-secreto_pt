let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo'); 
    const nome = input.value.trim(); 

    // Verificar se o campo está vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return; 
    }

    // Adicionar o nome ao array
    amigos.push(nome);

    // Limpar o campo de entrada
    input.value = "";

    // Atualizar a lista de amigos na interface
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos'); 
    listaAmigos.innerHTML = ""; 

    // Percorrer o array e adicionar cada nome à lista
    amigos.forEach((amigo) => {
        const itemLista = document.createElement('li'); 
        itemLista.textContent = amigo; 
        listaAmigos.appendChild(itemLista); 
    });
}

function sortearAmigo() {
    // Verificar se há nomes na lista
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear.");
        return; 
    }

    // Gerar a lista de amigos
    const indiceSorteado = Math.floor(Math.random() * amigos.length);

    // Obter o nome sorteado
    const amigoSorteado = amigos[indiceSorteado];

    // Exibir o resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>O amigo secreto sorteado é: ${amigoSorteado}</li>`; 
}