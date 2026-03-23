const quotes = [
    "Believe you can and you're halfway there. -Theodore Roosevelt",
    "The only way to do great work is to love what you do. -Steve Jobs",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. -Winston Churchill",
    "The unexamined life is not worth living. -Socrates",
    "Life is what happens when you're busy making other plans. -John Lennon",
    "Two things are infinite, the universe and human stupidity, and I'm not sure about the universe. -Albert Einstein",
    "The greatest wealth is to live with content with little. -Plato",
    "Those who dare to fail miserably can achieve greatly. -John F Kennedy",
    "To be, or not to be, that is the question -Willaim Shakespeare",
    "I came, I saw, I conquered -Julius Ceaser"
];
    
const quoteBtn = document.getElementById("quoteBtn");
const quoteDisplay = document.getElementById("quoteDisplay");    
    
quoteBtn.addEventListener("click", function () {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteDisplay.textContent = quotes[randomIndex];
});
