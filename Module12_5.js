/*Задание 5.
Переписать консольное приложение из предыдущего юнита на классы.*/

class Device{
    constructor(name)
    {
        this.typeDevice = 'electrical';
        this.name = name;
    }
    turnOn(switchOn)
    {
        return this.switchOn = switchOn ? 1 : 0;
    }
}

class TableLamp extends Device
{
    constructor(typeLamp,power,name)
    {
        super(name);
        this.typeLamp = typeLamp;
        this.power = power;
    }
    getPower()
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
}
const lamp = new TableLamp('диодная',40, 'Лампа');

lamp.turnOn(0);
lamp.getPower();
console.log(lamp);

class CoffeeGrinder extends Device
{
    constructor(typeGrinding,power,name)
    {
        super(name);
        this.typeGrinding = typeGrinding;
        this.power = power;
    }
    isFull(isFull)
    {
        this.isFull = isFull ? 1 : 0;
    }
    getPower()
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
}

const grinder = new CoffeeGrinder("жернова",150, "Кофемолка bosh");
grinder.turnOn(1);
grinder.isFull(1);
grinder.getPower();
console.log(grinder);