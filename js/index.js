window.addEventListener('DOMContentLoaded', () => {

  const openModal = (triggerSelector, modalDataSelector) => {
    const trigger = document.querySelector(triggerSelector);
    const modal = document.querySelector(modalDataSelector);
    if (!trigger || !modal) return;
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      modal.classList.add("modal_active");
    });
  };

  const close_btn = document.querySelector('.close_btn');
  const submit_btn = document.querySelector('.submit_btn');
  
  const closeModal = () => {
    const modal = document.querySelector(".modal");
    modal.classList.remove("modal_active");
  }
  
  submit_btn.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal();
  });

  close_btn.addEventListener('click', closeModal);

  openModal(".contact", ".modal");

  const allFoto = document.querySelectorAll('.foto');
  allFoto.forEach((el) => {
    el.addEventListener('click', (e) => {
      const modalFoto = document.querySelector('modal_foto');
      if(modalFoto){
        return null;
      }

      const modal = document.createElement('div');
      modal.classList.add('modal', 'modal_active', 'modal_foto');
      const modalBody = document.createElement('div');
      modalBody.classList.add('modal__body')

      const foto = document.createElement('img'); 
      const src = document.createAttribute('src');
      const alt = document.createAttribute('alt');
      alt.value = e.target.attributes.alt.value
      src.value = e.target.attributes.src.value;
      foto.setAttributeNode(src);
      foto.setAttributeNode(alt);
      foto.classList.add('openFoto')

      const wrapper = document.querySelector('.wrapper');
      modalBody.appendChild(foto);
      modal.appendChild(modalBody)

      wrapper.appendChild(modal)

      modalBody.addEventListener('click', (e) => {
        const modalFoto = document.querySelector('.modal_foto');
        if(e.target == modalBody){
          modalFoto.remove();
        }
      })
    })
  })
})
