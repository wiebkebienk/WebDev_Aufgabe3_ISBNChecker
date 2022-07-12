const button = document.getElementById("Check")
const input = document.getElementById('numbers')

button.addEventListener("click", checkISBN)

function checkISBN(checkSum) {
    //alert("checkISBN");
        if(input.value[9] === checkSum){
            userFeedback.innerHTML = "ISBN is valid"
            userFeedback.style.color = "green"
        } else{
            userFeedback.innerHTML = "ISBN is invalid"
            userFeedback.style.color = "red"
        }
        
}