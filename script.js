function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;

    try {
        var valor = eval(resultado);

        if (isNaN(valor) || ! isFinite(valor)){
            document.getElementById('resultado').innerHTML = "Erro"
        } else {
            document.getElementById('resultado').innerHTML = "valor"
        }

        
    } catch (Erro){
        document.getElementById('resultado').innerHTML = "Erro"
    }
}

function inserir(num){
    var numero = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = numero + num;
}

function limpar(){
    document.getElementById('resultado').innerHTML = " ";
}









