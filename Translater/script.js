var btnTranslate =  document.getElementById('btn-translate')
var textInput = document.getElementById('txt-input')
var resultDiv = document.getElementById('output')

// function ClickHandler(){
//     console.log("clicked");
//     var userInput = textInput.value;
//     resultDiv.innerHTML = userInput;
// }
 btnTranslate.addEventListener("click", ClickHandler)

 function ClickHandler(){
    var inputText = textInput.value;
    fetch("https://api.funtranslations.com/translate/navi.json" + "?" + "text=" + inputText)
    .then(response => response.json())
    .then(json =>{
        var translatedText = json.contents.translated 
        resultDiv.innerText = translatedText
    })
    // .catch(errorHandeler)
 }