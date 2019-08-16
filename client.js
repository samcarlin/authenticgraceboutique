// client-side js
// run by the browser each time your view template is loaded

console.log('hello world :o');

// our default array of motivations
const comments = [
  'Push yourself, because no one is going to do it for you.',
  'Dream bigger. Do bigger.',
  "It's going to be hard, but hard does not mean impossible."
];

// define variables that reference elements on our page
const commentsList = document.getElementById('comments');
const commentsForm = document.forms[0];
const commentInput = commentsForm.elements['comment'];

// a helper function that creates a list item for a given motivational comment
const appendNewComment = function(comment) {
  const newListItem = document.createElement('li');
  newListItem.innerHTML = comment;
  commentsList.appendChild(newListItem);
}

// iterate through every motivational comment and add it to our page
comments.forEach( function(comment) {
  appendNewComment(comment);
});

// listen for the form to be submitted and add a new moptivational coment when it is
commentsForm.onsubmit = function(event) {
  // stop our form submission from refreshing the page
  event.preventDefault();

  // get comment value and add it to the list
  comments.push(commentInput.value);
  appendNewComment(commentInput.value);

  // reset form 
  commentInput.value = '';
  commentInput.focus();
};