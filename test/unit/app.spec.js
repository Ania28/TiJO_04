describe('app', function () {
    'use strict';
    var app = window.app;

    describe('Division function', function () {
        it('should divide number a by b', function () {
            expect(app.divide(10, 5)).toEqual(2);
            expect(app.divide(15, 3)).toEqual(5)
        });
        it('should divide number a by b only when a is more than 1 and less than 100', function () {
            expect(app.divide(20, 5)).toEqual(4);
        });
        it('should return false when a is less than 1', function () {
            expect(app.divide(-2, 6)).toEqual(false);
        });
        it('should return false when a is more than 100', function () {
            expect(app.divide(105, 3)).toEqual(false);
        });
        it('should divide number a by b when a is 1', function () {
            expect(app.divide(1, -1)).toEqual(-1);
        });
        it('should divide number a by b when a is 100', function () {
            expect(app.divide(100, 10)).toEqual(10);
        });
        it('should divide number a by b when a is 0', function () {
            expect(app.divide(0, 1)).toEqual(false);
        });
        it('should divide number a by b when a is 101', function () {
            expect(app.divide(101, 10)).toEqual(false);
        });
        it('should return false when b is grater than a', function () {
            expect(app.divide(101, 103)).toEqual(false);
        });
        it('should return false when b is equal 0', function () {
            expect(app.divide(101, 0)).toEqual(false);
        });
    });

    describe('Descending Numbers function', function () {
        it('should take only numbers', function () {
            expect(app.getDescendingNumbers('xx', 2)).toEqual(false);
            expect(app.getDescendingNumbers('a', 'a')).toEqual(false);
            expect(app.getDescendingNumbers(2, 'z')).toEqual(false);
        });
        it('should return string', function () {
            expect(app.getDescendingNumbers(7,2)).toEqual('7 6 5 4 3 2');
            expect(app.getDescendingNumbers(10,50)).toEqual(false);
        });
    });

    describe('Trapezoid function', function () {
        it('should return false number loweer than 0', function () {
            expect(app.areaOfTrapezoid(-12,4,5)).toEqual(false);
            expect(app.areaOfTrapezoid(3,-5,1)).toEqual(false);
        });
        it('should return false', function () {
            expect(app.areaOfTrapezoid('as',-2,-3)).toEqual(false);
        });
        it('should return areaOfTrapezoid', function () {
            expect(app.areaOfTrapezoid(2,3,3)).toEqual(7.5);
            expect(app.areaOfTrapezoid(1,2,7)).toEqual(10.5);
        });
    });

    describe('maxArray function', function () {
        it('should return false when element different than number', function () {
            expect(app.maxArray([1,2,3,41,2,'as'])).toEqual(false);
        });
        it('should return max element', function () {
            expect(app.maxArray([1,2,3,41,2])).toEqual(41);
        });
    });

    describe('squareOdd function', function () {
        it('should return false whenelements different than number or string', function () {
            expect(app.squareOdd([1,2,10,2,'sad', true])).toEqual(false);
        });
        it('should return array', function () {
            expect(app.squareOdd([2,3,4,7,8])).toEqual([2,9,4,49,8]);
        });
    });
});
