window.onload = function(){

  var Price = function() {
      this.firstDigit = Math.floor(Math.random()*9)+1;
      this.secondDigit = Math.floor(Math.random()*10);
      this.thirdDigit = Math.floor(Math.random()*10);
      this.dishwasherValue = function() {
        return this.thirdDigit.toString() + this.secondDigit.toString() + this.firstDigit.toString();
      this.finalMessage = "";

    }
    this.show = function(){
      this.firstGuess = document.getElementById('digit-one').value;
      this.secondGuess = document.getElementById('digit-two').value;
      this.thirdGuess = document.getElementById('digit-three').value;
    }
  }

  document.getElementById('start-button').onclick = function() {
    var newPrice = new Price();
    newPrice.dishwasherValue();
    newPrice.show();
    console.log(newPrice.firstDigit);
    var startHint, firstHint, secondHint, yourGuess1, yourGuess2, nextHint, lastHint, yourGuess3, finalMessage, endGame;

    if (newPrice.firstDigit > 5) {
      startHint = "The first digit it greater than 5. So, what do you think it is?";
    }
    else {
      startHint = "The first digit is less than or equal to 5. So, what do you think it is?";
    }

  firstHint = document.getElementById('first-hint');
  firstHint.textContent = startHint;

  document.getElementById('input-guess1').onclick = function (){
    yourGuess1 = document.getElementById('digit-one').value;
    if (newPrice.firstDigit == yourGuess1) {
      if (newPrice.secondDigit > newPrice.firstDigit) {
        secondHint = "Now, the second number is bigger than the first. What do you think it is?";
      }  else {
        secondHint = "The second number is smaller than or equal to the first. What do you think it is?";
      }

    nextHint = document.getElementById('second-hint');
    nextHint.textContent = secondHint;
    console.log(newPrice.secondDigit);

    document.getElementById('input-guess2').onclick = function (){
      yourGuess2 = document.getElementById('digit-two').value;
      if (yourGuess2 == newPrice.secondDigit) {
        if (newPrice.thirdDigit %2 === 0) {
          thirdHint = "The third digit is even. What do you think it is?";
        } else {
          thirdHint = "The third digit is odd. What do you think it is?";
        }

    lastHint = document.getElementById('third-hint');
    lastHint.textContent = thirdHint;
    console.log(newPrice.thirdDigit);

    document.getElementById('input-guess3').onclick = function (){
      yourGuess3 = document.getElementById('digit-three').value;
        if (yourGuess3 == newPrice.thirdDigit) {
          document.getElementById('final-message').textContent = "Holy smokes! You got it! The dishwasher costs $" + newPrice.dishwasherValue() + "!";
        } else {
          document.getElementById('final-message').textContent = "Huh. You were so close. The correct total value was $" + newPrice.dishwasherValue() + ". Now you lose. Sorry.";
        } } } else {
        document.getElementById('final-message').textContent = "I am sorry but you are wrong. The second digit was " + newPrice.secondDigit + ".";
        ;
      } } } else {
        document.getElementById('final-message').textContent = "Oh, I am sorry! The correct number was " + newPrice.firstDigit + ". No dishwasher for you.";
    }
    }
  }
}
