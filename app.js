let quotes = [
  {
    name: '– Robert A. Heinlein.',
    quote: 'Everything is theoretically impossible, until it is done.'
  },
  {
    name: '– Cecilia Payne-Gaposchkin',
    quote: '“The reward of the young scientist is the emotional thrill of being the first person in the history of the world to see something or to understand something. Nothing can compare with that experience.”'
  },
  {
    name: '– David Eagleman',
    quote: '“What you learn from a life in science is the vastness of our ignorance.”'
  },
  {
    name: ' – Issac Newton',
    quote: '"If I have seen further it is by standing on the shoulders of Giants."'
  },
  {
    name: '– Albert Einstein',
    quote: '“If a cluttered desk is a sign of a cluttered mind, of what, then, is an empty desk a sign?”'
  },
  {
    name: '– Nikola Tesla',
    quote: '"Our virtues and our failures are inseparable, like force and matter. When they separate, man is no more.”'
  },
  {
    name: '– Sir William Osler',
    quote: '“In science the credit goes to the man who convinces the world, not to the man to whom the idea first occurs.”'
  },
]

const authorQuote = document.getElementById('quote')
const authorName = document.getElementById('author')
const button = document.getElementById('quoteBtn')
button.addEventListener('click',function(){
  let numbers = Math.floor(Math.random()*quotes.length)
  authorQuote.innerHTML = quotes[numbers].quote
  authorName.innerHTML = quotes[numbers].name
})