function inserirNome(  ) {
    let nomeUsuario = prompt ("Qual é seu nome?");
    let elemento = document.querySelector ("#nome-usuario");
    elemento.textContent = nomeUsuario; 

}

inserirNome(  );