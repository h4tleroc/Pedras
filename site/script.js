const buttonsAdicionar = document.querySelectorAll('.adicionar');
const listaCarrinho = document.getElementById('lista-carrinho');
const totalElement = document.getElementById('total');
let total = 0;

buttonsAdicionar.forEach(button => {
    button.addEventListener('click', () => {
        const produto = button.parentElement;
        const nome = produto.getAttribute('data-nome');
        const preco = parseFloat(produto.getAttribute('data-preco'));

        // Adiciona o produto à lista do carrinho
        const li = document.createElement('li');
        li.textContent = `${nome} - R$ ${preco.toFixed(2)}`;
        listaCarrinho.appendChild(li);

        // Atualiza o total
        total += preco;
        totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
    });
});