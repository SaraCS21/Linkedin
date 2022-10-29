/*
* Enunciado: Este es un reto especial por Halloween.
* Deberemos crear un programa al que le indiquemos si queremos realizar "Truco
* o Trato" y un listado (array) de personas con las siguientes propiedades:
* - Nombre de la niña o el niño.
* - Edad.
* - Altura en centímetros.
*
* Si las personas han pedido truco, el programa retornará sustos (aleatorios)
* siguiendo estos criterios:
* - Un susto por cada 2 letras del nombre por persona.
* - Dos sustos por cada edad que sea un número par.
* - Tres sustos por cada 100 cm de altura entre todas las personas.
* - Sustos: 🎃 👻 💀 🕷 🕸 🦇
* 
* Si las personas han pedido trato, el programa retornará dulces (aleatorios)
* siguiendo estos criterios:
* - Un dulce por cada letra de nombre.
* - Un dulce por cada 3 años cumplidos, hasta un máximo de 10 años por persona.
* - Dos dulces por cada 50cm de altura hasta un máximo de 150cm por persona.
* - Dulces: 🍰 🍬 🍡 🍭 🍪 🍫 🧁 🍩
*/

const niños = [
    {
        "nombre": "Juan",
        "edad": 9,
        "altura": 120
    },
    {
        "nombre": "Carla",
        "edad": 11,
        "altura": 145
    },
    {
        "nombre": "Luis",
        "edad": 7,
        "altura": 100
    },
    {
        "nombre": "María",
        "edad": 8,
        "altura": 112
    },
    {
        "nombre": "Pablo",
        "edad": 7,
        "altura": 110
    }
];

const sustos = ["🎃", "👻", "💀", "🕷", "🕸", "🦇"];
const dulces = ["🍰", "🍬", "🍡", "🍭", "🍪", "🍫", "🧁", "🍩"];

function truco(){
    let num_sustos = 0;
    let altura_total = 0;

    niños.forEach(niño => {
        let nombre = niño["nombre"];
        let edad = niño["edad"];
        let altura = niño["altura"];

        num_sustos += Math.floor(nombre.length / 2);
        num_sustos += edad % 2 === 0 ? 2 : 0;
        altura_total += altura;
    });

    num_sustos += Math.floor(altura_total / 100) * 3;
    return num_sustos;
}

function trato(){
    let num_dulces = 0;

    niños.forEach(niño => {
        let nombre = niño["nombre"];
        let edad = niño["edad"];
        let altura = niño["altura"];

        num_dulces += nombre.length;
        
        edad = edad > 10 ? 10 : edad;
        num_dulces += Math.floor(edad / 3);
        
        altura = altura > 150 ? 150 : altura;
        num_dulces += Math.floor(altura / 50) * 2;
    });

    return num_dulces;
}

function valor_aleatorio(array, num){
    let resultado = []
    for (let i = 0; i < num; i++){
        let valor = array[Math.floor(Math.random() * array.length)];
        resultado.push(valor)
    }
    return resultado;
}

function truco_trato(solicitud){
    let num = 0;
    
    if (solicitud === "truco"){
        num = truco();
        return valor_aleatorio(sustos, num);

    } else if (solicitud === "trato"){
        num = trato();
        return valor_aleatorio(dulces, num);
    }
}

console.log(truco_trato("trato"))