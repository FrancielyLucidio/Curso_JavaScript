// ALERTAS

var nome= "Franciely";
var idade= 22;
var ano= 2020;
var frase="A esperança é a última que morre";

//alert(nome + " tem " + idade + " anos");

console.log(nome);
console.log(ano - idade); 
console.log(frase.replace("última","primeira")); // "Replace" Troca a palavra desejada
console.log(frase.toUpperCase()); // "toUpperCase" deixa o texto em maiúculo
console.log(frase.toLowerCase()); // "toLowerCase" deixa o texto em minúsculo

// ARRAY

var lista = ["maça", "pêra", "laranja"];
lista.push("uva"); // acrescenta o elemento na lista
//lista.pop(); // retira o elemento na lista

console.log(lista);
//console.log(lista.reverse()); // inverte a ordenação da lista
//console.log(lista.toString()); // transforma os elementos em string
//console.log(lista.join(" - ")); // transforma em string e separa

// DICIONÁRIO

var fruta = {nome:"maça", cor:"vermelha"}; // também pode ser feito uma lista

//console.log(fruta);

// CONDIÇÃO

//var idade = prompt("Qual sua idade: ");
if (idade >= 18){
	//alert("Maior de Idade");
} else{
	//alert("Menor de Idade");
};

// LAÇO REPETIÇÃO

var count = 0;
while(count <= 5){
	//console.log(count);
	count++;
}

var i;
for (i=1; i <=5; i++){
	//console.log(i);
}

// DATE
var d = new Date();	
//alert(d);

// FUNÇÕES
function soma(n1=10 ,n2=2){
	return n1 + n2;
}
//alert(soma());

function setReplace(frase, nome, novo_nome){
	return frase.replace(nome, novo_nome);
}
//alert(setReplace("Olá mundo", "Olá", "Hello"));

function clicou(){
	//alert("Obrigada por clicar");
	document.getElementById("agradecimento").innerHTML = "<h3>Obrigada por clicar</h3>";
}

function redirecionar(){
	window.open("https://github.com/FrancielyLucidio");
	//window.location.href = "https://github.com/FrancielyLucidio";
}

function trocar(elemento){
	elemento.innerHTML = "Obrigada por passar o mouse";
} 

function voltar(elemento){
	elemento.innerHTML = "Passe o mouse aqui";
} 

function funcaoChange(elemento){ //coleta os valores selecionados
	console.log(elemento.value);
}




