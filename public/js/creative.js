$(document).ready(function() {
    //Do something
    generate();
    
    function generate()
    {
        var quotes = [
            "I am as bad as the worst, but, thank God, I am as good as the best.::Walt Whitman", //1
            "The best way to predict the future is to create it.::Peter Drucker", //2
            "In any moment of decision, the best thing you can do is the right thing, the next best thing is the wrong thing, and the worst thing you can do is nothing.::Theodore Roosevelt", //3
            "Whether it's the best of times or the worst of times, it's the only time we've got.::Art Buchwald", //4
            "The best way to find out if you can trust somebody is to trust them.::Ernest Hemingway", //5
            "Life is 10% what happens to you and 90% how you react to it.::Charles R. Swindoll", //6
            "In order to succeed, we must first believe that we can.::Nikos Kazantzakis", //7
            "A creative man is motivated by the desire to achieve, not by the desire to beat others.::Ayn Rand", //8
            "Don't watch the clock; do what it does. Keep going.::Sam Levenson", //9
            "The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.::Confucius", //10
            "If you can dream it, you can do it.::Walt Disney", //11
            "Keep your eyes on the stars, and your feet on the ground.::Theodore Roosevelt", //12
            "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.::Helen Keller", //13
            "Nothing is impossible, the word itself says 'I'm possible'! ::Audrey Hepburn", //14
            "In order to carry a positive action we must develop here a positive vision.::Dalai Lama"
        ];

        var random_quote_index = quotes[Math.floor(Math.random() * quotes.length)];
        var split_to_get_author = random_quote_index.split("::");
        $('#quote-text').html(split_to_get_author[0]);
        $('#author-name').html(split_to_get_author[1]);
    }

    $('#random').click(function() {
        generate();
    });
});