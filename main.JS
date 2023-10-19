function logar(){

    var usuario1 = document.getElementById ("usuario");
    var senha1 = document.getElementById ("Senha");
    

    if (usuario1.value == 'admin'&& senha1.value == 'acess'){
        localStorage.setItem("acesso", true);
        alert("Bem vindo de volta.");
        window.location.href = "./Portal/Portal.html";
    }  else{
        alert("login ou senha invalidos");
    }
    
    
}