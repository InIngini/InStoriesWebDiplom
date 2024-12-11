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
    "1": {
        icon: "/images/avatar.png", // путь к изображению
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
    }
};

let character = {
    "1": {
        icon: "/images/avatar.png", // путь к изображению
        name: "Имя персонажа"
    }
};


// Функция для заполнения данных о персонаже
function loadCharacterData() {
    for (let key in characterData) {
        const character = characterData[key];

        // Заполняем иконку и имя персонажа
        document.getElementById('icon').src = character.icon;
        document.getElementById('namecharacter').innerText = character.name;

        // Заполняем блоки
        let blocksList = document.querySelector('.character-blocks-list');
        // Предполагаем, что blocks — это объект с ключами и массивами значений
        for (let i = 1; i <= Object.keys(blocks).length; i++) {
            let blockDiv = document.createElement('div');
            blockDiv.classList.add('block');
            blockDiv.innerHTML = `<h3>${blocks[i]}</h3>`; // Используем обратные кавычки для интерполяции

            // Создаем список вопросов и ответов
            let questionList = document.createElement('ul');
            questions[i].forEach((question, index) => {
                let listItem = document.createElement('li');
                let answer = character.details[i][Object.keys(character.details[i])[index]];
                listItem.innerText = `${question}: ${answer || 'Нет данных'}`; // Используем обратные кавычки для интерполяции
                questionList.appendChild(listItem);
            });

            blockDiv.appendChild(questionList);
            blocksList.appendChild(blockDiv);
        }
    }
}


function loadCharacter() {
    let characterListDiv = document.querySelector('.character-list');

    // Проходим по всем персонажам в объекте character
    for (let key in character) {
        const charData = character[key];

        // Создаем элемент для персонажа
        const characterDiv = document.createElement('div');
        characterDiv.classList.add('character');

        // Заполняем содержимое элемента
        characterDiv.innerHTML = `
            <img src="${charData.icon}" alt="${charData.name}" class="character-icon"> <!-- Иконка персонажа -->
            <h2 class="character-name">${charData.name}</h2> <!-- Имя персонажа -->
        `;

        // Добавляем элемент персонажа в список
        characterListDiv.appendChild(characterDiv);
    }
}

// Подключение к загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
    loadCharacter();
    loadCharacterData(); // Если у вас еще есть функция для заполнения данных
});
