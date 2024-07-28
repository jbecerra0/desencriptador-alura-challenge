
document.addEventListener('DOMContentLoaded', () => {
    const encryptButton = document.getElementById('encrypt-button');
    const decryptButton = document.getElementById('decrypt-button');
    const textInput = document.getElementById('text-input');
    const outputMessage = document.querySelector('.output-message');
    const outputInstruction = document.querySelector('.output-instruction');
    const outputSection = document.querySelector('.output-section img');

    encryptButton.addEventListener('click', () => {
        const text = textInput.value;
        if (text) {
            const encryptedText = encrypt(text);
            outputMessage.textContent = encryptedText;
            outputInstruction.textContent = "Texto encriptado";
            outputSection.style.display = "none";
        }
    });

    decryptButton.addEventListener('click', () => {
        const text = textInput.value;
        if (text) {
            const decryptedText = decrypt(text);
            outputMessage.textContent = decryptedText;
            outputInstruction.textContent = "Texto desencriptado";
            outputSection.style.display = "none";
        }
    });

    function encrypt(text) {
        const encryptionRules = { 'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat' };
        return text.replace(/[eioua]/g, match => encryptionRules[match]);
    }

    function decrypt(text) {
        const decryptionRules = { 'enter': 'e', 'imes': 'i', 'ai': 'a', 'ober': 'o', 'ufat': 'u' };
        return text.replace(/enter|imes|ai|ober|ufat/g, match => decryptionRules[match]);
    }
});
