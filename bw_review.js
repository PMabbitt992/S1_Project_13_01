"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1

   Author: Paige Mabbitt
   Date: 3.13.19 
   
   Filename: bw_review.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers.
      
   lightStars(e)
      Function that colors the stars representing the user rating
      for the book.
      
   turnOffStars(e)
      Function that restores the stars to empty colors, removing
      the user rating for the book.

   updateCount()
      Updates the count of characters in the wordCountBox
      element.

   countCharacters(textStr)
      Returns the number of a non-whitespace characters
      within textStr

*/





/*=================================================================*/
//load the init function when the window loads
window.onload = init();

function init() {
      //declare stars array
      var stars = document.querySelectorAll("span#stars img");
      //for each value of the stars array, the mouse becomes a pointer and runs the lightStars function every time the mouse enters the stars 
      for (var i = 0; i < stars.length; i++) {
            stars[i].style.cursor = "pointer"
            stars[i].addEventListener("mouseenter", lightStars);
      }
      //run updateCount everytime a keyboard key is let up
      document.addEventListener("keyup", updateCount);
}

function lightStars() {
      //starNumber is equal to the value of stars alt element
      var starNumber = event.target.alt;
      //declare stars array
      var stars = document.querySelectorAll("span#stars img");
      //for each alt number, the corresponding star will be repleaced with bw_star2.png and the second for loop indicates that every star afterwards will stay the same
      for (var i = 0; i < starNumber; i++) {
            stars[i].src = "bw_star2.png";
      }
      for (var i = starNumber; i < 5; i++) {
            stars[i].src = "bw_star.png";
      }
      //Write the number of stars in text in the box next to the star images
      document.getElementById("rating").value = starNumber + " stars";
      //add event listeners to remove all bw_star2.png when the mouse leaves
      event.target.addEventListener("mouseleave", turnOffStars);
      //stops listening for the mouseleave event when the mouse clicks on the stars
      event.target.addEventListener("click", function () {
            event.target.removeEventListener("mouseleave", turnOffStars);
      });
}


function turnOffStars() {
      //declare stars array
      var stars = document.querySelectorAll("span#stars img");
      //replaces each star with the empty star picture
      for (var i = 0; i < stars.length; i++) {
            stars[i].src = "bw_star.png";
      }
      //sets the text to empty
      document.getElementById("rating").value = "";
}



function updateCount() {
      //commentText is equal the the value of comment
      var commentText = document.getElementById("comment").value;
      //charCount is equal to the function countCharacters passed commentText ( gives the amount of characters that have been typed)
      var charCount = countCharacters(commentText);
      //replaces wordCount with the charCount number out of 1000
      document.getElementById("wordCount").value = charCount + "/1000";
      //if the character count is greater than 1000, make the count font white on a red background, otherwise do black text on a white background
      if (charCount > 1000) {
            document.getElementById("wordCount").style.backgroundColor = "rgb(255, 0, 0)";
            document.getElementById("wordCount").style.color = "rgb(255, 255, 255)";
      } else {
            document.getElementById("wordCount").style.backgroundColor = "rgb(255, 255, 255)";
            document.getElementById("wordCount").style.color = "rgb(0, 0, 0)";
      }

}


function countCharacters(textStr) {
      var commentregx = /\s/g;
      var chars = textStr.replace(commentregx, "");
      return chars.length;
}