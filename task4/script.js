document.querySelector('a').addEventListener('click', (event) => {
    event.preventDefault();
const userText = prompt('Введите текст');
const userTextField = document.querySelector('a');
userTextField.textContent = userText;
console.log('Текст в a изменён на', userText);
})

