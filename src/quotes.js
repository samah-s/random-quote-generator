let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {quote: '"The best time to plant a tree was 20 years ago. The second best time is now."', person: 'Chinese Proverb'},
    {quote: '"I am not a product of my circumstances. I am a product of my decisions."', person: 'Stephen Covey'},
    {quote: '"Winning isn\'t everything, but wanting to win is."', person: 'Vince Lombardi'},
    {quote: '"Your time is limited, so don\'t waste it living someone else\'s life."', person: 'Steve Jobs'},
    {quote: '"Eighty percent of success is showing up."', person: 'Woody Allen'},
    {quote: '"The mind is everything. What you think you become."', person: 'Buddha'},
    {quote: '"The most common way people give up their power is by thinking they don\'t have any."', person: 'Alice Walker'}
];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random()*quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})