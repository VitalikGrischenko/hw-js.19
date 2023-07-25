//Напишіть функцію, яка отримує масив рядків і повертає новий масив,
// в якому кожен з рядків складається з першої та останньої букви відповідної строки вхідного масиву.

const array2 = ['apple', 'banana', 'orange', 'banana', 'grape', 'apple', 'kiwi'];

function getFirstLastLettersArrey (arr) {
    return arr.map(words => {
      const [firstLetter, lastLetter] = [words[0], words[words.length - 1]];
      return firstLetter + lastLetter;
    });
  }
  

  const newArrayFirstLastLetters = getFirstLastLettersArrey(array2);
  console.log(newArrayFirstLastLetters);