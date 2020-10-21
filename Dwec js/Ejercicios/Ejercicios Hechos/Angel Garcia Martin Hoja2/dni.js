function letra(numeroDni) {
    if (numeroDni.length < 8)
        document.getElementById("aviso").innerHTML = "¡¡Número muy corto!!";
    else {
        var numero = numeroDni % 23;
        var letracorrecta = "";
        switch (numero) {
            case 0:
                letracorrecta = "T";
                break;
            case 1:
                letracorrecta = "R";
                break;
            case 2:
                letracorrecta = "W";
                break;
            case 3:
                letracorrecta = "A";
                break;
            case 4:
                letracorrecta = "G";
                break;
            case 5:
                letracorrecta = "M";
                break;
            case 6:
                letracorrecta = "Y";
                break;
            case 7:
                letracorrecta = "F";
                break;
            case 8:
                letracorrecta = "P";
                break;
            case 9:
                letracorrecta = "D";
                break;
            case 10:
                letracorrecta = "X";
                break;
            case 11:
                letracorrecta = "B";
                break;
            case 12:
                letracorrecta = "N";
                break;
            case 13:
                letracorrecta = "J";
                break;
            case 14:
                letracorrecta = "Z";
                break;
            case 15:
                letracorrecta = "S";
                break;
            case 16:
                letracorrecta = "Q";
                break;
            case 17:
                letracorrecta = "V";
                break;
            case 18:
                letracorrecta = "H";
                break;
            case 19:
                letracorrecta = "L";
                break;
            case 20:
                letracorrecta = "C";
                break;
            case 21:
                letracorrecta = "K";
                break;
            case 22:
                letracorrecta = "E";
                break;
            default:
                letracorrecta = "";
        }
        //Sacar elemento en pantalla
        document.getElementById("aviso").innerHTML =
            "¡¡La letra de tu Dni es la ((((" + letracorrecta + ")))!!";
    }
}