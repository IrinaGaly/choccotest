function Accordeon(selector) {
  const ecco = document.querySelector(selector);
  const items = ecco.querySelector('[data-list]').children;
  const mesureWidth = () => {
    return 500;
  }

  ecco.addEventListener('click', function(event) {
     const exeption = ['accordeon__content-wrap', 'accordeon__content', 'accordeon__text'];

    if (exeption.includes(event.target.className)) return;
    let target = event.target.closest('[data-trigger]');
      event.preventDefault();

      if (!target) { 
       target = event.target.closest('.accordeon__item').querySelector('[data-trigger]')
      }

      if (!target) return;
    
    const item = target.parentNode;
    
    if (item.classList.contains('accordeon__item_active')) {
      item.classList.remove('accordeon__item_active');
    }

    else {
      for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('accordeon__item_active');
      }

      item.classList.add('accordeon__item_active');

    } 
  });
  };

new Accordeon('#ecco-menu');



// const closeEcco = document.querySelector('[data-close]');
// closeEcco.addEventListener('click', function(e) {
//   event.preventDefault();
  
//   items.classList.remove('accordeon__item_active');