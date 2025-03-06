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


// Controle de múltiplos carrosséis
let currentIndex = [0, 0, 0, 0, 0, 0, 0];  // Índices para controlar vários carrosséis

function moveSlide(step, carouselIndex) {
  const slides = document.querySelectorAll(`.carousel-container:nth-child(${carouselIndex + 1}) .carousel-item`);
  const totalSlides = slides.length;

  currentIndex[carouselIndex] += step;

  if (currentIndex[carouselIndex] < 0) {
    currentIndex[carouselIndex] = totalSlides - 1;
  } else if (currentIndex[carouselIndex] >= totalSlides) {
    currentIndex[carouselIndex] = 0;
  }

  const newTransformValue = -currentIndex[carouselIndex] * 100;
  document.querySelector(`.carousel-container:nth-child(${carouselIndex + 1}) .carousel`).style.transform = `translateX(${newTransformValue}%)`;
}