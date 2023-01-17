function MinimumSwaps(unorderedArr: number[]): number {
  let numberOfSwaps = 0;

  for (let i = 0; i < unorderedArr.length; i++) {
    const orderedNumber = i + 1;
    const position = unorderedArr.indexOf(orderedNumber);

    if (position !== i) {
      // Swap the numbers in the array to put the orderedNumber in the right position
      const temp = unorderedArr[i];

      unorderedArr[i] = orderedNumber;
      unorderedArr[position] = temp;

      numberOfSwaps++;
    }
  }

  return numberOfSwaps;
}

export default MinimumSwaps;
