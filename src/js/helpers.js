export function buildNumber(numberToBuild) {
    const num = parseInt(numberToBuild, 10);
    const numLength = String(num).trim().length;
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

    return buildsList[numLength](num);

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
            return buildTeens(remainder)
        } else if (teens === 2) {
            return buildTwenty(remainder);
        } else if (teens === 0) {
            return `${buildUnits(remainder)}`.trim();
        } else {
            if (remainder === 0) {
                return decimalsList[teens];
            } else {
                return `${decimalsList[teens]} y ${buildUnits(remainder)}`.trim();
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

        return `${hundredsList[hundreds]} ${buildDecimals(teens)}`.trim();
    }

    function buildThousands(num) {
        let thousands = Math.floor(num / 1000);
        const hundreds = Math.floor(num % 1000);

        if (thousands === 1) {
            return `mil ${buildHundreds(hundreds)}`.trim();
        }

        return `${buildHundreds(thousands)} mil ${buildHundreds(hundreds)}`.trim();
    }

    function buildMillions(num) {
        const numLen = String(num).length;
        const millions = Math.floor(num / 1000000);
        const thousands = parseInt(String(num).slice(-6, numLen-3), 10);
        const hundreds =  parseInt(String(num).slice(-3, numLen), 10);

        if (millions === 1) {
            return `millón ${buildHundreds(thousands)} mil ${buildHundreds(hundreds)}`.trim();  
        }

        return `${buildHundreds(millions)} ${buildHundreds(thousands)} mil ${buildHundreds(hundreds)}`.trim();  
    }
}