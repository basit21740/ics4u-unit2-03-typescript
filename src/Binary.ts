/*
 * This is Binary Search Program
 * 
 * @author  Abdul Basit Butt
 * @version 1.0
 * @since   2022-02-19
 */

import promptSync from "prompt-sync"
const prompt = promptSync() 

function compareNumbers (a: number, b: number) {
  return a - b
}

function getRandomInt (min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}

function binarySearch (array: number[], searchNum: number,
  lowIndex: number, highIndex: number) {
  // this function is a binary search engine.
  if (lowIndex > highIndex) {
    return -1
  } else {
    const medium: number = Math.round((highIndex + lowIndex) / 2)
    let returnValue: number
    if (array[medium] > searchNum) {
      returnValue = binarySearch(array, searchNum,
        lowIndex, medium - 1)
      return returnValue
    } else if (array[medium] < searchNum) {
      returnValue = binarySearch(array, searchNum,
        medium + 1, highIndex)
      return returnValue
    } else {
      return medium
    }
  }
}

const generatedNum :number[] = new Array(250)

for (let i = 0; i < generatedNum.length; i++) {
  generatedNum[i] = getRandomInt(0, 1000)
}

generatedNum.sort(compareNumbers)

console.log(generatedNum)

try {
  const input = prompt('What number are you searching for in the array (integer between 0 and 999): ')
      const answer: number = binarySearch(generatedNum, parseInt(input), 0, 250)
      if (answer === -1) {
        console.log('The number is not present in the array.')
      } else {
        console.log('The number is present at index ' + answer + '.')
      }
      console.log('\nDone.')
    } catch (exeption) {
  console.log('Please insert an integer.')
}
