const {caluclateISBNChecksum} = require('./script');

//testen, ob Ausgabe stimmt (Rest wird ausgegeben)
    describe('caluclateISBNChecksum', () => {
        [
        {input: '1800562527', output: '7'},
        {input: '396645016X', output: '10'},
        {input: '1491952024', output: '4'},
        {input: '3836286297', output: '7'},
        {input: '396645016X', output: '10'},
        {input: '3960091575', output: '5'},
        {input: '1497408180', output: '0'},
        {input: '3836285231', output: '1'},
        {input: '3836268825', output: '5'},
        {input: '3836273691', output: '1'},
        ]
        .forEach(({input, output}) => {
        it('should return output(rest)', () => {
            expect(caluclateISBNChecksum(input)).toBe(output)
        })
        });
    })

//testen, ob error ausgegeben wir, wenn es zu wenig oder zu viele Zahlen sind
    describe('caluclateISBNChecksum', () => {
        [
        {input: '18062527'},
        {input: '35016X'},
        {input: '149195024'},
        {input: '38297'},
        {input: '39664516X'},
        {input: '39600915575'},
        {input: '14975408180'},
        {input: '3836232525585231'},
        {input: '38362658825'},
        {input: '383627353691'},
        ]
        .forEach(({input}) => {
        it('should return error', () => {
            expect(caluclateISBNChecksum(input)).toBe("Du musst 10 Ziffern eingeben!")
        })
        });
  })