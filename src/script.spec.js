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

