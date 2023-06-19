let login = prompt("Who are you?")
let message;

 message = (login === 'Сотрудник') ? alert('Привет') : 
(login === 'Директор') ?  alert('Здравствуйте!') : 
(login === '') ? alert('Нет логина') : alert('Я не знаю кто вы!?');

