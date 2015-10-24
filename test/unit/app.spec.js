describe('app', function () {
    'use strict';

    var answer = window.app;

    describe('getDescendingNumbers', function () {
        it('should return string with numbers separated by spaces', function () {
            expect(answer.getDescendingNumbers(15, 1)).toEqual('15 14 13 12 11 10 9 8 7 6 5 4 3 2 1');
        });
        it('should return false if start greater than stop', function () {
            expect(answer.getDescendingNumbers(1, 15)).toBe(false);
        });
        it('should return false if start equal stop', function () {
            expect(answer.getDescendingNumbers(13, 13)).toBe(false);
        });
        it('should return false if start is string', function () {
            expect(answer.getDescendingNumbers('asa', 1)).toBe(false);
        });
        it('should return false if stop is string', function () {
            expect(answer.getDescendingNumbers(1, 'asa')).toBe(false);
        });
        it('should return false if start is number but string', function () {
            expect(answer.getDescendingNumbers('5', 1)).toBe(false);
        });
    });
});
