function runSolution1() {
    let numeroUn = 1;
    let stringUn = '1';

    clearConsole(); // Limpiar consola antes de ejecutar

    if (numeroUn === stringUn) {
        logToConsole('Las variables numeroUn y stringUn tienen el mismo valor y el mismo tipo');
    } else if (numeroUn == stringUn) {
        logToConsole('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes');
    } else {
        logToConsole('Las variables numeroUn y stringUn no tienen el mismo valor');
    }
}

function logToConsole(message) {
    const consoleContent = document.getElementById('consoleContent');
    if (consoleContent) {
        const newMessage = document.createElement('p');
        newMessage.textContent = message;
        consoleContent.appendChild(newMessage);
    } else {
        console.error('No se encontró el elemento de la consola en el HTML.');
    }
}

function clearConsole() {
    const consoleContent = document.getElementById('consoleContent');
    if (consoleContent) {
        consoleContent.innerHTML = '';
    } else {
        console.error('No se encontró el elemento de la consola en el HTML.');
    }
}
