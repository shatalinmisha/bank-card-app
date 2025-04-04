// Получаем элементы
const card: HTMLElement | null = document.getElementById("card");
const cardText: HTMLInputElement | null = document.getElementById("cardText") as HTMLInputElement;
const cardColor: HTMLSelectElement | null = document.getElementById("cardColor") as HTMLSelectElement;

// Проверяем, что элементы существуют
if (card && cardText && cardColor) {

    // Изменение текста на карте
    cardText.addEventListener("input", () => {
        card.textContent = cardText.value || "Ваша карта";
    });

    // Изменение цвета карты
    cardColor.addEventListener("change", () => {
        card.style.backgroundColor = cardColor.value;
    });

    // Стилизация input при фокусе
    cardText.addEventListener("focus", () => {
        cardText.style.borderColor = "blue";
        cardText.style.backgroundColor = "#e6f2ff";
    });

    // Возвращение стилей при потере фокуса
    cardText.addEventListener("blur", () => {
        cardText.style.borderColor = "#ccc";
        cardText.style.backgroundColor = "white";
    });
}