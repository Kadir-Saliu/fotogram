function init(){
   renderBooks()
}


function renderBooks() {
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";
  for (let index = 0; index < books.length; index++) {
    contentRef.innerHTML += getBooksTemplate(index);
  }
}

function getComments(index) {
  let comment = "";

  for (let i = 0; i < books[index].comments.length; i++) {
    console.log(i);
    
    comment += getCommentTemplate(index,i);
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

  renderBooks();

  nameInput = "";
  commentInput = "";
}

function changeLike(){
  
}
