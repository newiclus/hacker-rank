function MinimumBribes(bribesArray: number[]): void {
  const orderedArray: number[] = [];
  const bribes: number[] = [];

  let isChaotic = false;

  for (let i = 0; i < bribesArray.length; i++) {
    orderedArray[i] = i + 1;
  }

  for (let i = 0; i < bribesArray.length; i++) {
    const currentNumber = bribesArray[i];
    const orderedNumber = orderedArray[0];

    const swap = orderedArray.indexOf(currentNumber);

    if (swap > 2) {
      isChaotic = true;
      break;
    }

    if (currentNumber !== orderedNumber) {
      bribes.push(swap);
    }

    orderedArray.splice(swap, 1);
  }

  if (isChaotic) {
    console.log("Too chaotic");
  } else {
    console.log(bribes.reduce((a, b) => a + b, 0));
  }
}

export default MinimumBribes;
