document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("processButton").addEventListener("click", processText);
    document.getElementById("copyButton").addEventListener("click", copyToClipboard);
  });
  
  function processText() {
    var mode = document.getElementById("mode").value;
    var inputText = document.getElementById("inputText").value;
    var outputText = "";
  
    if (mode === "encrypt") {
      outputText = encrypt(inputText);
    } else {
      outputText = decrypt(inputText);
    }
  
    document.getElementById("outputText").value = outputText;
  }
  
  function encrypt(text) {
    return text.replace(/e/g, "enter")
               .replace(/i/g, "imes")
               .replace(/a/g, "ai")
               .replace(/o/g, "ober")
               .replace(/u/g, "ufat");
  }
  
  function decrypt(text) {
    return text.replace(/enter/g, "e")
               .replace(/imes/g, "i")
               .replace(/ai/g, "a")
               .replace(/ober/g, "o")
               .replace(/ufat/g, "u");
  }
  
  function copyToClipboard() {
    var textToCopy = document.getElementById("outputText").value;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert("¡Texto copiado al portapapeles!");
      })
      .catch(err => {
        console.error('Error al copiar el texto: ', err);
      });
  }
  
  
  