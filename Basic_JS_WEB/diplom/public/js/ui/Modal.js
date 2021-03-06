class Modal { // Класс Modal отвечает за управление всплывающими окнами.
  constructor( element ) { // Устанавливает текущий элемент, регистрирует обработчики событий.
    if (!element) {
      console.error("Передан пустой или несуществующий элемент!");
    } else {
      this.element = element;
      this.registerEvents()
    }
  }

  registerEvents() { // При нажатии на элемент должен закрыть текущее окно.
    this.element.querySelector('button.btn.btn-default.pull-left').addEventListener('click', (e) => {
      e.preventDefault();
      this.onClose(e);
    });
    this.element.querySelector('button.close').addEventListener('click', (e) => {
      e.preventDefault();
      this.onClose(e);
    });
  }

  onClose(e) { // Закрывает текущее окно.
    e.preventDefault();
    this.close();
  }

  unregisterEvents() { // Удаляет обработчики событий.
    this.element.removeEventListener('click', (e) => {
      this.onClose(e);
    });
  }

  open() { // Открывает окно.
    this.element.style.display = "block";
  }

  close(){ // Закрывает окно.
    this.element.style.display = "none";
  }
}
