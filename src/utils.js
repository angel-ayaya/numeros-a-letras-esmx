/**
 * Convierte un número a su representación en palabras en español
 * @param {number} numero - El número a convertir
 * @returns {string} - La representación en palabras del número
 */
const numeroALetras = (numero) => {
    const unidades = ["", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
    const decenas = ["", "diez", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
    const especiales = ["", "once", "doce", "trece", "catorce", "quince", "dieciséis", "diecisiete", "dieciocho", "diecinueve"];
    const centenas = ["", "cien", "doscientos", "trescientos", "cuatrocientos", "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos"];
    
    if (numero === 0) return "cero";
    
    let numStr = numero.toString();
    let n = numStr.length;
    let resultado = "";

    // Para manejar números en el rango de 1 a 9
    if (n === 1) {
        return unidades[numero];
    }

    // Para manejar números en el rango de 10 a 19
    if (n === 2 && numero < 20) {
        return especiales[numero - 10];
    }

    // Para manejar números en el rango de 20 a 99
    if (n === 2) {
        return decenas[parseInt(numStr[0])] + (numStr[1] !== '0' ? " y " + unidades[parseInt(numStr[1])] : "");
    }

    // Para manejar números en el rango de 100 a 999
    if (n === 3) {
        let c = parseInt(numStr[0]);
        let d = parseInt(numStr[1]);
        let u = parseInt(numStr[2]);

        resultado += centenas[c];
        if (d === 1 && u > 0) {
            resultado += " " + especiales[u];
        } else {
            if (d > 0) {
                resultado += " " + decenas[d];
            }
            if (u > 0) {
                resultado += " y " + unidades[u];
            }
        }
        return resultado.trim();
    }

    // Para manejar números en el rango de 1000 a 999999
    if (n >= 4 && n <= 6) {
        let miles = numeroALetras(parseInt(numStr.slice(0, -3))) + " mil";
        let resto = numeroALetras(parseInt(numStr.slice(-3)));
        return resto ? miles + " " + resto : miles;
    }

    // Para manejar números en el rango de 1000000 a 999999999
    if (n >= 7 && n <= 9) {
        let millones = numeroALetras(parseInt(numStr.slice(0, -6))) + " millones";
        let resto = numeroALetras(parseInt(numStr.slice(-6)));
        return resto ? millones + " " + resto : millones;
    }

    return "";
};

module.exports = { numeroALetras };
