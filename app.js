(function(){

  var quotes = [
    "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
    "Believe you can and you're halfway there.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    "The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
    "Don't watch the clock; do what it does. Keep going.",
    "A creative man is motivated by the desire to achieve, not by the desire to beat others.",
    "Expect problems and eat them for breakfast.",
    "Start where you are. Use what you have. Do what you can.",
    "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
    "Be yourself; everyone else is already taken.",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    "Always remember that you are absolutely unique. Just like everyone else.",
    "Watch your back, but more importantly when you get out the shower, dry your back, it's a cold world out there.",
    "Always do whatever's next.",
    "Hapiness is not something ready made. It comes from your own actions.",
    "They never said winning was easy. Some people can't handle success, I can.",
    "They will try to close the door on you, just open it.",
    "Don't sweat the petty things and don't pet the sweaty things."
    ];

  var images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg"
  ];

  function chooseOne(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  window.onload = function() {
    var randomImage = chooseOne(images);
    var randomQuote = chooseOne(quotes);

    document.getElementById('background-image').style.backgroundImage = 'url("img/'+ randomImage +'")';
    document.getElementById('quote').innerHTML = randomQuote;
    document.getElementById('author').innerHTML = "&mdash; " +  ' Have an awesome day! ' + " &mdash;";

    document.getElementById('quote').className = 'move';
    document.getElementById('author').className = 'move';
  };

})();
