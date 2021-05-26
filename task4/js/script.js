function ElectricalDevices(name) {
    this.name = name
    this.getPriority = function(priority){
        console.log(`Priority is ${priority}`)
      }
}
ElectricalDevices.prototype.devicesState = function () {
    if (this.turn === true) {
        console.log(`${this.name} включен!`);
    } else {
        console.log(`${this.name} выключен!`);
    }
}

function Lamp(name, turn, wat) {
    this.name = name,
    this.turn = turn,
    this.wat = wat
}

Lamp.prototype = new ElectricalDevices();

Lamp.prototype.powerСonsumption = function (ampere) {
    console.log(this.wat * ampere);
}

function Pc(name, turn, wat, cpuLoad) {
    this.name = name,
    this.turn = turn,
    this.wat = wat,
    this.cpuLoad = cpuLoad
}

Pc.prototype = new ElectricalDevices();

Pc.prototype.protectCpu = function () {
    if(this.turn === true){
        if (this.cpuLoad >= 100) {
            console.log('ПЕРЕЗАГРУЗКА');
        } else {
            console.log('Работаем');
        }
    }else{
        console.log('Компьютер не работает');
    }
    
}

const pc = new Pc('Компьютер', true, 50, 100);
const lamp = new Lamp('Лампа', false, 50);

pc.devicesState();
pc.protectCpu();
lamp.powerСonsumption(2);
lamp.devicesState();
lamp.getPriority(23);

