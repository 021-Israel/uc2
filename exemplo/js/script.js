// window.onload = function(){
//     alert("Seja bem-vinda a Jornada Viagem! ✈");
// }
//Função que captura os dados do formulário e exibe via document.write
function exibirDados() {
    //Captura os valores dos inputs
    let nome = document.getElementById('nome').value;
    let tel = document.getElementById('movel').value;
    let email = document.getElementById('correio').value;

    //Usando document.write para exibir os dados da página
    document.write('<h2>Daos recebidos:</h2>')
    document.write('<p><strong>Nome:</strong> '+nome + '</p>')
    document.write('<p><strong>Telefone:</strong> '+tel + '</p>')
    document.write('<p><strong>E-mail:</strong> '+email + '</p>')
}