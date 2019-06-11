// Name: Annie Tang
// Date: April 21, 2019
// Section: CSE 154 AM
//
// This is the main.js file that handles interactions on index.html.
//

(function() {
   "use strict";

   window.addEventListener("load", init);

   /**
    *  Once the page loads, sets up the images to wait for the user's choice of egg
    */
   function init() {
      id("plain").addEventListener("click", updateEgg);
      id("sunny").addEventListener("click", updateEgg);
      id("crack").addEventListener("click", updateEgg);
      id("main-btn").addEventListener("click", backToMain);
   }

  /**
   *  Stores the type of egg selected by the user, and changes to the view to one where the user
   *  can choose a face for the egg.
   */
   function updateEgg() {
      id("egg-view").classList.add("hidden");
      id("face-view").classList.remove("hidden");
      let finalType = id("final");
      if (this.id === "plain") {
         finalType.src = "img/plain_egg.png";
      } else if (this.id === "sunny") {
         finalType.src = "img/sunny_egg.png";
      } else {
         finalType.src = "img/cracked_egg.png";
      }
      id("cute").addEventListener("click", finalEgg);
      id("sad").addEventListener("click", finalEgg);
      id("heart").addEventListener("click", finalEgg);
   }

   /**
    *  Stores the face the user selected and reveals the final egg face creation based on the
    *  user's selctions.
    */
   function finalEgg() {
      id("face-view").classList.add("hidden");
      id("result-view").classList.remove("hidden");
      let resultEgg = id("final");
      if (resultEgg.src.includes("img/plain_egg.png")) {
         if (this.id === "cute") {
            resultEgg.src = "img/cute_plain_egg.png";
         } else if (this.id === "sad") {
            resultEgg.src = "img/sad_plain_egg.png";
         } else {
            resultEgg.src = "img/heart_plain_egg.png";
         }
      } else if (resultEgg.src.includes("img/sunny_egg.png")) {
         if (this.id === "cute") {
            resultEgg.src = "img/cute_sunny_egg.png";
         } else if (this.id === "sad") {
            resultEgg.src = "img/sad_sunny_egg.png";
         } else {
            resultEgg.src = "img/heart_sunny_egg.png";
         }
      } else {
         if (this.id === "cute") {
            resultEgg.src = "img/cute_cracked_egg.png";
         } else if (this.id === "sad") {
            resultEgg.src = "img/sad_cracked_egg.png";
         } else {
            resultEgg.src = "img/heart_cracked_egg.png";
         }
      }
      id("next").addEventListener("click", toRatingsPage);
   }

   /**
    *  Change's the user's view to a page where they can rate their egg. Sets up the dropdown menu
    *  used to rate the egg face.
    */
   function toRatingsPage() {
      id("result-view").classList.add("hidden");
      id("rate-view").classList.remove("hidden");
      id("rating").addEventListener("change", rateEgg);
   }

   /**
    *  Updates the number of eggs displayed on the page, representing the user's rating
    */
   function rateEgg() {
      let rateResult = qsa("#rate-result img");
      for (let i = 0; i < rateResult.length; i++) {
         qsa("#rate-result img")[0].remove();
      }

      for (let i = 0; i < this.value; i++) {
         let addEgg = makeEgg();
         id("rate-result").appendChild(addEgg);
      }
   }

   /**
    *  Creates and returns a new "egg" to display in the toRatingsPage
    *  @returns {object} new image of an egg
    */
   function makeEgg() {
      let egg = document.createElement("img");
      egg.src = "img/sunny_egg.png";
      egg.alt = "sunny egg";
      return egg;
   }

   function backToMain() {
      id("rate-view").classList.add("hidden");
      id("egg-view").classList.remove("hidden");
      id("rate-result").innerHTML = "";
      id("rating").value = "0";
   }

   /* ------------------------------ Helper Functions  ------------------------------ */
   // Note: You may use these in your code, but do remember that your code should not have
   // any functions defined that are unused.

   /**
    * Returns the element that has the ID attribute with the specified value.
    * @param {string} element_id - element ID
    * @returns {object} DOM object associated with id.
    */
   function id(element_id) {
     return document.getElementById(element_id);
   }

   /**
    * Returns the array of elements that match the given CSS selector.
    * @param {string} query - CSS query selector
    * @returns {object[]} array of DOM objects matching the query.
    */
  function qsa(query) {
    return document.querySelectorAll(query);
  }

})();
