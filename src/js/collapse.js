export default class Collapse {
  constructor() {
    this.container = document.querySelector('.container');
  }

  build() {
    document.addEventListener('DOMContentLoaded', () => {
      this.drawUI();
      this.buttonClick();
    });
  }

  drawUI() {
    const bindToHtml = `
    <div class="container-collapse">
    <button class="collapse collapse-animation">Collapse</button>
    <div class="collapse-element">
      <p class="collapse-text">Некоторый заполнитель
      для первого компонента сворачивания в этом примере множественного сворачивания.
      Эта панель по умолчанию скрыта, но открывается,
      когда пользователь активирует соответствующий триггер.</p>
      </div>
    </div>
     `;
    this.container.insertAdjacentHTML('beforeend', bindToHtml);
  }

  buttonClick() {
    const btn = this.container.querySelector('.collapse');
    const tooltip = document.querySelector('.collapse-element');
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const { target } = e;
      const { top, left } = target.getBoundingClientRect();
      tooltip.style.left = `${left}px`;
      tooltip.style.top = `${top + 70}px`;
      if (tooltip.classList.contains('open')) {
        tooltip.classList.remove('open');
        tooltip.style.height = null;
        return;
      }
      tooltip.classList.add('open');
      tooltip.style.height = `${tooltip.scrollHeight}px`;
    });
  }
}
