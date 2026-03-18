.bebas-neue-regular {
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.noto-serif {
  font-family: "Noto Serif", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings: "wdth" 100;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-image: url("Imagens/5cbcc242-8ba3-47eb-b3ee-c187d68bd7ac.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: #222;
  line-height: 1.6;
}

header {
  background: linear-gradient(to right, #5c0000, #8b0000);
  color: white;
  text-align: center;
  padding: 30px 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  position: relative;
}

.logo {
  position: absolute;
  top: 15px;
  left: 20px;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid white;
}

h1 {
  font-family: "Bebas Neue", sans-serif;
}

h2,
h3 {
  font-family: "Noto Serif", serif;
}

header h1 {
  font-size: 40px;
  margin-bottom: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

header p {
  font-size: 18px;
  margin-bottom: 20px;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

nav li {
  display: flex;
  align-items: center;
}

nav a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.12);
  padding: 10px 18px;
  border-radius: 8px;
  transition: 0.3s;
}

nav a:hover {
  background-color: white;
  color: #8b0000;
}

main {
  max-width: 1100px;
  margin: 30px auto;
  padding: 0 20px;
}

section {
  background-color: white;
  margin-bottom: 25px;
  padding: 25px;
  border-radius: 14px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-left: 8px solid #8b0000;
}

section h2 {
  color: #8b0000;
  margin-bottom: 15px;
  font-size: 28px;
  border-bottom: 2px solid #ddd;
  padding-bottom: 8px;
}

section h3 {
  margin-top: 20px;
  margin-bottom: 10px;
  color: #111;
  font-size: 22px;
  background-color: #f3f3f3;
  padding: 10px 14px;
  border-radius: 8px;
}

section p {
  font-size: 17px;
  margin-bottom: 10px;
}

section ul {
  list-style: none;
  margin-top: 10px;
}

section ul li {
  background-color: #f8f8f8;
  margin-bottom: 10px;
  padding: 12px 15px;
  border-radius: 8px;
  border-left: 5px solid #8b0000;
  font-size: 17px;
  transition: 0.3s;
  cursor: pointer;
}

section ul li:hover {
  background-color: #eeeeee;
  transform: translateX(4px);
}

#menu {
  display: none;
}

#sobre,
#contato,
#carrinho {
  display: none;
}

#contato p,
#sobre p,
#home p {
  font-size: 18px;
}

#home {
  text-align: center;
  background: white;
}

#home h2 {
  font-size: 32px;
}

.carrinho-link {
  text-decoration: none;
  color: white;
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.12);
  padding: 10px 18px;
  border-radius: 8px;
  transition: 0.3s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 90px;
  height: 44px;
}

.carrinho-link:hover {
  background-color: white;
}

.carrinho-link img {
  width: 24px;
  height: 24px;
  display: block;
}

#lista-carrinho li {
  cursor: default;
}

#total {
  font-size: 20px;
  font-weight: bold;
  color: #8b0000;
  margin-top: 15px;
}

#lista-carrinho button {
  background: linear-gradient(to right, #8b0000, #b30000);
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
}

#lista-carrinho button:hover {
  background: linear-gradient(to right, #a50000, #d10000);
  transform: scale(1.05);
}

#btn-pagamento {
  background: linear-gradient(to right, #8b0000, #b30000);
  color: white;
  border: none;
  padding: 12px 22px;
  border-radius: 10px;
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 18px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  display: inline-block;
  min-width: 200px;
  text-align: center;
}

#btn-pagamento:hover {
  background: linear-gradient(to right, #a50000, #d10000);
  transform: translateY(-2px);
}

#lista-carrinho button:active,
#btn-pagamento:active {
  transform: scale(0.98);
}

footer {
  text-align: center;
  background-color: #cdc4c4;
  color: black;
  padding: 8px;
  margin-top: 30px;
}

