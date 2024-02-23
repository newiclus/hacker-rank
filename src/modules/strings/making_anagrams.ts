/*
  Given two strings,  and , that may or may not be of the same length, determine the minimum number 
  of character deletions required to make  and  anagrams. Any characters can be deleted from either 
  of the strings.

  Example:
  a = 'cde'
  b = 'dcf'

  Delete  from  and  from  so that the remaining strings are  and  which are anagrams. This takes 
  2 character deletions.
*/

function MakeAnagrams(a: string, b: string): number {
  const arrString = a.split("");

  let deletedChars = "";
  let deletedA = 0;
  let deletedB = 0;

  for (let i = 0; i < arrString.length; i++) {
    const char = new RegExp(arrString[i]);

    if (deletedChars.match(char)) {
      break;
    }

    if (!b.match(char)) {
      deletedA += 1;
      deletedChars += arrString[i];
    }
  }

  deletedB = b.length - (a.length - deletedA);

  return deletedA + deletedB;
}

export default MakeAnagrams;
