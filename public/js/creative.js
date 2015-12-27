$(document).ready(function() {
    //Do something
    generate();
    
    function generate()
    {
        var quotes = [
            "I am as bad as the worst, but, thank God, I am as good as the best.::Walt Whitman", //1
            "The best way to predict the future is to create it.::Peter Drucker", //2
            "Love isn't something you find. Love is something that finds you.::Loretta Young", //3
            "Try not to become a man of success, but rather try to become a man of value.::Albert Einstein", //4
            "The best way to find out if you can trust somebody is to trust them.::Ernest Hemingway", //5
            "Life is 10% what happens to you and 90% how you react to it.::Charles R. Swindoll", //6
            "In order to succeed, we must first believe that we can.::Nikos Kazantzakis", //7
            "A creative man is motivated by the desire to achieve, not by the desire to beat others.::Ayn Rand", //8
            "Don't watch the clock; do what it does. Keep going.::Sam Levenson", //9
            "There is no great genius without some touch of madness.::Aristotle", //10
            "If you can dream it, you can do it.::Walt Disney", //11
            "Keep your eyes on the stars, and your feet on the ground.::Theodore Roosevelt", //12
            "Sometimes the heart sees what is invisible to the eye.::H. Jackson Brown, Jr.", //13
            "Nothing is impossible, the word itself says 'I'm possible'! ::Audrey Hepburn", //14
            "In order to carry a positive action we must develop here a positive vision.::Dalai Lama", //15
            "Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan.::Nyan Cat", //16
            "Ring-ding-ding-ding-dingeringeding! Gering-ding-ding-ding-dingeringeding!::Fox", //17
            "It is not in the stars to hold our destiny but in ourselves.::William Shakespeare", //18
            "The secret of getting ahead is getting started.::Mark Twain", //19
            "Some people want it to happen, some wish it would happen, others make it happen.::Michael Jordan" //20
        ];

        var random_quote_index = quotes[Math.floor(Math.random() * quotes.length)];
        var split_to_get_author = random_quote_index.split("::");
        $("#quote-text").html(split_to_get_author[0]);
        $("#author-name").html(split_to_get_author[1]);
    }

    //Generates a random quote on click on "random" button
    $('#random').click(function() {
        generate();
    });
});