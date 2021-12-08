const button = document.getElementById('button_login');

button.addEventListener('click', (event) => {
    event.preventDefault();//Impede que o button ou submit faça o que deve fazer, dando total controle ao arquivo JS criado.
    
    const email = document.getElementById('email_forms');
    const password = document.getElementById('passwords_forms');

    //email.value irá pegar os valores de dentro do input email_forms.
    if(email.value == ""){
        email.classList.add("errorInput");
    } else {
        email.classList.remove("errorInput");
    }

    if(password.value == ""){
        password.classList.add('errorInput');
    }else {
        password.classList.remove("errorInput");
    }

    //um pouco mais de lógica para a validação dos dados do email.
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || email.value.indexOf("@") - email.value.indexOf(".") == 1){
        email.classList.add("errorInput");
    } else {
        email.classList.remove("errorInput");
    }

    if(!isNaN(email.value) == true && email.value.length == 11){
        email.classList.remove("errorInput");
    } else {
        password.classList.add("errorInput");
    }

    //Agora a lógica da validação da senha
    if(password.value.length < 5){
        password.classList.add("errorInput");
    } else{
        password.classList.remove("errorInput");
    }
}) //Esse elemento ele pode "ouvir" as ações que ocorrem com o objeto.

//Já com esse pequeno bloco de códigos já é possível fazer uma validação simples de formulário.