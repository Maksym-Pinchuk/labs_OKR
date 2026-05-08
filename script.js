function userDialog() {
    let access = false;
    let attempts = 3;

    while (attempts > 0 && !access) {
        let key = prompt(`Введіть секретний код доступу до оглядів (залишилось спроб: ${attempts}):`, "");
        
        if (key === "admin") {
            access = true;
            alert("Доступ до секретних матеріалів ігор відкрито!");
        } else if (key === null) {
            break;
        } else {
            attempts--;
            if (attempts > 0) alert("Неправильний код. Спробуйте ще раз.");
        }
    }

    if (!access && attempts === 0) {
        alert("Спроби вичерпано. Ви залишаєтесь у режимі гостя.");
    }
}

function showDeveloperInfo(surname, name, position = "Студент-розробник") {
    alert("Про розробника:\n" + surname + " " + name + "\nПосада: " + position);
}

function compareGameTitles(game1, game2) {
    if (game1 === game2) {
        alert("Ви ввели одну й ту саму гру: " + game1);
    }
    else if (game1.length > game2.length) {
        alert("Гра з довшою назвою: " + game1);
    } 
    else if (game2.length > game1.length) {
        alert("Гра з довшою назвою: " + game2);
    } 
    else {
        alert("Назви ігор різні, але однакові за довжиною.");
    }
}

function temporaryBgChange() {
    let body = document.body;
    let oldColor = body.style.backgroundColor;
    body.style.backgroundColor = "#4a0e0e";
    
    alert("Фон змінено на 30 секунд для акценту!");
    
    setTimeout(() => {
        body.style.backgroundColor = oldColor;
    }, 30000);
}

function leaveSite() {
    if (confirm("Ви впевнені, що хочете покинути каталог і перейти на Google?")) {
        location.href = "https://www.google.com";
    }
}

function modifyDOM() {
    let mainHeading = document.getElementById("game-title"); 
    let cards = document.querySelectorAll(".game-card");

    if (mainHeading) {
        mainHeading.innerHTML = "✨ Оновлений огляд Minecraft ✨";
    }

    let container = document.querySelector(".game-gallery");
    
    if (container) {
        let newInfo = document.createElement("div");
        newInfo.style.color = "#a3e635";
        newInfo.style.marginTop = "20px";
        let textNode = document.createTextNode("Нова секція: Акції тижня!");
        newInfo.append(textNode);
        container.prepend(newInfo);
    }

    if (cards.length > 0) {
        let firstCardText = cards[0].querySelector("b").firstChild;
        firstCardText.nodeValue = "🔥 Топ-гра: Counter-Strike 2";
    }

    let oldNotice = document.getElementById("temp-notice");
    if (oldNotice) oldNotice.remove();
}

let toggleBtn = document.getElementById("toggle-desc-btn");
let descBlock = document.getElementById("game-description");

if (toggleBtn && descBlock) {
    toggleBtn.onclick = function() {
        if (descBlock.style.display === "none") {
            descBlock.style.display = "block";
            toggleBtn.textContent = "👁 Сховати опис (властивість)";
        } else {
            descBlock.style.display = "none";
            toggleBtn.textContent = "👁 Показати опис (властивість)";
        }
    };
}

let modBtn = document.getElementById("download-mod-btn");
if (modBtn) {
    modBtn.addEventListener("click", () => {
        console.log("Перевірка сумісності модів з вашою версією...");
    });
    modBtn.addEventListener("click", () => {
        alert("Помилка 404: Сервер модів тимчасово недоступний.");
    });
}

let enableCheatsBtn = document.getElementById("enable-cheats-btn");
let disableCheatsBtn = document.getElementById("disable-cheats-btn");

let clickMonitor = {
    handleEvent(event) {
        console.log(`[Моніторинг] Зафіксовано клік на елементі: ${event.currentTarget.tagName}`);
        alert("Спрацював об'єкт-обробник! Клік по: " + event.currentTarget.tagName);
    }
};

