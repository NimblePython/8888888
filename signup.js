'use strict';

// Подготовка данных

// Отследить событие отправки данных с формы
let form = document.querySelector("#register");
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Отменяем стандартное поведение браузера
    // Здесь код обработки данных формы
    console.log("Форма отправлена!");
});

let data = {};
data.login = "safaroff2@gmail.com";
data.password = "password";

// Преобразуем объект в JSON
let dataJSON = JSON.stringify(data);

// Создаём новый запрос
let xhr = new XMLHttpRequest();
xhr.open('POST', 'http://web4.informatics.ru:82/api/?????', false);

try {
  // Отправляем данные
  xhr.send(dataJSON);
  
  // Проверяем статус ответа
  if (xhr.status === 201) {
    console.log("Данные успешно отправлены!");
    console.log("Отправленные данные: ", JSON.parse(xhr.responseText));
  } else {
    console.log("Произошла ошибка. Код ошибки: " + xhr.status);
  }
} catch (error) {
  console.log("Произошла сетевая ошибка, данные не удалось отправить.");
}