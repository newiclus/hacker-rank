function MinimumBribes(bribesArray: number[]): string | number {
  const orderedArray: number[] = [];
  const bribes: number[] = [];

  let isChaotic = false;

  for (let i = 0; i < bribesArray.length; i++) {
    orderedArray[i] = i + 1;
  }

  for (let i = 0; i < bribesArray.length; i++) {
    const currentNumber = bribesArray[i];
    const swap = orderedArray.indexOf(currentNumber);

    if (swap > 2) {
      isChaotic = true;
      break;
    }

    if (swap > 0) {
      bribes.push(swap);
    }

    orderedArray.splice(swap, 1);
  }

  if (isChaotic) {
    return "Too chaotic";
  }

  return bribes.reduce((a, b) => a + b, 0);
}

export default MinimumBribes;
