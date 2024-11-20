const gifs = [
    'images/gif/1.gif',
    'images/gif/2.gif',
    'images/gif/3.gif',
    'images/gif/4.gif',
    'images/gif/5.gif',
    'images/gif/6.gif'
];

const backgroundGif = document.getElementById('background-gif');

function getRandomGif() {
    const randomIndex = Math.floor(Math.random() * gifs.length);
    return gifs[randomIndex];
}

function changeGif() {
    backgroundGif.src = getRandomGif();
}

// Смена GIF каждые 5 секунд
setInterval(changeGif, 5000);

// Инициализация с первым GIF
changeGif();




// Пример массива с новостями
const newsData = [
    {
        title: "Первая новость",
        text: "Это текст первой новости. Она очень интересная и познавательная.",
        date: "20.11.2924"
    },
    {
        title: "Вторая новость",
        text: "Вторая новость рассказывает о важных событиях в мире.",
        date: "21.11.2924"
    },
    {
        title: "Третья новость",
        text: "Третья новость о последних достижениях в науке и технике.",
        date: "22.11.2924"
    }
];

let currentIndex = 0; // Индекс текущей новости

function updateOpacity(opacity) {
    const newsTitle = document.getElementById("news-title");
    const newsText = document.getElementById("news-text");
    const newsDate = document.getElementById("date");

    // Устанавливаем новую прозрачность
    newsTitle.style.opacity = opacity;
    newsText.style.opacity = opacity;
    newsDate.style.opacity = opacity;
}

// Функция для постепенного изменения прозрачности
function fadeOut(callback) {
    let opacity = 1; // Начальная непрозрачность
    const interval = setInterval(() => {
        opacity -= 0.1; // Уменьшаем непрозрачность
        if (opacity <= 0) {
            clearInterval(interval); // Останавливаем интервал
            updateOpacity(0); // Устанавливаем окончательную непрозрачность
            if (callback) callback(); // Вызываем колбек, если он есть
        } else {
            updateOpacity(opacity); // Обновляем прозрачность
        }
    }, 100); // Интервал 100 мс
}

function fadeIn() {
    let opacity = 0; // Начальная прозрачность
    const interval = setInterval(() => {
        opacity += 0.1; // Увеличиваем непрозрачность
        if (opacity >= 1) {
            clearInterval(interval); // Останавливаем интервал
            updateOpacity(1); // Устанавливаем окончательную непрозрачность
        } else {
            updateOpacity(opacity); // Обновляем прозрачность
        }
    }, 100); // Интервал 100 мс
}

// Флаг для предотвращения повторного нажатия на кнопки во время анимации
let isAnimating = false;

// Функция для обновления блока новостей
function updateNews(index) {
    const newsTitle = document.getElementById("news-title");
    const newsText = document.getElementById("news-text");
    const newsDate = document.getElementById("date");

    // Проверяем, существует ли новость с таким индексом
    if (index >= 0 && index < newsData.length) {
        if (newsTitle.textContent == "Новая новость") {
            newsTitle.textContent = newsData[index].title;
            newsText.textContent = newsData[index].text;
            newsDate.textContent = newsData[index].date;
        }
        else {
            if (!isAnimating) {
                isAnimating = true; // Устанавливаем флаг анимации
                fadeOut(() => {
                    // Обновляем текст новостей
                    newsTitle.textContent = newsData[index].title;
                    newsText.textContent = newsData[index].text;
                    newsDate.textContent = newsData[index].date;

                    // Затем восстанавливаем непрозрачность
                    fadeIn();
                    isAnimating = false; // Сбрасываем флаг анимации
                });
            }
        }
    } else {
        console.error("Новость с таким индексом не найдена. Разработчик лошара.");
    }
}

// Функции для переключения новостей
function showPrevNews() {
    if (currentIndex > 0) {
        currentIndex--;
        updateNews(currentIndex);
    } else {
        currentIndex = newsData.length - 1;
        updateNews(currentIndex);
    }
}

function showNextNews() {
    if (currentIndex < newsData.length - 1) {
        currentIndex++;
        updateNews(currentIndex);
    } else {
        currentIndex = 0;
        updateNews(currentIndex);
    }
}

// Привязываем события к кнопкам
document.getElementById("prev").addEventListener("click", showPrevNews);
document.getElementById("next").addEventListener("click", showNextNews);

// Обновляем начальную новость
updateNews(currentIndex);
setInterval(showNextNews, 15000);


function goToBook() {
    window.location.href = '/book';
}