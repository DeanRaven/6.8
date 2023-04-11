const  consoleLog = document.querySelector('#consoleLog');
consoleLog.addEventListener('click', () => {
    alert('Метод для вывода сообщения в веб-консоль')
})

const Alert = document.querySelector('#Alert');
Alert.addEventListener('click', () => {
    alert('Метод для вывода сообщения в веб-консоль')
})
const Prompt = document.querySelector('#Prompt');
Prompt.addEventListener('click', () => {
    prompt('Метод для вывода сообщения в веб-консоль')
})