// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', function(){
  addEvents()
})


function addEvents() {
  const hearts = document.getElementsByClassName("like-glyph") 
  for (heart of hearts) {
    heart.addEventListener('click', heartClick)
  }
}

function heartClick(event) {
  mimicServerCall()
    .then(message => {
      const thisHeart = event.target
      if (thisHeart.innerText == EMPTY_HEART) { 
        thisHeart.innerText = FULL_HEART
        thisHeart.className = "activated-heart"
      } else {
        thisHeart.innerText = EMPTY_HEART
        thisHeart.className = ""
      }
    })
    .catch(error => {
      const modal = document.getElementById('modal')
      modal.className = ''
      modal.innerText = error
      setTimeout(() => modal.className = 'hidden', 5000)
    })
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
