const btn = document.querySelector("#btn");

const nomes = ["Beatriz", "Caio", "Éverton", "Franciele", "Jordan", "Luiza", "Marcelo", "Nicoly", "Pedro", "Raissa", "Válter"];

let ultimoSorteado = localStorage.getItem("ultimoSorteado"); 

function sorteio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

btn.addEventListener("click", function () {
    let sortear = sorteio(0, nomes.length - 1);
    let sorteado = nomes[sortear];

    while (ultimoSorteado === sorteado) {
        sortear = sorteio(0, nomes.length - 1);
        sorteado = nomes[sortear];
    }

    document.querySelector("#sorteado").innerText = sorteado;
    console.log("Sorteado: " + sorteado, "ultimoSorteado: " + ultimoSorteado);

    ultimoSorteado = sorteado; 

    localStorage.setItem("ultimoSorteado", ultimoSorteado);
});
