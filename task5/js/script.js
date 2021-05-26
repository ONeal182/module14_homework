class ElectricalDevices {
    constructor(name) {
        this.name = name;
    }
    getPriority(priority){
        console.log(`Priority is ${priority}`);
    }
}

const electronic = new ElectricalDevices('test');

electronic.getPriority(1);