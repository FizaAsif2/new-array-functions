const numbers = [1, 2, 3, 4, 5, 4, 5, 6, 7, 8, 9, 0, 5];
const words = ["Hi", "it's", "me", "Umar"];

const outputDiv = document.getElementById("output");
const explanationDiv = document.getElementById("explanation");
const buttonsContainer = document.getElementById("buttons-container");

// ---------------- Utility Functions ----------------

// Add number
function addNumber(arr, num) {
  let newArr = [];
  for (let i = 0; i < getLength(arr); i++) {
    newArr[i] = arr[i];
  }
  newArr[getLength(arr)] = num;
  return newArr;
}
// ---------------- Extra Functions ----------------

// Get odd numbers
function getOdds(arr) {
  let newArr = [];
  let j = 0;
  for (let i = 0; i < getLength(arr); i++) {
    if (arr[i] % 2 !== 0) {
      newArr[j++] = arr[i];
    }
  }
  return newArr;
}

// Get average
function getAverage(arr) {
  if (getLength(arr) === 0) return 0;
  return sumArray(arr) / getLength(arr);
}

// Merge arrays
function mergeArrays(arr1, arr2) {
  let newArr = [];
  let index = 0;

  for (let i = 0; i < getLength(arr1); i++) {
    newArr[index++] = arr1[i];
  }
  for (let j = 0; j < getLength(arr2); j++) {
    newArr[index++] = arr2[j];
  }
  return newArr;
}

// Slice array (start, end)
function sliceArray(arr, start, end) {
  let newArr = [];
  let index = 0;
  for (let i = start; i < end && i < getLength(arr); i++) {
    newArr[index++] = arr[i];
  }
  return newArr;
}

// Count occurrences of a value
function countOccurrences(arr, value) {
  let count = 0;
  for (let i = 0; i < getLength(arr); i++) {
    if (arr[i] === value) count++;
  }
  return count;
}

// Check if value exists
function contains(arr, value) {
  return getIndex(arr, value) !== -1;
}

// Find unique values only (strict unique set)
function uniqueValues(arr) {
  return removeDuplicates(arr); // reuse your function
}


// Remove last
function removeLast(arr) {
  let newArr = [];
  let len = getLength(arr);
  if (len === 0) return newArr;
  for (let i = 0; i < len - 1; i++) {
    newArr[i] = arr[i];
  }
  return newArr;
}

// Get first
function getFirst(arr) {
  return getLength(arr) > 0 ? arr[0] : undefined;
}

// Get last
function getLast(arr) {
  let len = getLength(arr);
  return len > 0 ? arr[len - 1] : undefined;
}

// Get index
function getIndex(arr, value) {
  for (let i = 0; i < getLength(arr); i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

// Get length (no .length)
function getLength(arr) {
  let count = 0;
  for (let _ in arr) count++;
  return count;
}

// Reverse array
function reverseArray(arr) {
  let len = getLength(arr);
  let newArr = [];
  for (let i = 0; i < len; i++) {
    newArr[i] = arr[len - 1 - i];
  }
  return newArr;
}

// Get even numbers
function getEvens(arr) {
  let newArr = [];
  let j = 0;
  for (let i = 0; i < getLength(arr); i++) {
    if (arr[i] % 2 === 0) {
      newArr[j++] = arr[i];
    }
  }
  return newArr;
}

// Sum of array
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < getLength(arr); i++) {
    sum += arr[i];
  }
  return sum;
}

// Join words
function joinWords(arr) {
  let sentence = "";
  for (let i = 0; i < getLength(arr); i++) {
    sentence += arr[i];
    if (i < getLength(arr) - 1) sentence += " ";
  }
  return sentence;
}

// Remove duplicates
function removeDuplicates(arr) {
  let newArr = [];
  for (let i = 0; i < getLength(arr); i++) {
    let found = false;
    for (let j = 0; j < getLength(newArr); j++) {
      if (arr[i] === newArr[j]) {
        found = true;
        break;
      }
    }
    if (!found) newArr[getLength(newArr)] = arr[i];
  }
  return newArr;
}