if (enableCheatsBtn && disableCheatsBtn) {
    enableCheatsBtn.addEventListener("click", clickMonitor);
    
    disableCheatsBtn.onclick = function() {
        enableCheatsBtn.removeEventListener("click", clickMonitor);
        alert("Моніторинг вимкнено (removeEventListener спрацював).");
    };
}

let mobsList = document.getElementById("mobs-list");
if (mobsList) {
    mobsList.onclick = function(event) {
        if (event.target.tagName === 'LI') {
            for (let li of mobsList.children) {
                li.style.borderLeft = "none";
                li.style.paddingLeft = "0";
                li.style.color = "inherit";
            }
            event.target.style.borderLeft = "4px solid #a3e635";
            event.target.style.paddingLeft = "10px";
            event.target.style.color = "#a3e635";
            event.target.style.transition = "0.2s";
        }
    };
}

let actionMenu = document.getElementById("action-menu");

let steamActions = {
    buy() { alert("Гру додано в кошик!"); },
    wishlist() { alert("Гру додано до списку бажаного."); },
    share() { alert("Меню 'Поділитися' відкрито."); }
};

if (actionMenu) {
    actionMenu.addEventListener("click", function(event) {
        let action = event.target.dataset.action;
        if (action && steamActions[action]) {
            steamActions[action]();
        }
    });
}

document.addEventListener("click", function(event) {
    if (event.target.dataset.behavior === "rate") {
        let ratingValue = parseInt(event.target.dataset.value);
        let container = event.target.parentElement;
        let allStars = container.querySelectorAll('.star');
        
        allStars.forEach(star => {
            if (parseInt(star.dataset.value) <= ratingValue) {
                star.innerHTML = "★"; 
                star.style.color = "#ffcc00"; 
            } else {
                star.innerHTML = "☆"; 
                star.style.color = "#a3b4c6"; 
            }
        });

        let resultSpan = document.getElementById("rating-result");
        if (resultSpan) {
            resultSpan.textContent = `(Ваша оцінка: ${ratingValue} з 5)`;
        }
    }
});
/* ========================================================== */
/* 👇👇👇 ТУТ ПОЧИНАЄТЬСЯ КОД ДЛЯ 8-Ї ЛАБОРАТОРНОЇ 👇👇👇       */
/* ========================================================== */

// ==========================================
// 1. ПЕРЕВІРКА MOUSEOVER / MOUSEOUT (Галерея)
// ==========================================
let gallery = document.getElementById('resource-gallery');
let log = document.getElementById('log-info');

if (gallery) {
    gallery.onmouseover = function(event) {
        let target = event.target.closest('.resource-item');
        if (!target) return;
        target.style.background = '#66c0f4';
        target.style.transform = 'scale(1.1)';
        
        let from = event.relatedTarget ? event.relatedTarget.tagName : "зовні";
        log.innerText = `Прийшли з: ${from} | Зараз на: ${target.innerText}`;
    };

    gallery.onmouseout = function(event) {
        let target = event.target.closest('.resource-item');
        if (!target) return;
        target.style.background = '';
        target.style.transform = '';
        
        let to = event.relatedTarget ? event.relatedTarget.tagName : "зовні";
        log.innerText = `Пішли до: ${to}`;
    };
}

// 2. Drag-and-Drop (mousedown, mousemove, mouseup)
let diamond = document.getElementById('drag-diamond');

if (diamond) {
    diamond.onmousedown = function(event) {
        // Скасовуємо стандартний Drag-and-Drop браузера
        event.preventDefault();

        // Розраховуємо зсув курсору відносно краю картинки
        let shiftX = event.clientX - diamond.getBoundingClientRect().left;
        let shiftY = event.clientY - diamond.getBoundingClientRect().top;

        diamond.style.position = 'absolute';
        diamond.style.zIndex = 1000;
        document.body.append(diamond);

        function moveAt(pageX, pageY) {
            diamond.style.left = pageX - shiftX + 'px';
            diamond.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        // Слухаємо рух по всьому документу
        document.addEventListener('mousemove', onMouseMove);

        // Відпускаємо кнопку миші
        document.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            document.onmouseup = null;
        };
    };

    diamond.ondragstart = function() {
        return false;
    };
}