// Functions to open and close a modal
function openModal($el) {
    $el.classList.add('is-active');
  }
  
  function closeModal($el) {
    $el.classList.remove('is-active');
  }
  
  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);
  
    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });
  
  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-close, .close-modal') || []).forEach(($close) => {
    const $target = $close.closest('.modal');
  
    $close.addEventListener('click', (e) => {
      e.preventDefault();
      closeModal($target);
    });
  });