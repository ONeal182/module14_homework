const person = {

    city: "Moscow",
    index: 'f213',
    addres: 'Mironova 5'

}

const checkObj = (str, obj) => {
    console.log(obj.hasOwnProperty(str));
}

checkObj('city', person);