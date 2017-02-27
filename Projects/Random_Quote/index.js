var colors = [
  "dodgerblue",
  "rosybrown",
  "mediumturquoise",
  "steelblue",
  "skyblue",
  "salmon",
  "olive",
  "slateblue"
];

function updateColor() {
  var colorIndex = Math.floor(Math.random() * colors.length);
  var colorClick = colors[colorIndex];
  $("body, .btn, li").css("background", colorClick);
  $("div").css("color", colorClick);
}
updateColor();

var quotes = [

  {
    quote: "A mind needs books as a sword needs a whetstone, if it is to keep its edge.",
    author: "- Tyrion Lannister"
  }, {
    quote: "Fear cuts deeper than swords",
    author: "- Arya Stark"
  }, {
    quote: "Bran thought about it. Can a man still be brave if he s afraid?, That is the only time a man can be brave, his father told him ",
    author: "- Bran Stark"
  }, {
    quote: "Some old wounds never truly heal, and bleed again at the slightest word.",
    author: "- Eddard Stark"
  }, {
    quote: "Winter is coming.",
    author: "- Eddard Stark"
  }, {
    quote: "Never forget what you are, for surely the world will not. Make it your strength. Then it can never be your weakness.",
    author: "- Tyrion Lannister"
  }, {
    quote: "Why is it that when one man builds a wall, the next man immediately needs to know what's on the other side?",
    author: "- Tyrion Lannister"
  }, {
    quote: "Nothing burns like the cold.",
    author: "- Gared"
  }, {
    quote: "Knowledge is a weapon, Jon. Arm yourself well before you ride forth to battle.",
    author: "- Aemon Targaryen"
  }, {
    quote: "One voice may speak you false, but in many there is always truth to be found.",
    author: "- Daenerys Targaryen"
  }
];

var quotesIndex;
function updateQuote() {
  quotesIndex = Math.floor(Math.random() * quotes.length);
  var quoteContent = quotes[quotesIndex].quote;
  var quoteAuthor = quotes[quotesIndex].author;
  $(".quote").html(quoteContent);
  $(".author").html(quoteAuthor);
}
updateQuote();

function shareTweet() {
  var quoteToTweet = quotes[quotesIndex].quote;
  if (quoteToTweet.length > 140) {
    quoteToTweet = quoteToTweet.substr(0, 140).match(/(^.+)\s/)[1] + " ...";
  }
  quoteToTweet = encodeURI(quoteToTweet);
  window.open("https://twitter.com/intent/tweet?text=\"" + quoteToTweet + "\"&hashtags=GoT");
}

$(".btn").on("click", function () {
  updateQuote();
  updateColor();
});
$(".tweet").on("click", shareTweet);
