// Начальное значение таймера
let remainingSeconds = 59;
const timerElement = document.querySelector('#timer'); // Элемент для отображения таймера

// Отображаем текущее значение таймера
timerElement.textContent = remainingSeconds;

// Запускаем таймер
const countdownInterval = setInterval(function () {
    remainingSeconds--; // Уменьшаем оставшееся время на одну секунду
    timerElement.textContent = remainingSeconds; // Обновляем экран

    // Если таймер дошёл до нуля
    if (remainingSeconds <= 0) {
        clearInterval(countdownInterval); // Останавливаем таймер
        alert('Вы победили в конкурсе!');
    }
}, 100); // Интервал срабатывания
