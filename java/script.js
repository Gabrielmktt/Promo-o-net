let currentIndex = 0;
// Variável que armazena o índice atual do slide visível no carrossel.
// Inicialmente, começa em 0 (primeiro slide).

function movesSlide(direction) {
    const images = document.querySelectorAll('.carousel-images img');
    // Seleciona o contêiner que contém todas as imagens do carrossel.

    const totalImages = images.children.length;
     // Obtém o número total de imagens dentro do carrossel.

    // Atualiza o índice atual do slide visível com base na direção (anterior ou próximo).
    // Se `direction` for -1, o índice move para o slide anterior.
    // Se `direction` for 1, o índice move para o próximo slide.
    // O uso de `% totalImages` garante que o índice seja circular, ou seja,
    // quando ultrapassar o último slide, volta ao primeiro, e vice-versa.

    //atualiza o indice atual

currentIndex = (currentindex + direction + totalImages) % totalImages;

//move o carrosel

const wdth = images.children[0].offsetWidth;
 // Obtém a largura de um único slide (assumindo que todas as imagens têm a mesma largura).
    // Essa medida é usada para calcular o deslocamento correto no eixo X.

images.style.transform = `translateX(${-currentIndex * wdth}px)`;
 // Atualiza o estilo `transform` do contêiner de imagens para movê-lo horizontalmente.
    // Multiplica a largura do slide pelo índice atual para posicionar o slide correto na tela.
    // Exemplo: 
    // - Se currentIndex for 0, o deslocamento será 0px (primeiro slide visível).
    // - Se currentIndex for 1, o deslocamento será a largura de 1 slide.
    // - Se currentIndex for 2, o deslocamento será a largura de 2 slides.
}
