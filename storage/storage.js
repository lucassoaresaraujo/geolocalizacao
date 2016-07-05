function armazena() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;

    if (nome == '' && email == '')
        return false;

    window.sessionStorage.setItem('nome', nome);
    window.sessionStorage.setItem('email', email);    
}


function recuperar() {
    var nome = document.getElementById('nome');
    var email = document.getElementById('email');

    nome.innerHTML = sessionStorage.getItem('nome');
    email.innerHTML = sessionStorage.getItem('email');
}
