function init(){
   renderInformation()
}


function renderInformation() {
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";
  for (let index = 0; index < books.length; index++) {
    contentRef.innerHTML += getInformationTemplate(index);
  }
}

function getComments(index) {
  let comment = "";

  for (let i = 0; i < books[index].comments.length; i++) {
    comment += `
        
        <h3>Name: ${books[index].comments[i].name}</h3>
        <p>Comment: ${books[index].comments[i].comment}</p>
        
        `;
  }
  return comment;
}

function addComent(index) {
  let nameInputRef = document.getElementById(`name_input${index}`);
  let nameInput = nameInputRef.value;
  let commentInputRef = document.getElementById(`comment_input${index}`);
  let commentInput = commentInputRef.value;
  let newComment = {
    name: nameInput,
    comment: commentInput,
  };

  books[index].comments.push(newComment);

  renderInformation();

  nameInput = "";
  commentInput = "";
}

function likeUp(index) {
  books[index].likes++;
}

function likeDown(index) {
  let likeCounter = document.getElementById("counterUp");
  let counter = books[index].likes;
  if (counter == counter) {
    books[index].likes--;
    likeCounter.innerHTML += renderInformation();
  }
}
