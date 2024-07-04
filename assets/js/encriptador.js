function encrypt() {
    let inputText = document.getElementById('inputText').value;
    let encryptedText = '';

    const hasUppercase = /[A-Z]/.test(inputText);
    const hasAccents = /[áéíóúÁÉÍÓÚ]/.test(inputText);

    if (hasUppercase || hasAccents) {
        alert('El texto contiene mayúsculas o acentos. Por favor, ingrese solo letras minúsculas y sin acento.');
        return; 
    }

    let i = 0;
    while (i < inputText.length) {
        if (inputText[i] === 'e') {
            encryptedText += 'enter';
        } else if (inputText[i] === 'i') {
            encryptedText += 'imes';
        } else if (inputText[i] === 'a') {
            encryptedText += 'ai';
        } else if (inputText[i] === 'o') {
            encryptedText += 'ober';
        } else if (inputText[i] === 'u') {
            encryptedText += 'ufat';
        } else {
            encryptedText += inputText[i];
        }
        i++;
    }

    if (encryptedText.trim() !== '') {
        document.querySelector('.resultado img').style.visibility = 'hidden';
        document.getElementById('outputContainer').style.visibility = 'visible';
        document.getElementById('outputText').value = encryptedText;
        document.querySelector('.resultado .message-container').style.display = 'none';
        document.getElementById('copyBtn').style.display = 'inline-block';
        document.getElementById('resetBtn').style.display = 'inline-block'; 
        
        document.getElementById('outputTextCopy').value = encryptedText;
        document.getElementById('copyBtnCopy').style.display = 'inline-block'; 
        document.getElementById('resetBtnCopy').style.display = 'inline-block'; 
    } else {
        alert('Ingrese un texto válido para encriptar.');
    }
}

function decrypt() {
    let inputText = document.getElementById('inputText').value;
    let decryptedText = '';

    const hasUppercase = /[A-Z]/.test(inputText);
    const hasAccents = /[áéíóúÁÉÍÓÚ]/.test(inputText);

    if (hasUppercase || hasAccents) {
        alert('El texto contiene mayúsculas o acentos. Por favor, ingrese solo letras minúsculas y sin acento.');
        return; 
    }

    let i = 0;
    while (i < inputText.length) {
        if (inputText.substring(i, i + 5) === 'enter') {
            decryptedText += 'e';
            i += 4;
        } else if (inputText.substring(i, i + 4) === 'imes') {
            decryptedText += 'i';
            i += 3;
        } else if (inputText.substring(i, i + 2) === 'ai') {
            decryptedText += 'a';
            i += 1;
        } else if (inputText.substring(i, i + 4) === 'ober') {
            decryptedText += 'o';
            i += 3;
        } else if (inputText.substring(i, i + 4) === 'ufat') {
            decryptedText += 'u';
            i += 3;
        } else {
            decryptedText += inputText[i];
        }
        i++;
    }

    if (decryptedText.trim() !== '') {
        document.querySelector('.resultado img').style.visibility = 'hidden';
        document.getElementById('outputContainer').style.visibility = 'visible';
        document.getElementById('outputText').value = decryptedText;
        document.querySelector('.resultado .message-container').style.display = 'none';
        document.getElementById('copyBtn').style.display = 'inline-block'; 
        document.getElementById('resetBtn').style.display = 'inline-block'; 
        
        document.getElementById('outputTextCopy').value = decryptedText;
        document.getElementById('copyBtnCopy').style.display = 'inline-block'; 
        document.getElementById('resetBtnCopy').style.display = 'inline-block'; 
    } else {
        alert('Ingrese un texto válido para desencriptar.');
    }
}


//Copiar

function copyToClipboard() {
    let outputText = document.getElementById('outputText');
    outputText.select();
    outputText.setSelectionRange(0, 99999); 
    document.execCommand('copy');
    alert('¡Texto copiado al portapapeles!');
}


//Resetear 

function resetPage() {
    window.location.reload();
}


//Animación para el placeholder de inputText

function typeEffect() {
    const placeholderText = "Ingrese el texto aquí .."; 
    const inputTextarea = document.getElementById('inputText');
    let index = 0;

    function typeLetter() {
        if (index <= placeholderText.length) {
            inputTextarea.setAttribute('placeholder', placeholderText.slice(0, index));
            index++;
            setTimeout(typeLetter, 150); 
        }
    }

    typeLetter();
}

window.addEventListener('load', typeEffect);


// Animación para el placeholder de outputTextCopy y outputText
function typeEffectOutput() {
    const outputTextareaCopy = document.getElementById('outputTextCopy');
    const outputTextarea = document.getElementById('outputText');
    const placeholderText = "El resultado se mostrará aquí";
    let index = 0;

    function typeLetter() {
        if (index <= placeholderText.length) {
            outputTextareaCopy.setAttribute('placeholder', placeholderText.slice(0, index));
            outputTextarea.setAttribute('placeholder', placeholderText.slice(0, index));
            index++;
            setTimeout(typeLetter, 150); 
        }
    }

    typeLetter();
}

window.addEventListener('load', typeEffectOutput);

