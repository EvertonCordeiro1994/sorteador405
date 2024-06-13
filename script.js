const btn = document.querySelector("#btn");


const nomes = ["Beatriz", "Caio", "Éverton", "Franciele", "Jordan", "Luiza", "Nicoly", "Pedro", "Raissa", "Válter"];


function sorteio(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}

btn.addEventListener("click", function(){
    const sorteado = sorteio(0, (nomes.length - 1))

    console.log(nomes[sorteado])
    
    document.querySelector("#tela").innerText = nomes[sorteado];


});
