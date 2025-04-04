// Получаем элементы
var card = document.getElementById("card");
var cardText = document.getElementById("cardText");
var cardColor = document.getElementById("cardColor");
// Проверяем, что элементы существуют
if (card && cardText && cardColor) {
    // Изменение текста на карте
    cardText.addEventListener("input", function () {
        card.textContent = cardText.value || "Ваша карта";
    });
    // Изменение цвета карты
    cardColor.addEventListener("change", function () {
        card.style.backgroundColor = cardColor.value;
    });
    // Стилизация input при фокусе
    cardText.addEventListener("focus", function () {
        cardText.style.borderColor = "blue";
        cardText.style.backgroundColor = "#e6f2ff";
    });
    // Возвращение стилей при потере фокуса
    cardText.addEventListener("blur", function () {
        cardText.style.borderColor = "#ccc";
        cardText.style.backgroundColor = "white";
    });
}
