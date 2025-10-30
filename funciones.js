export function saludarDuplicado(nombre) {
    console.log(`Hola ${nombre}`);
}

export function despedirseDuplicado(nombre) {
    console.log(`Adiós ${nombre}`);
}

function dividir(a, b) {
    return a / b; // bug si b = 0
}
