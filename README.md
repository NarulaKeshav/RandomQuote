# RandomQuote
An application that will show a random quote from a pool of random and inspiring quotes.
You can submit any quote that you'd like and I'll put it up after reviewing it.

![Screenshot](http://goo.gl/QdbSVt)

You can view this on CodePen, however, it looks cluttered for some reason:

[Random Quote Generator](http://codepen.io/NarulaKeshav/full/MKjVgj/)

# How it Works
The JavaScript file `creative.js` has a array called quotes that contains a quote along with the quote author. In this following format:
```
["This is some quote.::Author Name"]
```
I used `Math.floor(Math.random() * arr.length)` so I could get index for one of the quotes in the array. Then I split the array into two subarray by splitting them using `::`, the first index containing the `quote` and the second index with the `author name`. Something like this:
```
["This is some quote.", "Author Name"]
```

This was inspired by FreeCodeCamp's challenge of creating an tool that would randomly generate a quote. You can also request to add a quote and share it on Twitter :smile:
