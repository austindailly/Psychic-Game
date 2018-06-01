
    var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var yourGuesses = [];

    document.onkeyup = function(event) {

      var userGuess = event.key;

      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      yourGuesses.push(userGuess);

      if (userGuess === computerGuess) {
          wins++;
          guessesLeft = 9;
          yourGuesses.length = 0;
      }
      else if (guessesLeft === 0) {
          losses++;
          guessesLeft = 9;
          yourGuesses.length = 0;
      }
      else if (userGuess !== computerGuess) {
          guessesLeft--;
      }

      var html =
      "<p>The computer chose: " + 
      computerGuess + 
      "</p>" +
      "<p>Wins: " + 
      wins + "</p>" +
      "<p>Losses: " + 
      losses + 
      "</p>" +
      "<p>Guesses left: " + 
      guessesLeft + 
      "</p>" +
      "<p>Your Guesses: " + 
      yourGuesses + 
      "</p>";

      document.querySelector("#game").innerHTML = html;
    
    };