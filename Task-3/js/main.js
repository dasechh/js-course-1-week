const main = () => { // Объявление функции main
  let p = document.getElementById("ico-volume"); // Обозначение тега p по его айди
  let lenght = document.getElementById("length").value; // Получение значения из input с id 'length'
  return (p.innerHTML = ((5 * lenght ** 3) / 12) * (3 + Math.sqrt(5))); // Изменение содержимого тега p, расчёт объёма икосаэдра
};

document.getElementById("submit").addEventListener("click", main); // Ожидание нажатия кнопки, при нажатии запуск функции main