@media (max-width: 768px) {
  header {
    padding-top: 120px;
  }

  .logo {
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 80px;
  }

  header h1 {
    font-size: 30px;
  }

  header p {
    font-size: 16px;
  }

  nav ul {
    flex-direction: column;
    gap: 10px;
  }

  nav a {
    display: inline-block;
    width: 200px;
    text-align: center;
  }const home = document.getElementById("home");
const menu = document.getElementById("menu");
const sobre = document.getElementById("sobre");
const contato = document.getElementById("contato");
const carrinho = document.getElementById("carrinho");
const pagamento = document.getElementById("pagamento");

const secoes = [home, menu, sobre, contato, carrinho, pagamento];

let itensCarrinho = [];

// valor fixo da entrega
const taxaEntrega = 8;

function mostrarSecao(secao) {
    secoes.forEach(item => {
        item.style.display = "none";
    });

    secao.style.display = "block";
}

document.getElementById("btn-home").addEventListener("click", function (event) {
    event.preventDefault();
    mostrarSecao(home);
});

document.getElementById("btn-menu").addEventListener("click", function (event) {
    event.preventDefault();
    mostrarSecao(menu);
});

document.getElementById("btn-sobre").addEventListener("click", function (event) {
    event.preventDefault();
    mostrarSecao(sobre);
});

document.getElementById("btn-contato").addEventListener("click", function (event) {
    event.preventDefault();
    mostrarSecao(contato);
});

document.getElementById("btn-carrinho").addEventListener("click", function (event) {
    event.preventDefault();
    mostrarSecao(carrinho);
});

// botão para ir para a tela de pagamento
document.getElementById("btn-pagamento").addEventListener("click", function () {
    atualizarPagamento();
    mostrarSecao(pagamento);
});

function adicionarCarrinho(nome, preco) {
    itensCarrinho.push({ nome, preco });

    atualizarCarrinho();
    mostrarSecao(carrinho);
}

function removerItem(indice) {
    itensCarrinho.splice(indice, 1);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const listaCarrinho = document.getElementById("lista-carrinho");
    const subtotalTexto = document.getElementById("subtotal");
    const taxaEntregaTexto = document.getElementById("taxa-entrega");
    const totalTexto = document.getElementById("total");

    listaCarrinho.innerHTML = "";

    // soma o valor dos produtos
    let subtotal = 0;

    itensCarrinho.forEach((item, indice) => {
        subtotal += item.preco;

        const li = document.createElement("li");

        const texto = document.createElement("span");
        texto.textContent = `${item.nome} - R$ ${item.preco.toFixed(2).replace(".", ",")}`;

        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.onclick = function () {
            removerItem(indice);
        };

        li.appendChild(texto);
        li.appendChild(botaoRemover);

        li.style.display = "flex";
        li.style.justifyContent = "space-between";
        li.style.alignItems = "center";
        li.style.gap = "10px";

        listaCarrinho.appendChild(li);
    });

    let entregaFinal = 0;
    if (itensCarrinho.length > 0) {
        entregaFinal = taxaEntrega;
    }

    const totalFinal = subtotal + entregaFinal;

    subtotalTexto.textContent = `Subtotal: R$ ${subtotal.toFixed(2).replace(".", ",")}`;
    taxaEntregaTexto.textContent = `Taxa de entrega: R$ ${entregaFinal.toFixed(2).replace(".", ",")}`;
    totalTexto.textContent = `Total: R$ ${totalFinal.toFixed(2).replace(".", ",")}`;
}

function atualizarPagamento() {
    const resumoPagamento = document.getElementById("resumo-pagamento");

    let subtotal = 0;

    itensCarrinho.forEach(item => {
        subtotal += item.preco;
    });

    let entregaFinal = 0;
    if (itensCarrinho.length > 0) {
        entregaFinal = taxaEntrega;
    }

    const totalFinal = subtotal + entregaFinal;

    if (itensCarrinho.length === 0) {
        resumoPagamento.textContent = "Seu carrinho está vazio.";
    } else {
        resumoPagamento.innerHTML = `
            Produtos: R$ ${subtotal.toFixed(2).replace(".", ",")} <br>
            Taxa de entrega: R$ ${entregaFinal.toFixed(2).replace(".", ",")} <br>
            Total final: R$ ${totalFinal.toFixed(2).replace(".", ",")}
        `;
    }
}

  section h2 {
    font-size: 24px;
  }

  section h3 {
    font-size: 20px;
  }

  section ul li {
    font-size: 16px;
  }

  #btn-pagamento {
    width: 100%;
    min-width: unset;
  }
}