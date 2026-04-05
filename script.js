// Função para digitar o número nos campos
function digitar(numero) {
    let numero1 = document.getElementById("numero1");
    let numero2 = document.getElementById("numero2");

    if (numero1.value.length === 0) {
        numero1.value = numero;
    } else if (numero2.value.length === 0) {
        numero2.value = numero;
        mostrarCandidato(numero1.value, numero2.value);
    }
}

// Função para corrigir o número
function corrigir() {
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
    document.getElementById("imagemCandidato").src = "";
    document.getElementById("informacoesCandidato").innerHTML = "";
}

// Função para votar em branco
function votarBranco() {
    corrigir();
    document.getElementById("informacoesCandidato").innerHTML = "Voto em BRANCO!";
}

// Função para confirmar o voto
function confirmar() {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    if (numero1 === "1" && (numero2 === "5" || numero2 === "3")) {
        if (numero2 === "5") {
            alert("Você votou no candidato: Moisés Filho");
        } else if (numero2 === "3") {
            alert("Você votou no candidato: Sândalo Wagner");
        }
    } else if (numero1 === "" || numero2 === "") {
        alert("Voto em BRANCO!");
    } else {
        alert("Voto NULO!");
    }
    corrigir();
}

// Função para mostrar o candidato
function mostrarCandidato(num1, num2) {
    let informacoes = document.getElementById("informacoesCandidato");
    let imagem = document.getElementById("imagemCandidato");

    if (num1 === "1" && num2 === "5") {
        informacoes.innerHTML = "Candidato: Moisés Filho";
        imagem.src = "móises filho.jpg"; // Coloque a imagem do candidato Moisés Filho aqui
    } else if (num1 === "1" && num2 === "3") {
        informacoes.innerHTML = "Candidato: Sândalo Wagner";
        imagem.src = "Sândalo Wagner.jpg"; // Coloque a imagem do candidato Sândalo Wagner aqui
    } else {
        informacoes.innerHTML = "Candidato não encontrado";
        imagem.src = "";
    }
}
