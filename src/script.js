function caluclateISBNChecksum(numbers) {
        numbersArray = numbers.split('')
        var output = []
        var sum = 0
        var checkSum = ""

        //es müssen 10 Zahlen eingegeben werden
        if (numbers.length != 10) {
            return ("Du musst 10 Ziffern eingeben!");
        }
        
        //Rechnung
        else{
            for(let i = 0; i < 9; i++){
                output[i] = parseInt(numbersArray[i]) * (i + 1)
                sum += output[i]
            }
            checkSum = sum % 11
            return checkSum.toString();
        }
}


module.exports = {
    caluclateISBNChecksum,
}