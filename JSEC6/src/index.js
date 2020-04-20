// class List {
//     constructor() {
//         this.data = [];
//     }
//     add(data) {
//         this.data.push(data);
//         console.log(this.data);
//     }
// }

// class TodoList extends List {

// }
// const MinhaLista = new TodoList();

// document.getElementById("novotodo").onclick = function () {
//     MinhaLista.add('Novo Todo');
// }


// // ========================= OPERAÇÕES COM ARRAY

// const arr = [1, 3, 4, 5, 8, 9];

// // //PERCORRE O ARRAY
// // const newArr = arr.map(function (item, index) {
// //     return item + index;
// // })
// // console.log(newArr);

// // // REDUZR PARA APENAS 1 ELEMTENTO
// // const sum = arr.reduce(function (total, next) {
// //     return total + next;
// // });
// // console.log(sum);

// // // FILTRA ELEMENTOS
// // const filter = arr.filter(function (item) {
// //     return item % 2 === 0; //retorna pares
// // });
// // console.log(filter);

// // // ENCONTRAR ELEMENTOS
// // const find = arr.find(function (item) {
// //     return item === 4;
// // });
// // console.log(find);

// // ========================= ARROW FUNCTION ================

// // // PERCORRE O ARRAY
// // const newArr = arr.map((item, index) =>  item * 2);
// // console.log(newArr);

// // // =====================VALOR PADRAO ================
// // function soma(a =4, b= 3){
// //     return a+ b;
// // }
// // console.log(soma());
// // console.log(soma(1, 4));


// // ========================DESESTRUTURAÇÃO
// // const usuario = {
// //     nome: 'Diego',
// //     idade: 23,
// //     endereco: {
// //         cidade: 'Rio do Sul',
// //         estado: 'SC'
// //     },
// // };

// // const {nome, idade, endereco: {cidade}} = usuario;

// // console.log(nome);
// // console.log(idade);
// // console.log(cidade);

// // function mostraNome( {nome} ){
// //     console.log(nome);
// // }

// // mostraNome(usuario);


// // ==================REST AND SPREAD

// //REST = PEGA O RESTO DO OBJETO
// // const usuario = {
// //     nome: 'Douglas',
// //     idade: 27,
// //     empresa: "Creartcode"
// // };
// // const { nome, ...resto } = usuario;

// // console.log(nome);
// // console.log(resto);

// // function soma(...params) {
// //     return params.reduce((total, next) => total + next);
// // }
// // console.log(soma(1,3,4));

// //SPREAD = REPASSA AS INFORMAÇÕES PARA OUTRA ESTRUTURA

// const arr1 = [1, 3, 4, 5, 8, 9];
// const arr2 = [2, 6, 10];
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);

// const usuario1 = {
//     nome: 'Douglas',
//     idade: 27,
//     empresa: "Creartcode"
// };
// const usuario2 = {
//     ...usuario1,
//     nome: "Diego"
// };
// console.log(usuario2);

// // ======================TEMPLATES LITERALS====================
// const nome = "Diego";
// const idade = 23;

// console.log("Meu nome é " + nome+ " e tenho "+ idade + " anos");
// console.log(`Meu nome é ${nome} e tenho ${idade} anos`);


