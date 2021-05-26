class ElectricalDevices {
    constructor(name, turn) {
        this.name = name,
            this.turn = turn
    }
    getPriority(priority) {
        console.log(`Priority is ${priority}`);
    }
    devicesState() {
        if (this.turn === true) {
            console.log(`${this.name} включен!`);
        } else {
            console.log(`${this.name} выключен!`);
        }
    }

}

class Lamp extends ElectricalDevices {

    powerСonsumption(wat, ampere) {
        super.getPriority(1);
        super.devicesState();
        if (this.turn === true) {
            console.log(wat * ampere);
        }else{
            console.log('Включите лампу');
        }


    }
}

class Pc extends ElectricalDevices {

    protectCpu(cpuLoad) {
        super.getPriority(2);
        super.devicesState();
        if (this.turn === true) {
            if (cpuLoad >= 100) {
                console.log('ПЕРЕЗАГРУЗКА');
            } else {
                console.log('Работаем');
            }
        } else {
            console.log('Компьютер не работает');
        }
    }


}

const lamp = new Lamp('Лампа', true);
const pc = new Pc('Компьютер', true);
lamp.powerСonsumption(100, 50);
pc.protectCpu(100);