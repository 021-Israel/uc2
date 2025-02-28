let contador = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
    }, 3500)


function nextImage(){
    contador++;
    if(contador>5){
        contador = 1;
    }

    document.getElementById("radio"+contador).checked = true;

}




function exibirDados() {
    //Captura os valores dos inputs
    let email = document.getElementById('correio').value;

    //Usando document.write para exibir os dados da página
    document.write('<p><strong>E-mail:</strong> '+email + '</p>')
}



document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    Swal.fire({
        title: "Cadastro realizado com sucesso!",
        icon: "success",
        confirmButtonText: "OK"
    }).then(() => {
        window.location.href = "index.html";
    });
});


