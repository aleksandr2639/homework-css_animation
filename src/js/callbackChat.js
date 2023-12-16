export default class Callback {
  constructor() {
    this.container = document.querySelector('.container');
  }

  build() {
    document.addEventListener('DOMContentLoaded', () => {
      this.drawUI();
      this.btnAddForm();
      this.btnCloseForm();
    });
  }

  drawUI() {
    const bindToHtml = `
    <div class="container-callback">
    <div class="icon-message"></div>
    <form class="form form-hide">
        <div class="form-title-container">
            <h2 class="form-title">Feedback form</h2>
            <div class="form-close"></div>
         </div>
        <textarea class="form-textarea"></textarea>
        <button class="form-btn">Send</button>
    </form>
    </div>
    `;
    this.container.insertAdjacentHTML('beforeend', bindToHtml);
  }

  btnAddForm() {
    const btn = this.container.querySelector('.icon-message');
    const form = document.querySelector('.form');
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      btn.classList.add('hide');
      form.classList.remove('form-hide');
      const { target } = e;
      const { top, left } = target.getBoundingClientRect();
      form.style.left = `${left - form.offsetWidth}px`;
      form.style.top = `${top - form.offsetHeight}px`;
    });
  }

  btnCloseForm() {
    const btn = this.container.querySelector('.icon-message');
    const btnClose = this.container.querySelector('.form-close');
    const tooltip = document.querySelector('.form');
    btnClose.addEventListener('click', (e) => {
      e.preventDefault();
      tooltip.classList.add('form-hide');
      btn.classList.remove('hide');
    });
  }
}
