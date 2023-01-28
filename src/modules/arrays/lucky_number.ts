/*
  Create a function that finds the lucky number in and array of positives numbers.
  A lucky number is one that is present in an array the same amount as its value.

  Note: if there are multiple lucky numbers, return the largest one.
*/

function LuckyNumber(arr: number[]): number {
  const luckies: number[] = [];
  const numbersObj: Record<string, any> = {};

  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];

    if (!numbersObj[currentNumber]) {
      numbersObj[currentNumber] = {
        value: 1,
        isLucky: currentNumber === 1,
      };
    } else {
      numbersObj[currentNumber].value++;
      numbersObj[currentNumber].isLucky =
        currentNumber === numbersObj[currentNumber].value;
    }
  }

  Object.entries(numbersObj).forEach(([key, obj]) => {
    if (obj.isLucky) {
      luckies.push(parseInt(key, 10));
    }
  });

  if (luckies.length === 0) {
    return -1;
  }

  return Math.max(...luckies);
}

export default LuckyNumber;
