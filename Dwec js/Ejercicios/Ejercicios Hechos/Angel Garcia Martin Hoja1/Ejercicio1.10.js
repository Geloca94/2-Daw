document.getElementById("conver").onclick = convertir;

function convertir() {
    let pesetas;
    pesetas = parseFloat(prompt("Dime la cantidad de pesetas"));
    if (pesetas < 0) {
        alert("Importe incorrecto");
    } else {
        let importe = pesetas / 166.6;
        importe = importe.toFixed(2); //Esto me dice que puedo tener 2 digitos despues de la coma.
        confirm(`${pesetas} pesetas son ${importe} euros.`);
        //Esto me da la confirmacion en ved un warning
    }
}