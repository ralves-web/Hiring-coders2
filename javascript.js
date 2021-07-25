const buttonCliente = document.querySelector('#buttonCliente')
const butmodal = document.querySelector('#butmodal')
const closeCliente = document.querySelector('#closeCliente')


buttonCliente.addEventListener('click', () => {
    butmodal.classList.add('Abrir')

});


closeCliente.addEventListener('click', () => {
    butmodal.classList.remove('Abrir')

});


const buttonProduto = document.querySelector('#buttonProduto')
const butmodal2 = document.querySelector('#butmodal2')
const closeProduto = document.querySelector('#closeProduto')


buttonProduto.addEventListener('click', () => {
    butmodal2.classList.add('Abrir')

});


closeProduto.addEventListener('click', () => {
    butmodal2.classList.remove('Abrir')

});

// Salvar dados Locastorage

// Cadastrar Clientes

function cadastrarCliente(){
    var name1 = document.getElementById('name1');
    var email = document.getElementById('email');
    var telefone = document.getElementById('telefone');
    var cpf = document.getElementById('cpf');
    var rua = document.getElementById('rua');
    var numero = document.getElementById('numero');
    var complemento = document.getElementById('complemento');
    var bairro = document.getElementById('bairro');
    var cidade = document.getElementById('cidade');
    var cep = document.getElementById('cep');
    var estado = document.getElementById('estado');
    


var dados = JSON.parse(localStorage.getItem("dadosCliente"));

if(dados == null){
    localStorage.setItem("dadosCliente", "[]")
    dados = [];
}

var auxRegister = {
    nome: name1.value,
    email: email.value,
    telefone: telefone.value,
    cpf: cpf.value,
    rua: rua.value,
    numero: numero.value,
    complemento: complemento.value,
    bairro: bairro.value,
    cidade: cidade.value,
    cep: cep.value,
    estado: estado.value
}

dados.push(auxRegister);

localStorage.setItem("dadosCliente", JSON.stringify(dados));
alert(`Cliente Cadastrado com sucesso!`)

name1.value =  "";
email.value = "";
telefone.value = "";
cpf.value = "";
rua.value = "";
numero.value = "";
complemento.value = "";
bairro.value = "";
cidade.value = "";
cep.value = "";
estado.value = "";

}

// Cadastrar Produtos


function cadastrarProduto(){

    var produto = document.getElementById('produto');
    var marca = document.getElementById('marca');
    var categoria = document.getElementById('categoria');
    var modelo = document.getElementById('modelo');
    var tamanho = document.getElementById('tamanho');
    var peso = document.getElementById('peso');

    var dados1 = JSON.parse(localStorage.getItem("dadosProduto"));

if(dados1 == null){
    localStorage.setItem("dadosProduto", "[]")
    dados1 = [];
}

 
var auxRegister1 = {

    produto: produto.value,
    marca: marca.value,
    categoria: categoria.value,
    modelo: modelo.value,
    tamanho: tamanho.value,
    peso: peso.value

}

dados1.push(auxRegister1);

localStorage.setItem("dadosProduto", JSON.stringify(dados1));
alert(`Produto Cadastrado com sucesso!`)

produto.value = "";
marca.value = "";
categoria.value = "";
modelo.value = "";
tamanho.value = "";
peso.value = "";

}




