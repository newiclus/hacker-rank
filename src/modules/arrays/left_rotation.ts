function LeftRotation(array: number[], rotation: number): number[] {
  const numberOfRotations = rotation % array.length;

  const firstPart = array.slice(0, numberOfRotations);
  const secondPart = array.slice(numberOfRotations);

  return [...secondPart, ...firstPart];
}

export default LeftRotation;
