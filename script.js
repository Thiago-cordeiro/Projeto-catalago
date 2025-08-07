let listaProduto = JSON.parse(localStorage.getItem("Produtos")) || [];

let qtd = 1;
function adicionarCarrinho(nome, valor) {
    window.alert("adicionado ao carrinho");

    let lista = JSON.parse(localStorage.getItem("Produtos")) || [];
    const index = lista.findIndex(p => p.nome === nome);

    if (index !== -1) {
        lista[index].qtd += 1;
    } else {
        lista.push({ nome, valor, qtd: 1 });
    }

    localStorage.setItem("Produtos", JSON.stringify(lista));
}

function listarCarrinho() {
    let secaoProdutos = document.querySelector(".produtos-sec");
    let totalInfos = document.querySelector(".total-infos");

    let lista = JSON.parse(localStorage.getItem("Produtos"));

    let total = 0;

    secaoProdutos.innerHTML = "";
    
    for (let i = 0; i < lista.length; i++) {
    secaoProdutos.innerHTML += `
        <hr class="linha">
        <div class="produtoDescricao">
            <div class="nomeProdutoCarrinho"><p>${lista[i].nome}</p></div>
            <div class="precoProdutoCarrinho"><p>${lista[i].valor}</p></div>
            <div class="quantidadeProdutoCarrinho">
                <button onclick="alterarQtd(${i}, -1)">➖</button>
                <span>${lista[i].qtd}</span>
                <button onclick="alterarQtd(${i}, 1)">➕</button>
            </div>
            <div class="removerProdutoCarrinho">
                <button onclick="removerItem(${i})">🗑️</button>
            </div>
        </div>
        <hr class="linha">
    `;
    total += lista[i].valor * lista[i].qtd;;
}
    totalInfos.innerHTML = `
            <h1>Total R$:</h1>
            <h2>${total}</h2>
        `;
}

function removerItem(index) {
    let lista = JSON.parse(localStorage.getItem("Produtos")) || [];

    if (index >= 0 && index < lista.length) {
        lista.splice(index, 1);
        localStorage.setItem("Produtos", JSON.stringify(lista));
        listarCarrinho();
    }
}

function alterarQtd(index, aux) {
    let lista = JSON.parse(localStorage.getItem("Produtos")) || [];

    if (index >= 0 && index < lista.length) {
        lista[index].qtd += aux;

        
        if (lista[index].qtd <= 0) {
            lista.splice(index, 1);
        }

        localStorage.setItem("Produtos", JSON.stringify(lista));
        listarCarrinho();
    }
}


function finalizar() {
    window.alert("Compra finalizada")
    localStorage.clear();
    location.reload(true);
    
}