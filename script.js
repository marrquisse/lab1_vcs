// 1. Функція вибору кількості квітів (змінні, розгалуження, цикли while/if-else)
function selectQuantity() {
    let count = prompt("Скільки троянд ви б хотіли у свій ідеальний букет?", "15");
    let isOrdering = true;

    while (isOrdering) {
        if (count === null) {
            alert("Замовлення скасовано. Чекаємо на вас знову!");
            break; 
        }

        let number = parseInt(count);
        if (isNaN(number) || number <= 0) {
            count = prompt("Будь ласка, введіть коректну кількість троянд цифрами.", "15");
        } else if (number > 101) {
            count = prompt("Ого, 101+ троянд — це розкішно! Введіть меншу кількість для автоматичного прорахунку або зателефонуйте нам.", "15");
        } else if (number >= 50) {
            alert(`Кількість квітів: ${number}. Це буде справді величний букет!`);
            isOrdering = false;
        } else {
            alert(`Кількість квітів: ${number}. Свіжий букет буде зібрано найближчим часом!`);
            isOrdering = false;
        }
    }
}

// 2. Функція виводу інформації (з параметром за замовчуванням)
function showFloristInfo(lastName, firstName, position = "Флорист-дизайнер") {
    alert(`Наш провідний спеціаліст:\n\nПрізвище: ${lastName}\nІм'я: ${firstName}\nПосада: ${position}\n\nДякуємо за довіру до нашої студії!`);
}

// 3. Функція порівняння двох рядків
function compareBouquetsDescription(str1, str2) {
    if (str1.length > str2.length) {
        alert(`Порівняння назв:\n\nДовша назва: "${str1}"`);
    } else if (str2.length > str1.length) {
        alert(`Порівняння назв:\n\nДовша назва: "${str2}"`);
    } else {
        alert("Назви мають однакову кількість символів!");
    }
}

// 4. Функція зміни фону (Об'єкт document + setTimeout)
function activateRomanticMode() {
    let originalColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#FFFACD"; 
    alert("Включено романтичне освітлення на 30 секунд!");

    setTimeout(() => {
        document.body.style.backgroundColor = originalColor; 
    }, 30000);
}

// 5. Перенаправлення браузера (Об'єкт location)
function gotoCatalog() {
    alert("Зараз вас буде перенаправлено до нашого повного каталогу...");
    location.href = "catalog.html";
}

// 6. Маніпуляції з DOM (Завантаження Спеціальної пропозиції)
function populateBouquetOfTheWeek() {
    // getElementById та querySelectorAll
    let container = document.getElementById("dom-test-container");
    let items = document.querySelectorAll(".dom-item");

    // innerHTML, textContent, outerHTML
    items[0].innerHTML = "<b>Елегантна композиція з рожевих півоній та евкаліпта.</b>";
    items[1].textContent = "Склад: Півонії (7 шт), Евкаліпт, Стрічка.";
    items[2].outerHTML = "<p class='dom-item' style='color: green; font-weight: bold;'>Сьогодні доставка цього букета — безкоштовна!</p>";

    // nodeValue / data (змінюємо прихований коментар HTML)
    let firstNode = container.firstChild;
    if (firstNode && firstNode.nodeType === 8) { 
        firstNode.data = " Дані успішно завантажені скриптом ";
    }

    // createElement, createTextNode, append
    let newBtn = document.createElement("button");
    let btnText = document.createTextNode("💳 Оформити замовлення");
    newBtn.append(btnText); 
    newBtn.style.padding = "8px 15px";
    newBtn.style.backgroundColor = "#FF1493";
    newBtn.style.color = "white";
    newBtn.style.border = "none";
    newBtn.style.borderRadius = "5px";
    newBtn.style.cursor = "pointer";

    // prepend, after
    container.prepend(document.createElement("hr")); 
    container.after(newBtn); 

    // replaceWith 
    let oldPara = document.getElementById("replace-me");
    let newPara = document.createElement("p");
    newPara.innerHTML = "<i>⭐⭐⭐⭐⭐ «Неймовірний букет, дівчина в захваті!» — Максим</i>";
    oldPara.replaceWith(newPara); 

    // remove 
    let removePara = document.getElementById("remove-me");
    if(removePara) removePara.remove(); 

    alert("✨ Спеціальну пропозицію успішно згенеровано!");
}