const {caluclateISBNChecksum} = require('./script.js')
    
    const button = document.getElementById("Check")
    const input = document.getElementById('numbers')
    const userFeedback = document.getElementById('userFeedback')

    button.addEventListener("click", checkISBN)
    
    function checkISBN() {
      const result= caluclateISBNChecksum(input.value)
        if(result === input.value[9]){
            userFeedback.innerHTML = "ISBN is valid"
            userFeedback.style.color = "green"
        } else{
            userFeedback.innerHTML = "ISBN is invalid"
            userFeedback.style.color = "red"
        }
        
    }