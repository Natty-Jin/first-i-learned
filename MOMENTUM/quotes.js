const quotes = [
    {
        quote: "There are trials, but there are no failures.",
        author: "JeongJu young",
    },
    {
        quote: "Everywhere I go I find a poet has been there before me.",
        author: "Sigmund Freud",
    },
    {
        quote: "Wall Street is the only place that people ride to in a Rolls Royce to get advice from those who take the subway.",
        author: "Warren Buffett",
    },
    {
        quote: "Courage is being scared to death... and saddling up anyway.",
        author: "John Wayne",
    },
    {
        quote: "Fashion is made to become unfashionable.",
        author: "Gabriel Coco Chanel",
    },
    {
        quote: "Everything that one thinks about a lot becomes problematic.",
        author: "Friedrich Nietzsche",
    },
    {
        quote: "Life is something that everyone should try at least once.",
        author: "Henry J. Tillman",
    },
    {
        quote: "Youth isn't always all it's touted to be.",
        author: "Lawana Blackwell",
    },
    {
        quote: "Life is either a daring adventure or nothing.",
        author: "Helen Keller",
    },
    {
        quote: "The duty of youth is to challenge corruption.",
        author: "Kurt Cobain",
    },

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todaysQuote=quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

