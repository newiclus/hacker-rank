function ArrayManipulation(length: number, queries: number[][]): number {
  const arrValues: number[] = [];

  // Initialize array of values with zeros
  for (let i = 0; i < length; i++) {
    arrValues.push(0);
  }

  // Add values to array based on queries array
  for (let i = 0; i < queries.length; i++) {
    const [start, end, value] = queries[i];

    for (let j = start - 1; j < end; j++) {
      arrValues[j] += value;
    }
  }

  return Math.max(...arrValues);
}

export default ArrayManipulation;
