/*
    Given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

    For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

    Given A = [1, 2, 3], the function should return 4.
    Given A = [−1, −3], the function should return 1.
*/

function SmallestPositive(arr: number[]) {
  let smallest = 1;
  const max = Math.max(...arr);

  if (max <= 1) {
    return smallest;
  }

  for (let i = 0; i < max; i++) {
    const orderNum = i + 1;

    const found = arr.find((num) => num === orderNum);

    if (!found) {
      smallest = orderNum;
      break;
    }

    smallest = orderNum + 1;
  }

  return smallest;
}

export default SmallestPositive;
