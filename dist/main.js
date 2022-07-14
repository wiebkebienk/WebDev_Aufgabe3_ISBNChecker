/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((module) => {

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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const {caluclateISBNChecksum} = __webpack_require__(/*! ./script.js */ "./src/script.js")
    
    const button = document.getElementById("Check")
    const input = document.getElementById('numbers')
    const userFeedback = document.getElementById('userFeedback')
    input.addEventListener("focus", resetInfoText);

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

    function resetInfoText(){
        userFeedback.innerHTML = "";
    }
    
})();

/******/ })()
;
//# sourceMappingURL=main.js.map