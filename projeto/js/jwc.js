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
        window.location.href = "index.html#dados";
    });
});



// Função para mover os slides
function moveSlide(direction, carouselIndex) {
    var carousel = document.querySelectorAll('.carousel')[carouselIndex - 1]; // Seleciona o carrossel correto
    var items = carousel.querySelectorAll('.carousel-item'); // Pega todos os itens do carrossel
    var totalItems = items.length; // Total de itens no carrossel
    var currentIndex = Array.from(items).findIndex(item => item.style.display === 'block'); // Índice do item atual

    // Se não há item visível, começamos do primeiro
    if (currentIndex === -1) currentIndex = 0;

    // Remover a visibilidade do item atual
    items[currentIndex].style.display = 'none';

    // Calcular o novo índice com base na direção
    var newIndex = currentIndex + direction;

    // Lógica para rotação circular
    if (newIndex < 0) {
        newIndex = totalItems - 1; // Vai para o último item se a direção for negativa
    } else if (newIndex >= totalItems) {
        newIndex = 0; // Vai para o primeiro item se a direção for positiva
    }

    // Mostrar o novo item
    items[newIndex].style.display = 'block';
}

// Inicializar todos os carrosséis com o primeiro item visível
document.addEventListener("DOMContentLoaded", function () {
    var carousels = document.querySelectorAll('.carousel');
    carousels.forEach(function (carousel) {
        var items = carousel.querySelectorAll('.carousel-item');
        items.forEach(function (item, index) {
            if (index !== 0) item.style.display = 'none'; // Esconde todos os itens, exceto o primeiro
        });
    });
});

