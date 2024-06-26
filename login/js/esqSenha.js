/*
    - Quando o email não for verificado, mudar o texto para email não verificado!
    - Concertar o bug do input de senha
    - Se possível, atualizar a dataUserLogin.senha com a senha atual


*/

const dataUserLogin = {
    email: "teste@gmail.com",
    senha: "Teste",
  };
  

function emailVerificated(email) {
    if (email === dataUserLogin.email) {
        return true;
    }
    
    return false;
}

document.getElementById('button_submit_senha').addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const returnEmail = emailVerificated(email);

    if(returnEmail) {
        console.log("EMAIL VERIFICADO");
        const visibilityPassword = document.getElementById('password');
        visibilityPassword.classList.toggle('input_element_esq');
        //A lógica está com um pequeno bug se clicar mais de uma vez no botão!
        // console.log(visibilityPassword)
        //Pegar o value do input de p[assword e ver 
        //Se possui mais de 8 caracteres válidos e depois cria a condição e redireciona para a home
        location.href = 'home.html';
    }
});