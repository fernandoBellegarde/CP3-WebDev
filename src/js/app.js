const inputProduto = document.getElementById("produto");
const inputValor = document.getElementById("preco");
const inputDepartament = document.getElementById("departamento");
const form = document.getElementById("form");
const btnEnviar = document.getElementById("btnFormEnviar");
const erro = document.getElementById("mensagemErro");
const cadastros = document.getElementById("cadastrosProdutos");

btnEnviar.addEventListener("click", function enviar(event) {
    event.preventDefault();

    const produto = inputProduto.value;
    let valor = inputValor.value;
    const departamento = inputDepartament.value;

    if (!produto || !valor) {
        erro.innerHTML = "Preencha <strong>todos</strong> os campos!";
        erro.style.color = "red";
        return;
    }

    valor = Number(valor).toFixed(2).replace(".", ",");

    if (valor <= 0) {
        erro.innerHTML = "O preço deve ser maior que <strong>zero</strong>!";
        erro.style.color = "red";
        return;
    }
    if (departamento === "") {
        erro.innerHTML = "Selecione um <strong>departamento</strong>!";
        erro.style.color = "red";
        return;
    }

    erro.innerHTML = "";

    const lista = document.createElement("ul");
    if (departamento === "Tecnologia") {
        lista.innerHTML = `
        <li><strong>Produto: ${produto}</li>
        <li>Preço: R$ ${valor}</li>
        <li>Departamento: ${departamento}</strong></li>
    `;
    } else if (departamento === "Comida") {

        lista.innerHTML = `
        <li>Produto: ${produto}</li>
        <li>Preço: R$ ${valor}</li>
        <li>Departamento: ${departamento}</li>
    `;
        lista.style.backgroundColor = "yellow";
    } else {
        lista.innerHTML = `
        <li>Produto: ${produto}</li>
        <li>Preço: R$ ${valor}</li>
        <li>Departamento: ${departamento}</li>
    `;
    }
    cadastros.appendChild(lista);

    form.reset();
});
