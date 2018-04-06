export function buildNumber(numberToBuild) {
    const num = parseInt(numberToBuild, 10);
    const numLength = String(num).length;
    const buildsList = {
        1: buildUnits,
        2: buildDecimals,
        3: buildHundreds,
        4: buildThousands,
        5: buildThousands,
        6: buildThousands,
        7: buildMillions,
        8: buildMillions,
        9: buildMillions,
    };

    if (num === 0) {
        return 'cero';
    }

    return buildsList[numLength](num).replace(/\s+/g, ' ').trim();

    // ============================================
    // builder functions

    function buildUnits(num) {
        const unitsList = [
            '',
            'uno',
            'dos',
            'tres',
            'cuatro',
            'cinco',
            'seis',
            'siete',
            'ocho',
            'nueve'
        ];
        return unitsList[num];
    }

    function buildDecimals(num) {
        const teens = Math.floor(num / 10);
        const remainder = num % 10;
        const decimalsList = {
            0: '',
            3: 'treinta',
            4: 'cuarenta',
            5: 'cincuenta',
            6: 'sesenta',
            7: 'setenta',
            8: 'ochenta',
            9: 'noventa'
        };

        if (teens === 1) {
            return buildTeens(remainder);
        } else if (teens === 2) {
            return buildTwenty(remainder);
        } else if (teens === 0) {
            return `${buildUnits(remainder)}`;
        } else {
            if (remainder === 0) {
                return decimalsList[teens];
            } else {
                return `${decimalsList[teens]} y ${buildUnits(remainder)}`;
            }
        }
    }

    function buildTeens(num) {
        const teensList = [
            'diez',
            'once',
            'doce',
            'trece',
            'catorce',
            'quince',
            'dieciséis',
            'diecisiete',
            'dieciocho',
            'diecinueve'
        ];
        return teensList[num];
    }

    function buildTwenty(num) {
        const twentiesList = [
            'veinte',
            'veintiuno',
            'veintidós',
            'veintitrés',
            'veinticuatro',
            'veinticinco',
            'veintiséis',
            'veintisiete',
            'veintiocho',
            'veintinueve'
        ];
        return twentiesList[num];
    }

    function buildHundreds(num) {
        const hundreds = Math.floor(num / 100);
        const teens = num % 100;
        const hundredsList = [
            '',
            'ciento',
            'doscientos',
            'trescientos',
            'cuatrocientos',
            'quinientos',
            'seiscientos',
            'setecientos',
            'ochocientos',
            'novecientos'
        ];

        if (num === 100) {
            return 'cien'
        }

        return `${hundredsList[hundreds]} ${buildDecimals(teens)}`;
    }

    function buildThousands(num) {
        const thousands = Math.floor(num / 1000);
        const hundreds = Math.floor(num % 1000);
        let result;

        if (thousands === 0) {
            result = '';
        } else if (thousands === 1) {
            result =  `mil`;
        } else {
            result = buildHundreds(thousands) + ' mil';
        }

        return `${result} ${buildHundreds(hundreds)}`;
    }

    function buildMillions(num) {
        const millions = Math.floor(num / 1000000);
        const reminder = Math.floor(num % 1000000);
        let rest;

        if (String(reminder).length > 3) {
            rest = buildThousands(reminder);
        } else {
            rest = buildHundreds(reminder);
        }

        if (millions === 1) {
            return `un millón ${rest}`;  
        }

        return `${buildHundreds(millions)} millones ${rest}`;  
    }
}

export function isTeenOrTwentyCheck(num) {
    if (isNaN(num)) return false; // for NaN
    if (typeof num === 'string') num = Number(num); // for Strings
    return num >= 10 && num < 30;
}

export function isWordTeenOrTwentyCheck(string) {
    if (!string) return false;
    if (
        string.includes('die') || 
        string.includes('veint') ||
        string === 'once' ||
        string === 'doce' ||
        string === 'trece' ||
        string === 'catorce' ||
        string === 'quince'
    ) {
        return true;
    }
    
    return false;
}

export function lastDigit(num) {
    return parseInt(
        String(num).split('').pop(),
        10
    );
}