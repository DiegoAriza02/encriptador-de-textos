function encriptar() {
    let texto = document.getElementById("input-text").value;
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("output-text").value = textoEncriptado;
}

function desencriptar() {
    let textoEncriptado = document.getElementById("input-text").value;
    let texto = textoEncriptado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("output-text").value = texto;
}

function copiar() {
    let outputText = document.getElementById("output-text");
    outputText.select();
    outputText.setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand("copy");

    alert("Texto copiado: " + outputText.value);
}
