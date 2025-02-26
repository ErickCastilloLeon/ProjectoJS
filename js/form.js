const validateBtn = document.getElementById('validateBtn');
const emailInput = document.getElementById('email');
const emailFeedback = document.getElementById('emailFeedback');

validateBtn.addEventListener('click', function () {
    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^@]{3,}@[^@.]{1,}\.[^@]{2,}$/;

    if (emailRegex.test(emailValue)) {
        emailFeedback.textContent = `"${emailValue}" is valid :D`;
        emailFeedback.style.color = 'green';
    } else {
        emailFeedback.textContent = `"${emailValue}" is not correct, please retry :l`;
        emailFeedback.style.color = 'red';
    }
});

//-------------------------------------------

const countrySelect = document.getElementById('country');
const provinceContainer = document.getElementById('provinceContainer');
const townContainer = document.getElementById('townContainer');

countrySelect.addEventListener('change', function () {
    if (countrySelect.value === 'Spain') {
        provinceContainer.style.display = 'block';
        townContainer.style.display = 'block';
    } else {
        provinceContainer.style.display = 'none';
        townContainer.style.display = 'none';
    }
});

//-------------------------------------------

const modeButton = document.getElementById('modeButton');
const body = document.body;

let mode = 'original';

modeButton.addEventListener('click', () => {
    if (mode === 'original') {
        body.classList.add('dark-mode');
        modeButton.textContent = 'Dark';
        mode = 'dark';
    } else if (mode === 'dark') {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        modeButton.textContent = 'Light';
        mode = 'light';
    } else if (mode === 'light') {
        body.classList.remove('light-mode');
        modeButton.textContent = 'Mode';
        mode = 'original';
    }
});