let usuario = [];
let senha = [];
let i = 0;
let k = 0;
let miao = document.getElementById('user').value
let sas = document.getElementById('pas').value

function signup(username, password){

    this.username = username;
    this.password = password;
    this.print = () => alert(`Cadastrado\nUsername: ${username}\nSenha: ${password}`);
}

function signin(){

    if(usuario.indexOf(miao) != -1){
        window.location.href='about.html';
    }else{
        alert('Erro')
    }
}



function show(){
    const pessoa = new signup(document.getElementById('username').value, document.getElementById('pass').value)
    pessoa.print()
    
    

    if(usuario[i] == '' && senha == ''){
        usuario[i] = pessoa.username;
        senha[k] = pessoa.password;
    }else{
        i++
        k++
        usuario[i] = pessoa.username;
        senha[k] = pessoa.password;
    }

    alert(`${usuario[i]}\n${senha[k]}\n${i}\n${k}\n`)
    alert(usuario[1])

}
