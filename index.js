function shout(string) {
    // todo
  }function shout(string) {
    return string.toUpperCase();
  }
  function whisper(string) {
    return string.toLowerCase();
  }
  const spy = "hello"
  function logShout(spy) {
    console.log(spy.toUpperCase());
 }logShout(spy)
 function logWhisper(spy) {
    console.log(spy.toLowerCase());
 }logWhisper(spy);


const string = "Hello"
let greeting 

function sayHiToHeadphonedRoommate(string) {
 // return string.toLowerCase(), string.toUpperCase()
if (string === string.toLowerCase()) {
  greeting = "I can't hear you!"
  console.log(greeting);

} else if (string === string.toUpperCase()) {
  greeting = "YES INDEED!"
} else if (string === "Let's have dinner together!") {
  greeting = "I would love to!"
} return greeting;
}
console.log(greeting);