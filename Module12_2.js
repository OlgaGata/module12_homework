/*Задание 2.
Написать функцию, которая принимает в качестве аргументов строку и объект,
а затем проверяет есть ли у переданного объекта свойство с данным именем.
Функция должна возвращать true или false.*/

function func(str,obj)
{
    return (str in obj)
}
 const obj = {
    a: 1,
     b: "property",
     c: null
}
let str = 'ab';

console.log(func(str,obj));