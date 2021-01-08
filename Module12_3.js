/*Задание 3.
Написать функцию, которая создает пустой объект, но без прототипа.*/

function createObject()
{
    const emptyObject = Object.create(null);
}

createObject();