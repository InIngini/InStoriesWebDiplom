// Определяем блоки
let blocks = {
    1: "Личность",
    2: "Внешность",
    3: "Характер",
    4: "По истории",
    5: "Биография",
    6: "Галерея"
};

// Определяем вопросы для каждого блока
let questions = {
    1: [
        "Прозвище",
        "Дата рождения",
        "Знак зодиака"
    ],
    2: [
        "Цвет волос",
        "Цвет глаз",
        "Рост"
    ],
    3: [
        "Основные черты",
        "Сильные стороны",
        "Слабые стороны"
    ],
    4: [
        "Краткая история",
        "События, повлиявшие на жизнь"
    ],
    5: [
        "Основные достижения",
        "Значимые события"
    ],
    6: [
        "Изображения"
    ]
};

// Пример данных персонажа
let characterData = {
    icon: "~/images/avatar.png", // путь к изображению
    name: "Имя персонажа",
    details: {
        1: {
            nickname: "Прозвище",
            birthDate: "2000-01-01",
            zodiacSign: "Козерог"
        },
        2: {
            hairColor: "Брюнет",
            eyeColor: "Карие",
            height: "180 см"
        },
        3: {
            traits: "Доброта, Ум, Смелость",
            strengths: "Храбрость",
            weaknesses: "Импульсивность"
        },
        4: {
            history: "Краткая история персонажа...",
            lifeEvents: "Важные события..."
        },
        5: {
            achievements: "Значимые достижения...",
            events: "События, которые повлияли..."
        },
        6: {
            images: ["img1.png", "img2.png"]
        }
    }
};

// Функция для заполнения данных о персонаже
function fillCharacterData() {
    // Заполняем иконку и имя персонажа
    document.getElementById('icon').src = characterData.icon;
    document.getElementById('namecharacter').innerText = characterData.name;

    // Заполняем блоки
    let blocksList = document.querySelector('.blocks-list');
    for (let i = 1; i <= Object.keys(blocks).length; i++) {
        let blockDiv = document.createElement('div');
        blockDiv.classList.add('block');
        blockDiv.innerHTML = `<h3>${blocks[i]}</h3>`;

        // Заполняем вопросы и ответы
        let questionList = document.createElement('ul');
        questions[i].forEach((question, index) => {
            let listItem = document.createElement('li');
            let answer = characterData.details[i][Object.keys(characterData.details[i])[index]];
            listItem.innerText = `${question}: ${answer || 'Нет данных'}`;
            questionList.appendChild(listItem);
        });

        blockDiv.appendChild(questionList);
        blocksList.appendChild(blockDiv);
    }
}

// Вызываем функцию для заполнения данных при загрузке страницы
window.onload = fillCharacterData;
