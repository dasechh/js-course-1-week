const main = () => { // Объявление функции main
    let p = document.getElementById('hello-user-p'); // Обозначение тега p по его айди
    let username = document.getElementById('username').value; // Получение значения из input
    return p.innerHTML = 'Привет, ' + username + '!'; // Изменение содержимого заданного тега p
}
document.getElementById('button').addEventListener('click',main) // Ожидание нажатия кнопки, при нажатии запуск функции main