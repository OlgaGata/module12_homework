/*Задание 4.
Реализовать следующее консольное приложение подобно примеру, который разбирался в видео.
Реализуйте его на прототипах.
Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.
Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер).
Выбрав прибор, подумайте, какими свойствами он обладает.*/

function Device(name)
{
    this.typeDevice = 'electrical',
    this.name = name
}

Device.prototype.turnOn = function(switchOn)
{
    this.switchOn = switchOn ? 1 : 0;
}

function TableLamp(typeLamp,power,name)
{
    this.name = name,
    this.typeLamp = typeLamp,
    this.power = power
}

TableLamp.prototype = new Device();
TableLamp.prototype.getPower = function ()
{
    if (this.switchOn)
    {
        console.log(`${this.name} с типом лампы: ${this.typeLamp} включена и потребляет ${this.power}`)
    }
    else
    {
        console.log('Упс! Лампа выключена и ничего не потребляет')
    }
}
function CoffeeGrinder(typeGrinding,power,name)
{
    this.name = name,
        this.typeGrinding = typeGrinding,
        this.power = power
}

CoffeeGrinder.prototype = new Device();
CoffeeGrinder.prototype.isFull = function (isFull)
{
    this.isFull = isFull ? 1 : 0;
}
CoffeeGrinder.prototype.getPower = function ()
{
    if (this.switchOn && this.isFull)
    {
        console.log(`${this.name} с типом помолочного механизма: ${this.typeGrinding} включена и потребляет ${this.power}`);
    }
    else
    {
        console.log('Проверьте подключена ли кофемолка к питанию и наличие кофе');
    }
}


const lamp = new TableLamp('диодная',40, 'Лампа');
const grinder = new CoffeeGrinder("жернова",150, "Кофемолка bosh")

lamp.turnOn(1);
lamp.getPower();
console.log(lamp);

grinder.turnOn(1);
grinder.isFull(0);
grinder.getPower();
console.log(grinder);