// Get max
function getMax(arr) {
  if (getLength(arr) === 0) return undefined;
  let max = arr[0];
  for (let i = 1; i < getLength(arr); i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

// Get min
function getMin(arr) {
  if (getLength(arr) === 0) return undefined;
  let min = arr[0];
  for (let i = 1; i < getLength(arr); i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}

// Sort array (simple bubble sort)
function sortArray(arr) {
  let newArr = [...arr];
  let len = getLength(newArr);
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (newArr[j] > newArr[j + 1]) {
        let temp = newArr[j];
        newArr[j] = newArr[j + 1];
        newArr[j + 1] = temp;
      }
    }
  }
  return newArr;
}

// Shuffle array (Fisher-Yates)
function shuffleArray(arr) {
  let newArr = [...arr];
  let len = getLength(newArr);
  for (let i = len - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = newArr[i];
    newArr[i] = newArr[j];
    newArr[j] = temp;
  }
  return newArr;
}

// ---------------- Helper to show result ----------------
function showResult(input, result, explanation) {
  outputDiv.innerHTML = `
    <div><strong>Input:</strong> ${JSON.stringify(input)}</div>
    <div><strong>Result:</strong> ${JSON.stringify(result)}</div>
  `;
  explanationDiv.innerHTML = `<strong>Explanation:</strong> ${explanation}`;
}

// ---------------- Create Buttons ----------------
const actions = [
  { text: "Add number", fn: () => addNumber(numbers, 6), exp: "Added number 6" },
  { text: "Remove last", fn: () => removeLast(numbers), exp: "Removed last element" },
  { text: "Get first", fn: () => getFirst(numbers), exp: "Got first element" },
  { text: "Get last", fn: () => getLast(numbers), exp: "Got last element" },
  { text: "Get index of 5", fn: () => getIndex(numbers, 5), exp: "Got index of 5" },
  { text: "Get length", fn: () => getLength(numbers), exp: "Counted elements" },
  { text: "Get odds", fn: () => getOdds(numbers), exp: "Filtered odd numbers" },
  { text: "Get average", fn: () => getAverage(numbers), exp: "Calculated average value" },
  { text: "Merge with words length", fn: () => mergeArrays(numbers, [getLength(words)]), exp: "Merged numbers with length of words array" },
  { text: "Slice 2-6", fn: () => sliceArray(numbers, 2, 6), exp: "Sliced array from index 2 to 6" },
  { text: "Count occurrences of 5", fn: () => countOccurrences(numbers, 5), exp: "Counted how many times 5 appears" },
  { text: "Check if 7 exists", fn: () => contains(numbers, 7), exp: "Checked existence of 7 in array" },
  { text: "Unique values", fn: () => uniqueValues(numbers), exp: "Extracted only unique values" },
  { text: "Reverse array", fn: () => reverseArray(numbers), exp: "Reversed array" },
  { text: "Get evens", fn: () => getEvens(numbers), exp: "Filtered even numbers" },
  { text: "Sum array", fn: () => sumArray(numbers), exp: "Summed numbers" },
  { text: "Join words", fn: () => joinWords(words), exp: "Joined words" },
  { text: "Remove duplicates", fn: () => removeDuplicates(numbers), exp: "Removed duplicates" },
  { text: "Get max", fn: () => getMax(numbers), exp: "Found maximum value" },
  { text: "Get min", fn: () => getMin(numbers), exp: "Found minimum value" },
  { text: "Sort array", fn: () => sortArray(numbers), exp: "Sorted array ascending" },
  { text: "Shuffle array", fn: () => shuffleArray(numbers), exp: "Shuffled array randomly" }
];

// Render buttons dynamically
actions.forEach(action => {
  const btn = document.createElement("button");
  btn.innerText = action.text;
  btn.onclick = () => showResult(numbers, action.fn(), action.exp);
  btn.style.margin = "5px";
  btn.style.padding = "8px";
  btn.style.borderRadius = "5px";
  buttonsContainer.appendChild(btn);
});
