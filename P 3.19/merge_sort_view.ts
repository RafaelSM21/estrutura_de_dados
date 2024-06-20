import { Merge } from "./merge_sort";

let merge_sort = new Merge<{nome: string, idade: number}>();

// Criando um array de objetos contendo nome e idade
let pessoas: {nome: string, idade: number}[] = [
    {nome: 'Jesus', idade: 18},
    {nome: 'Augusto', idade: 22},
    {nome: 'Mariana', idade: 29},
    {nome: 'Beatriz', idade: 21},
    {nome: 'Abner', idade: 25},
    {nome: 'Rafael', idade: 18},
    {nome: 'Jesus', idade: 33}
];

console.log("Início da Merge Sort")
console.log(...merge_sort.sort_view(pessoas));
console.log("Fim da Merge Sort.");