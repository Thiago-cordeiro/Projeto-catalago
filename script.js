let listaProduto = JSON.parse(localStorage.getItem("Produtos")) || [];

function adicionarCarrinho(nome, valor) {
    window.alert("adicionado ao carrinho")
    const produto = { nome, valor };
    listaProduto.push(produto)
    localStorage.setItem("Produtos", JSON.stringify(listaProduto));
}

function listarCarrinho() {
    let secaoProdutos = document.querySelector(".produtos-sec");
    let totalInfos = document.querySelector(".total-infos");

    let lista = JSON.parse(localStorage.getItem("Produtos"));

    let total = 0;

    for (let i = 0; i < lista.length; i++) {
        secaoProdutos.innerHTML += `
            <div class="produtoDescricao">
                <div class="nomeProdutoCarrinho"><p>${lista[i].nome}</p></div>
                <div class="precoProdutoCarrinho"><p>${lista[i].valor}</p></div>
                <div class="quantidadeProdutoCarrinho"><p>1</p></div>
            </div>
        `;
        total += lista[i].valor
    }
    totalInfos.innerHTML = `
            <h1>Total R$:</h1>
            <h2>${total}</h2>
        `;
}

function finalizar() {
    window.alert("Compra finalizada")
    localStorage.clear();
    location.reload(true);
    
}