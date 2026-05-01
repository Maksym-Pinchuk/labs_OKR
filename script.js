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
    let mainHeading = document.getElementById("main-title");
    let cards = document.querySelectorAll(".game-card");

    if (mainHeading) {
        mainHeading.innerHTML = "✨ Оновлений каталог ігор ✨";
    }

    let container = document.querySelector(".game-gallery");
    
    let newInfo = document.createElement("div");
    newInfo.style.color = "#a3e635";
    newInfo.style.marginTop = "20px";
    let textNode = document.createTextNode("Нова секція: Акції тижня!");
    newInfo.append(textNode);

    container.prepend(newInfo);

    if (cards.length > 0) {
        let firstCardText = cards[0].querySelector("b").firstChild;
        firstCardText.nodeValue = "🔥 Топ-гра: Counter-Strike 2";
    }

    let oldNotice = document.getElementById("temp-notice");
    if (oldNotice) oldNotice.remove();
}