const countCharacters = /./g;
const countWords = /\w+(-\w+)*/g;
const countVowels = /[aeiou]/gi;

sentenceReader = (sentence) => {
  let sentenceLength = sentence.match(countCharacters).length;
  let wordCount = sentence.match(countWords).length;
  let vowelCount = sentence.match(countVowels).length;
  return `There are ${sentenceLength} characters, ${wordCount} words and ${vowelCount} vowels in this sentence`;
};

console.log(sentenceReader("I have a dog and a black-footed ferret"));
