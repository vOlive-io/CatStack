async function encryptText(text, key) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);

    const cryptoKey = await crypto.subtle.importKey(
        "raw",
        key,
        "AES-CTR", // Use AES-CTR mode for deterministic encryption
        true,
        ["encrypt"]
    );

    // Set a specific counter value (nonce) for CTR mode
    const counter = new Uint8Array(16); // Set your desired counter value

    const ciphertext = await crypto.subtle.encrypt({ name: "AES-CTR", counter, length: 64 }, cryptoKey, data);

    // Encode the binary ciphertext as a Base64 string
    const ciphertextString = arrayBufferToBase64(ciphertext);

    return { ciphertext: ciphertextString, counter };
}

async function decryptText(ciphertext, counter, key) {
    // Decode the Base64 string back to a binary ciphertext
    const ciphertextArray = base64ToArrayBuffer(ciphertext);

    const cryptoKey = await crypto.subtle.importKey(
        "raw",
        key,
        "AES-CTR", // Use AES-CTR mode for deterministic encryption
        true,
        ["decrypt"]
    );

    const plaintext = await crypto.subtle.decrypt({ name: "AES-CTR", counter, length: 64 }, cryptoKey, ciphertextArray);

    const decoder = new TextDecoder();
    return decoder.decode(plaintext);
}

// Example usage
const secretKeyHex = "YWNjMGM0MWUtZWQwNy00YTQ2LThkMjItY2FlMDJmY2MwMWE1"; // Replace with your secret key in hex format
const secretKey = hexToUint8Array(secretKeyHex);

function hexToUint8Array(hex) {
    const bytes = new Uint8Array(hex.length / 2);
    for (let i = 0; i < hex.length; i += 2) {
        bytes[i / 2] = parseInt(hex.substr(i, 2), 16);
    }
    return bytes;
}

// Function to encode binary data as a Base64 string
function arrayBufferToBase64(buffer) {
    const binary = new Uint8Array(buffer);
    const base64 = btoa(String.fromCharCode.apply(null, binary));
    return base64;
}

// Function to decode a Base64 string to a binary data
function base64ToArrayBuffer(base64) {
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
}

const originalCode = ""; // code to be encrypted

encryptText(originalCode, secretKey)
    .then(({ ciphertext, counter }) => {
        console.log("Encrypted Code (Base64):", ciphertext); // Display ciphertext as Base64 string
        console.log("Counter (Nonce):", new Uint8Array(counter)); // Display the counter used
        return decryptText(ciphertext, counter, secretKey);
    })
    .then(decryptedCode => {
        console.log("Decrypted Code:", decryptedCode);
        if (decryptedCode === originalCode) {
            alert("Code is valid!");
        } else {
            alert("Invalid code!");
        }
    })
    .catch(error => console.error(error));
