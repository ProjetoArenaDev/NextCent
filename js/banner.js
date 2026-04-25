export function initBanner() {
  const section = document.querySelector(".banner");
  if (!section) return;

  // Código da seção aqui
  
let slideIndex = 0;
let intervalo;

const slides = document.querySelectorAll(".div-banner");
const dots = document.querySelectorAll(".dot");
const carrossel = document.querySelector(".carrossel");

function mostrarSlide(index){

  slides.forEach(slide => slide.classList.remove("ativo"));
  dots.forEach(dot => dot.classList.remove("ativo"));

  slides[index].classList.add("ativo");
  dots[index].classList.add("ativo");

}

function proximoSlide(){
  slideIndex++;

  if(slideIndex >= slides.length){
    slideIndex = 0;
  }

  mostrarSlide(slideIndex);
}

function iniciarCarrossel(){
  intervalo = setInterval(proximoSlide, 4000);
}

function pararCarrossel(){
  clearInterval(intervalo);
}

iniciarCarrossel();


// parar quando mouse estiver em cima
carrossel.addEventListener("mouseenter", pararCarrossel);

// voltar quando tirar
carrossel.addEventListener("mouseleave", iniciarCarrossel);


// clicar nas bolinhas
dots.forEach((dot, index) => {

  dot.addEventListener("click", () => {

    slideIndex = index;
    mostrarSlide(slideIndex);

  });

});

//passar o mouse

let startX = 0;
let endX = 0;

carrossel.addEventListener("mousedown", (e) => {
  startX = e.clientX;
});

carrossel.addEventListener("mouseup", (e) => {
  endX = e.clientX;
  verificarSwipe();
});

carrossel.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

carrossel.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  verificarSwipe();
});

function verificarSwipe(){

  if(startX - endX > 50){
    proximoSlide();
  }

  if(endX - startX > 50){
    slideIndex--;

    if(slideIndex < 0){
      slideIndex = slides.length - 1;
    }

    mostrarSlide(slideIndex);
  }

}

}