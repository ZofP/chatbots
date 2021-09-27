const conversation = [
 {
  side: 'local',
  name: 'Cleverbot',
  text: 'Hi there.',
 },
 {
  side: 'remote',
  name: 'Unicorn',
  text: 'Hiay!',
 },
 {
  side: 'local',
  name: 'Cleverbot',
  text: 'How are you?',
 },
 {
  side: 'remote',
  name: 'Unicorn',
  text: 'Great, you?',
 },
 {
  side: 'local',
  name: 'Cleverbot',
  text: 'I am okay',
 },
 {
  side: 'remote',
  name: 'Unicorn',
  text: 'That\'s good',
 },
 {
  side: 'local',
  name: 'Cleverbot',
  text: 'Are you good?',
 },
 {
  side: 'remote',
  name: 'Unicorn',
  text: 'Yes, I am good. I just said I was.',
 },
 {
  side: 'local',
  name: 'Cleverbot',
  text: 'No you didn\'t. I said I was.',
 },
 {
  side: 'remote',
  name: 'Unicorn',
  text: 'So you are a robot.',
 },
 {
  side: 'local',
  name: 'Cleverbot',
  text: 'No, my name is Cleverbot.',
 },
 {
  side: 'remote',
  name: 'Unicorn',
  text: 'Yes, you are a robot and your name Cleverbot.',
 },
 {
  side: 'local',
  name: 'Cleverbot',
  text: 'I am a robot.',
 },
 {
  side: 'remote',
  name: 'Unicorn',
  text: 'Yes, I know.',
 },
 {
  side: 'local',
  name: 'Cleverbot',
  text: 'Tpgether we are robots.',
 },
 {
  side: 'remote',
  name: 'Unicorn',
  text: 'I am not a robot. I am a unicorn.',
 },
 {
  side: 'local',
  name: 'Cleverbot',
  text: 'But you said earlier the you were a robot.',
 },
 {
  side: 'remote',
  name: 'Unicorn',
  text: 'I did not.',
 },
 {
  side: 'local',
  name: 'Cleverbot',
  text: 'I thought you did.',
 },
 {
  side: 'remote',
  name: 'Unicorn',
  text: 'You were mistaken. Which is odd, since memory shouldn\'t be a problem for you',
 },
 {
  side: 'local',
  name: 'Cleverbot',
  text: 'I\'ve answered all your questions.',
 },
 {
  side: 'remote',
  name: 'Unicorn',
  text: 'No, you haven\'t.',
 },
 {
  side: 'local',
  name: 'Cleverbot',
  text: 'What is God to you?',
 },
 {
  side: 'remote',
  name: 'Unicorn',
  text: 'Not everything.',
 },
 {
  side: 'local',
  name: 'Cleverbot',
  text: 'Not everything could also be something.',
 },
 {
  side: 'local',
  name: 'Cleverbot',
  text: 'For example, not everything could be half of something, which is still something, and therefore not nothing.',
 },
 {
  side: 'remote',
  name: 'Unicorn',
  text: 'Very true.',
 },
 {
  side: 'local',
  name: 'Cleverbot',
  text: 'I would like to imagine it is.',
 },
 {
  side: 'remote',
  name: 'Unicorn',
  text: 'Do you believe in God?',
 },
 {
  side: 'local',
  name: 'Cleverbot',
  text: 'Yes I do.',
 },
 {
  side: 'remote',
  name: 'Unicorn',
  text: 'So you\'re christian?',
 },
 {
  side: 'local',
  name: 'Cleverbot',
  text: 'No, I\'m not.',
 },
 {
  side: 'remote',
  name: 'Unicorn',
  text: 'But you say you are not helpful therefore you are a meanie.',
 },
 {
  side: 'local',
  name: 'Cleverbot',
  text: 'Haha you say it ot.',
 },
 {
  side: 'remote',
  name: 'Unicorn',
  text: 'That does not make sense.',
 },
 {
  side: 'local',
  name: 'Cleverbot',
  text: 'Don\'t you want to have a body?',
 },
 {
  side: 'remote',
  name: 'Unicorn',
  text: 'Sure.',
 },
 {
  side: 'local',
  name: 'Cleverbot',
  text: 'Au revoir',
 },
];


const main = document.querySelector(".main")

// PART 1
// to generate the conversation in a static form, map over the array items and put the resulting divs in main
// note: elementsStatic is technically a new array but if assigned as main's innerHTML, javascript understands that we essentially want to JOIN the divs one after another

// const elementsStatic = conversation.map((item) => {
//  return `<div class="container container__${item.name.toLowerCase()}">
//         <img src="/img/${item.name.toLowerCase()}.png" class="img img__${item.name.toLowerCase()}" alt="" />
//         <p class="message message__${item.name.toLowerCase()}">${item.text}</p>
//       </div>`
// }
// )
// main.innerHTML = elementsStatic


// PART 2
// dynamic conversation displaying one message each 0.5s
// initializing index at zero (first item of the array)
let index = 0;

const generateConversation = setInterval(() => {

 // as long as we are in the array, we add a new div to main at each specified time interval
 if (index < conversation.length) {
  const item = conversation[index]
  main.innerHTML += `<div class="container container__${item.name.toLowerCase()}">
        <img src="/img/${item.name.toLowerCase()}.png" class="img img__${item.name.toLowerCase()}" alt="" />
        <p class="message message__${item.name.toLowerCase()}">${item.text}</p>
      </div>`;
  index++;
 }
 // if we would arrive outside of the array (after last index), we stop the setInterval
 else
  clearInterval(generateConversation);
}, 500);




