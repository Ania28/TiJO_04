(function () {
    'use strict';
    window.app = {

        divide: function (a, b) {
            return a >= 1 && a <= 100 && b < a && b != 0 ? a / b : false;
        },
        getDescendingNumbers: function (numberFrom, numberTo) {
            if (typeof numberFrom === 'number' && typeof numberTo === 'number' && numberFrom > numberTo) {

                var descendingNumbers = numberFrom;
                for (var i = numberFrom - 1; i >= numberTo; i--) {
                    descendingNumbers = descendingNumbers + ' ' + i;
                }

                return descendingNumbers;
            } else {
                return false;
            }
        },
        areaOfTrapezoid: function (a, b, h) {
            if (a < 0 || b < 0 || h < 0 || typeof a !== 'number' || typeof b !== 'number' || typeof h !== 'number') {
                return false;
            }
            return 0.5 * h * (a + b);
        },
        maxArray: function (arr) {
            var biggest = arr[0];
            for (var i = 0; i < arr.length; i++) {
                if (typeof arr[i] !== 'number') {
                    return false;
                }
                if (arr[i] > biggest) {
                    biggest = arr[i];
                }
            }
            return biggest;
        },
        squareOdd: function (arr) {
            for (var i = 0; i < arr.length; i++) {
                if (typeof arr[i] !== 'number' && typeof arr[i] !== 'string') {
                    return false;
                }
                if (arr[i] % 2 == 1) {
                    arr[i] *= arr[i];
                }
            }
            return arr;
        }
    }
})();








