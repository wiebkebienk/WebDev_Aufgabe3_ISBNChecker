function caluclateISBNChecksum(isbn) {
        isbnArray = isbn.split('')
        var output = []
        var sum = 0
        var checkSum = ""

        //es müssen 10 Zahlen eingegeben werden
        if (isbn.length != 10) {
            return ("Du musst 10 Ziffern eingeben!");
        }
        
        //Rechnung
        else{
            for(let i = 0; i < 9; i++){
                output[i] = parseInt(isbnArray[i]) * (i + 1)
                console.log(output[i]);
                sum += output[i]
            }
            console.log(sum)
            checkSum = sum % 11
            return checkSum.toString()
        }
}

module.exports = {
    caluclateISBNChecksum
}
