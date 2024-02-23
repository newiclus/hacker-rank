function RomanNumeralReduction(str: string): string {
  const ROMAN_NUMBERS: { [key: string]: number } = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    sum += ROMAN_NUMBERS[str[i]];
  }

  let numberReduced = "";

  Object.entries(ROMAN_NUMBERS).forEach(([key, value]) => {
    let number = Math.floor(sum / value);

    sum -= number * value;
    numberReduced += key.repeat(number);
  });

  return numberReduced;
}

export default RomanNumeralReduction;
