// Función para la primera comparación
function runSolution1() {
    let numeroUn = 1;
    let stringUn = '1';

    clearConsole(1);

    if (numeroUn === stringUn) {
        logToConsole(1, 'Las variables numeroUn y stringUn tienen el mismo valor y el mismo tipo');
    } else if (numeroUn == stringUn) {
        logToConsole(1, 'Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes');
    } else {
        logToConsole(1, 'Las variables numeroUn y stringUn no tienen el mismo valor');
    }
}

// Función para la segunda comparación
function runSolution2() {
    let numeroTreinta = 30;
    let stringTreinta = '30';

    clearConsole(2);

    if (numeroTreinta === stringTreinta) {
        logToConsole(2, 'Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo');
    } else {
        logToConsole(2, 'Las variables numeroTreinta y stringTreinta no tienen el mismo tipo');
    }
}

// Función para la tercera comparación
function runSolution3() {
    let numeroDiez = 10;
    let stringDiez = '10';

    clearConsole(3);

    if (numeroDiez === stringDiez) {
        logToConsole(3, 'Las variables numeroDiez y stringDiez tienen el mismo valor y el mismo tipo');
    } else if (numeroDiez == stringDiez) {
        logToConsole(3, 'Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes');
    } else {
        logToConsole(3, 'Las variables numeroDiez y stringDiez no tienen el mismo valor');
    }
}

// Función para mostrar mensajes en la consola correcta
function logToConsole(consoleNumber, message) {
    const consoleContent = document.getElementById(`consoleContent${consoleNumber}`);
    if (consoleContent) {
        const newMessage = document.createElement('p');
        newMessage.textContent = message;
        consoleContent.appendChild(newMessage);
    } else {
        console.error('No se encontró el elemento de la consola en el HTML.');
    }
}

// Función para limpiar la consola correcta
function clearConsole(consoleNumber) {
    const consoleContent = document.getElementById(`consoleContent${consoleNumber}`);
    if (consoleContent) {
        consoleContent.innerHTML = '';
    } else {
        console.error('No se encontró el elemento de la consola en el HTML.');
    }
}
