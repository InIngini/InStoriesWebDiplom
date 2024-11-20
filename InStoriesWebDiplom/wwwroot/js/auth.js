document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвращаем отправку формы

    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;

    // Здесь можно добавить логику для проверки логина и пароля
    console.log('Логин:', login);
    console.log('Пароль:', password);

    // Пример: сообщение об успешном входе
    alert('Вход выполнен успешно!');
    window.location.href = '/book';
});