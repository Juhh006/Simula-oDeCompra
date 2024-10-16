let produtos = [
    { nome: "Funko Pop Harry Potter", preco: 199.90, estoque: 10 },
    { nome: "Funko Pop Dobby", preco: 199.90, estoque: 8 },
    { nome: "Funko Pop Draco Malfoy", preco: 199.90, estoque: 7 },
    { nome: "Funko Pop Hermione Granger", preco: 199.90, estoque: 5 },
    { nome: "Funko Pop Nymphadora Tonks", preco: 199.90, estoque: 3 }
];
let carrinho = [];
function adicionarAoCarrinho(nome, preco) {
    let produto = produtos.find(item => item.nome === nome);
    let quantidadeNoCarrinho = carrinho.filter(item => item.nome === nome).length;

    if (quantidadeNoCarrinho < produto.estoque) {
        carrinho.push({ nome: nome, preco: preco });
        atualizarCarrinho();
    } else {
        alert("Você já adicionou o número máximo permitido deste produto ao carrinho.");
    }
}
function removerDoCarrinho() {
    let nomeProduto = document.getElementById("removeItem").value;
    let index = carrinho.findIndex(item => item.nome.toLowerCase() === nomeProduto.toLowerCase());
    if (index !== -1) {
        carrinho.splice(index, 1);
        alert(`${nomeProduto} foi removido do carrinho.`);
    } else {
        alert("Produto não encontrado no carrinho.");
    }
    atualizarCarrinho();
}
function limparCarrinho() {
    carrinho = [];
    atualizarCarrinho();
    alert("O carrinho foi limpo.");
}
function atualizarCarrinho() {
    let listaCarrinho = document.getElementById("carrinho");
    let totalCarrinho = document.getElementById("total");

    listaCarrinho.innerHTML = "";
    
    let total = 0;

    carrinho.forEach(item => {
        let li = document.createElement("li");
        let produto = produtos.find(prod => prod.nome === item.nome); 

        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)} (Em estoque: ${produto.estoque})`;
        listaCarrinho.appendChild(li);
        total += item.preco;
    });

    totalCarrinho.textContent = `Total: R$ ${total.toFixed(2)}`;
}
