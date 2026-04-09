// 1. Власна функція "Діалог з користувачем" (змінні, розгалуження, цикли)
function userDialog() {
    let isOrdering = true;
    while (isOrdering) {
        let count = prompt("Скільки троянд ви б хотіли у свій ідеальний букет?", "15");
        
        if (count === null) {
            alert("Скасовано. Чекаємо на вас знову!");
            break; // Вихід з циклу, якщо натиснули "Скасувати"
        }

        let number = parseInt(count);
        if (isNaN(number) || number <= 0) {
            alert("Будь ласка, введіть коректне число.");
        } else if (number >= 101) {
            alert("Ого! 101+ троянд — це розкішно. Для вас діятиме VIP-знижка.");
            isOrdering = false;
        } else {
            alert(`Чудово! Ваш букет з ${number} троянд буде зібрано з любов'ю.`);
            isOrdering = false;
        }
    }
}

// 2. Функція виводу інформації про розробника (з параметром за замовчуванням)
function showDevInfo(lastName, firstName, position = "Флорист-розробник") {
    alert(`Розробник сторінки:\nПрізвище: ${lastName}\nІм'я: ${firstName}\nПосада: ${position}`);
}

// 3. Функція порівняння двох рядків
function compareStrings(str1, str2) {
    if (str1.length > str2.length) {
        alert(`Більший рядок: "${str1}"`);
    } else if (str2.length > str1.length) {
        alert(`Більший рядок: "${str2}"`);
    } else {
        alert("Рядки повністю однакові за довжиною!");
    }
}

// 4. Зміна фону сторінки на 30 секунд (Робота з document)
function changeBgFor30Sec() {
    let originalColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#E6E6FA"; 
    alert("Фон сторінки змінено на 30 секунд!");

    setTimeout(() => {
        document.body.style.backgroundColor = originalColor; 
    }, 30000);
}

// 5. Перенаправлення браузера (Робота з location)
function redirectPage() {
    alert("Зараз вас буде перенаправлено на сторінку Каталогу.");
    location.href = "catalog.html";
}

// 6. Маніпуляції з DOM-деревом
function runDOMManipulations() {
    // getElementById та querySelectorAll
    let container = document.getElementById("dom-test-container");
    let items = document.querySelectorAll(".dom-item");

    // Властивості DOM-вузла (innerHTML, textContent, outerHTML)
    items[0].innerHTML = "<b>Текст змінено через innerHTML (теги працюють)</b>";
    items[1].textContent = "Змінено через textContent (теги ігноруються)";
    items[2].outerHTML = "<p class='dom-item' style='color: blue;'>Змінено через outerHTML (замінило весь тег)</p>";

    // nodeValue / data (змінюємо прихований коментар)
    let firstNode = container.firstChild;
    if (firstNode.nodeType === 8) { // 8 означає вузол коментаря
        firstNode.data = " Цей коментар було змінено через JS data ";
    }

    // Створення елементів (createElement, createTextNode)
    let newBtn = document.createElement("button");
    let btnText = document.createTextNode("Я нова кнопка з JS!");
    newBtn.append(btnText); // append (вставка тексту в кнопку)

    // Вставка (prepend, after)
    container.prepend(document.createElement("hr")); // prepend (на самий початок контейнера)
    container.after(newBtn); // after (вставити одразу ПІСЛЯ контейнера)

    // Заміна та видалення (replaceWith, remove)
    let oldPara = document.getElementById("replace-me");
    let newPara = document.createElement("p");
    newPara.innerHTML = "<i>Цей абзац успішно ЗАМІНЕНО (replaceWith)</i>";
    oldPara.replaceWith(newPara); 

    let removePara = document.getElementById("remove-me");
    removePara.remove(); 

    alert("Маніпуляції виконано! Подивіться на текстовий блок внизу.");
}