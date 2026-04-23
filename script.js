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

// 2. Функція виводу інформації 
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

// 5. Перенаправлення браузера 
function gotoCatalog() {
    alert("Зараз вас буде перенаправлено до нашого повного каталогу...");
    location.href = "catalog.html";
}

// 6. Маніпуляції з DOM 
function populateBouquetOfTheWeek() {
    // getElementById та querySelectorAll
    let container = document.getElementById("dom-test-container");
    let items = document.querySelectorAll(".dom-item");

    // innerHTML, textContent, outerHTML
    items[0].innerHTML = "<b>Елегантна композиція з рожевих півоній та евкаліпта.</b>";
    items[1].textContent = "Склад: Півонії (7 шт), Евкаліпт, Стрічка.";
    items[2].outerHTML = "<p class='dom-item' style='color: green; font-weight: bold;'>Сьогодні доставка цього букета — безкоштовна!</p>";

    // nodeValue / data 
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
// ЛАБОРАТОРНА 7 

//  Обробник події через АТРИБУТ  
function likeBouquet() {
    alert("Дякуємо! Ви вподобали 'Букет Дня'.");
}

function initLab7Events() {
    
    //  Обробник події через ВЛАСТИВІСТЬ 
    let promoImg = document.getElementById("promo-image");
    if (promoImg) {
        promoImg.onmouseover = function() {
            this.style.boxShadow = "0 0 20px #FF1493"; 
        };
        promoImg.onmouseout = function() {
            this.style.boxShadow = "none"; 
        };
    }

    //  Метод addEventListener: різні обробники на одну подію
    let subscribeBtn = document.getElementById("subscribe-btn");
    if (subscribeBtn) {
        function alertThanks() { alert("Дякуємо за підписку на квіткові оновлення!"); }
        function changeBtnText() { 
            subscribeBtn.textContent = "✓ Ви підписані"; 
            subscribeBtn.style.backgroundColor = "gray"; 
        }
        // Дві функції на один клік
        subscribeBtn.addEventListener("click", alertThanks);
        subscribeBtn.addEventListener("click", changeBtnText);
    }

    //  Об'єкт-обробник, handleEvent, currentTarget та removeEventListener
    let secretBox = document.getElementById("secret-box");
    let secretHandler = {
        handleEvent(event) {
            alert(`Ваш таємний промокод: ROSEA15\n(Спрацював елемент: ${event.currentTarget.tagName})`);
            event.currentTarget.textContent = "Промокод ROSEA15 активовано!";
            event.currentTarget.style.backgroundColor = "#FFE4E1";
            // видаляємо обробник, щоб промокод видавався лише 1 раз
            event.currentTarget.removeEventListener("click", this);
        }
    };
    if (secretBox) {
        secretBox.addEventListener("click", secretHandler);
    }

    //  Делегування подій у Списку (event.target)
    let categoryList = document.getElementById("category-list");
    if (categoryList) {
        categoryList.addEventListener("click", function(event) {
            if (event.target.tagName === "LI") {
                // Знімаємо підсвітку з усіх
                for (let li of categoryList.children) {
                    li.style.backgroundColor = "white";
                    li.style.fontWeight = "normal";
                }
                // Підсвічуємо той пункт, на який клікнули
                event.target.style.backgroundColor = "#FFF0F5";
                event.target.style.fontWeight = "bold";
            }
        });
    }

    //  Меню кнопок: один обробник та data-* атрибути
    class MenuActions {
        constructor(elem) {
            this._elem = elem;
            elem.onclick = this.onClick.bind(this);
        }
        sortByPrice() { alert("Букети відсортовано від найдешевших до найдорожчих."); }
        showPopular() { alert("Показано хіти продажу!"); }
        resetFilters() { alert("Всі фільтри скинуто."); }
        
        onClick(event) {
            let action = event.target.dataset.action;
            if (action && this[action]) {
                this[action]();
            }
        }
    }
    let actionMenu = document.getElementById("action-menu");
    if (actionMenu) {
        new MenuActions(actionMenu);
    }
}

//  Патерн "Поведінка" (Behavior) через data-* атрибут (Глобальний обробник)
document.addEventListener("click", function(event) {
    if (event.target.dataset.behavior === "counter") {
        let count = parseInt(event.target.dataset.count);
        count++;
        event.target.dataset.count = count;
        event.target.textContent = `👍 Оцінити магазин: ${count}`;
    }
});


window.onload = function() {
    initLab7Events(); 
};

// ЛАБОРАТОРНА 8
function initLab8Events() {
    
    // --- mouseover, mouseout ---
    let gallery = document.getElementById("gallery-container");
    let infoDisplay = document.getElementById("info-display");

    if (gallery) {
        gallery.addEventListener("mouseover", function(event) {
            let target = event.target; 
            let relatedTarget = event.relatedTarget; 

            if (target.classList.contains("flower-item")) {
                target.style.backgroundColor = "#FFE4E1"; 
                target.style.transform = "scale(1.1)";    
                infoDisplay.textContent = target.dataset.info; 
                console.log(`Наведено на: ${target.textContent}. Курсор прийшов з тегу: ${relatedTarget ? relatedTarget.tagName : 'Невідомо'}`);
            }
        });

        gallery.addEventListener("mouseout", function(event) {
            let target = event.target;
            if (target.classList.contains("flower-item")) {
                target.style.backgroundColor = "#FFF"; 
                target.style.transform = "scale(1)";
                infoDisplay.textContent = "..."; 
            }
        });
    }

    // --- DRAG-AND-DROP ---
    let dragFlower = document.getElementById("draggable-flower");
    let dropBasket = document.getElementById("drop-basket");
    let originalParent = dragFlower ? dragFlower.parentNode : null; // Запам'ятовуємо, де квітка була спочатку

    if (dragFlower && dropBasket) {
        
        dragFlower.onmousedown = function(event) {
            dragFlower.style.position = 'absolute';
            dragFlower.style.zIndex = 1000;
            document.body.append(dragFlower);

            let shiftX = dragFlower.offsetWidth / 2;
            let shiftY = dragFlower.offsetHeight / 2;

            function moveAt(pageX, pageY) {
                dragFlower.style.left = pageX - shiftX + 'px';
                dragFlower.style.top = pageY - shiftY + 'px';
            }

            moveAt(event.pageX, event.pageY);

            function onMouseMove(event) {
                moveAt(event.pageX, event.pageY); 
                
                dragFlower.style.display = 'none'; 
                let elemBelow = document.elementFromPoint(event.clientX, event.clientY); 
                dragFlower.style.display = 'flex'; 

                if (!elemBelow) return;

                let droppableBelow = elemBelow.closest('#drop-basket');
                if (droppableBelow) {
                    dropBasket.style.backgroundColor = '#FFE4E1'; 
                } else {
                    dropBasket.style.backgroundColor = '#FFFAFA'; // ВИПРАВЛЕНО КОЛІР
                }
            }

            document.addEventListener('mousemove', onMouseMove);

            dragFlower.onmouseup = function(event) {
                document.removeEventListener('mousemove', onMouseMove);
                dragFlower.onmouseup = null;

                dragFlower.style.display = 'none';
                let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
                dragFlower.style.display = 'flex';

                if (elemBelow && elemBelow.closest('#drop-basket')) {
                    // Успішний Drop! Ховаємо квітку і показуємо красивий букет
                    dragFlower.style.display = 'none';
                    dropBasket.textContent = "💐"; // Без плюсів! Тільки букет
                    dropBasket.style.backgroundColor = "#D88398";
                    
                    setTimeout(() => {
                        alert("Квітку успішно додано до кошика!");
                        
                        // Відновлюємо кошик
                        dropBasket.textContent = "🧺";
                        dropBasket.style.backgroundColor = "#FFFAFA"; // ВИПРАВЛЕНО КОЛІР
                        
                        // Повертаємо квітку на її рідне місце
                        originalParent.append(dragFlower);
                        dragFlower.style.position = ''; // Знімаємо absolute
                        dragFlower.style.left = '';
                        dragFlower.style.top = '';
                        dragFlower.style.zIndex = '';
                        dragFlower.style.display = 'flex'; // Показуємо знову
                        
                    }, 50);
                } else {
                    // Кинули повз кошик — повертаємо колір
                    dropBasket.style.backgroundColor = '#FFFAFA'; // ВИПРАВЛЕНО КОЛІР
                }
            };
        };

        dragFlower.ondragstart = function() {
            return false;
        };
    }
}

// ЄДИНИЙ window.onload, який запускає обидві лаби
window.onload = function() {
    initLab7Events(); 
    initLab8Events(); 
};