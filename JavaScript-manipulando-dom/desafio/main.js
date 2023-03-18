// botao recebe array de 'data-lista' 
// lista recebe a classe lista na tag ul do html
let botao = document.querySelectorAll("[data-lista]")
let ul = document.querySelector(".lista")

// se o botao0 for clicado muda o estilo para none e esconde tudo
botao[0].addEventListener('click', () => {
    ul.style.display = "none"
})
// se o botao1 for clicado muda o estilo para block e mostra tudo
botao[1].addEventListener('click', () => {
    ul.style.display = "block"
})
/* LOGICA DO addEventListener
     addEventListener (OQUE ESPERAR,  OQUE FAZER){
        roteiro
     }
*/