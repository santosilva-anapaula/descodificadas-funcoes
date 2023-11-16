document.querySelector('#btn-calcular').addEventListener('click', caulculaMedia);

function caulculaMedia() {
    var numeros = document.querySelectorAll('.numeros');

    var arrayNumeros = Array.from(numeros);

    var media = 0;

    var soma = arrayNumeros.reduce((acumulador, elemento) => {
        return acumulador + parseFloat(elemento.value)
    }, 0);

    media = soma / arrayNumeros.length;

    if (!isNaN(media)) {
        var resultado = document.querySelector('#resultado');
        resultado.textContent = `A média dos número é: ${media}`;
        resultado.style.display = 'block';
    }else{
        alert("Digite números válidos");
    }

    console.log(soma);
}