let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

//1
let storyWords = story.split(" ");

//2
console.log(`Original Word Count: ${storyWords.length}`);
console.log();

//3
let betterWords1 = storyWords.filter(words => !overusedWords.includes(words));
//console.log(betterWords1.length);
let betterWords = betterWords1.filter(words => !unnecessaryWords.includes(words));

//4
let overusedWordsCount = storyWords.filter(words => overusedWords.includes(words)).length;
let unnecessaryWordsCount = storyWords.filter(words => unnecessaryWords.includes(words)).length;

//5
let storyCharacters = story.split("");
let periodCount = storyCharacters.filter(characters => characters === ".");
let exclamationPointCount = storyCharacters.filter(characters => characters === "!");
let sentenceCount = periodCount.length+exclamationPointCount.length;

//6
const wordChecker = () => {
  console.log(`Word Count: ${betterWords.length}`);
	console.log(`Sentence Count: ${sentenceCount}`);
  console.log();
	console.log(`Overused Words: ${overusedWordsCount}`);
  console.log(`Unnecessary Words: ${unnecessaryWordsCount}`);
};

wordChecker();

//7
console.log();
console.log(`Revised Work:`)
console.log(betterWords.join(" "));


//console.log(story);
