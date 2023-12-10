const nameInput = document.getElementById('field1').value;
const passInput = document.getElementById('field2').value;

const sendButton = document.getElementById('sendForm');
const formValidate = () => {
    console.log('clicked')
    if (nameInput.length===0){alert('Pole imie jest puste. Podaj wartosc')};
    if (passInput.length<8){alert('Haslo jest za krotkie')};
    


}

sendButton.addEventListener('click',formValidate)

