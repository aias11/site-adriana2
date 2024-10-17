// Seleciona os elementos que terão a animação
const elements = document.querySelectorAll('.info-add');

// Configura o Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // Adiciona a classe 'visible' quando o elemento está na viewport
    }
  });
});

// Observa todos os elementos que possuem a classe '.info-add'
elements.forEach(element => {
  observer.observe(element);
});
