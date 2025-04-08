function consultarCEP() {
    const cep = document.getElementById("cep").value;

    if (!cep) {
        alert("Por favor,insira um CEP.");
        return;
    }
    fetch('https://viacep.com.br/ws/${cep}/json/')
    .then(response => response.json())
}