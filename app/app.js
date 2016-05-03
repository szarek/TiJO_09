(function () {
    'use strict';

    window.app = {

        calculateArea: function (a, b, c, messageSuccess, messageError) {
            var area;
            if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number' ||
                typeof messageSuccess !== 'string' || typeof messageSuccess !== 'string') {
                return false;
            }
            else {
                area = a > b ? a - b * c : b - a * c;
                if (area > 0) {
                    return {area: area, message: messageSuccess};
                }
                else if (area < 0) {
                    return {area: area, message: messageError};
                }
                else {
                    return {area: 0, message: 'Big null'};
                }
            }
        }
    };
})();








