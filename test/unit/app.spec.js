describe('app', function () {
    'use strict';

    var answer = window.app;

    describe('calculateArea', function () {
        it('should return correct value and success message', function () {
            expect(answer.calculateArea(3, 4, 1, 'Success', 'Error')).toEqual({area: 1, message: 'Success'});
            expect(answer.calculateArea(4, 3, 1, 'Success', 'Error')).toEqual({area: 1, message: 'Success'});
            expect(answer.calculateArea(4, 3, 0, 'Success', 'Error')).toEqual({area: 4, message: 'Success'});
        });
        it('should return value and error message', function () {
            expect(answer.calculateArea(3, 4, 3, 'Success', 'Error')).toEqual({area: -5, message: 'Error'});
        });
        it('should return 0 and null message', function () {
            expect(answer.calculateArea(4, 4, 1, 'Success', 'Error')).toEqual({area: 0, message: 'Big null'});
        });
        it('should return correct false', function () {
            expect(answer.calculateArea('', '', '', '', '')).toEqual(false);
            expect(answer.calculateArea(3, '', '', '', '')).toEqual(false);
            expect(answer.calculateArea(3, 4, '', '', '')).toEqual(false);
            expect(answer.calculateArea(3, '', 1, '', '')).toEqual(false);
            expect(answer.calculateArea(3, 4, 1, 1, '')).toEqual(false);
            expect(answer.calculateArea(3, 4, 1, '', 1)).toEqual(false);
        });
    });
});
