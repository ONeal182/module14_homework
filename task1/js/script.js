const person = {

    city: "Moscow",
    index: 'f213',
    addres: 'Mironova 5'

}
const viewObject = (obj) => {
    console.log(Object.keys(obj));
    console.log(Object.values(obj));
    console.log(Object.entries(obj));
}
viewObject(person);