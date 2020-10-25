const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let letters = [],
        sign = "";

    for (i = 0; (i + 10) <= expr.length; i += 10) {
		sign = expr.substring(i, i + 10);

        if (sign == "**********") letters.push(" ");
        else letters.push(Number(sign).toString());
    }

    for (i = 0; i < letters.length; i++) {
        letters[i] = letters[i].replace(/10/g, '.').replace(/11/g, '-').replace(/([.-]+[-.]*)/g, (_, x) => MORSE_TABLE[x]);
    }

    return letters.join("");
}

module.exports = {
    decode
}
