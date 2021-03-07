// Durstenfeld shuffle based on the older Fisher-Yates shuffle. Credit to the inventors. This implementation is WTFPL licensed by valahraban.
// This implementations draws x amount of members from a list and randomly outputs them.
// Originally written for AID entries and intended to be combined with regex parsing of string entries.
// Example function calls at the beginning.
cars = ["Toyota", "Subaru", "Mitsubishi", "Honda", "Nissan", "Mazda"];
shuffle(cars, 4);

// The Durstenfeld algorithm taking two arguments.
function shuffle(array, x) {
   for (var i = x - 1; i >= 0; i--) {
      var rnd = Math.floor(Math.random() * (i + 1)); // pick one at random
      var temp = array[i]; // store helper variable
      if (i >= 1) {
         document.write(array[rnd] + ", ");
      }
      else {
         document.write(array[rnd]);
      }
      array[i] = array[rnd]; // replace current entry with the randomly picked one
      array[rnd] = temp; // replace the random entry with the previously replaced entry, continue until break condition
   }
}
