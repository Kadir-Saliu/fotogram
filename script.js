function renderInformation() {
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";
  for (let index = 0; index < books.length; index++) {
    contentRef.innerHTML += getInformationTemplate(index);
  }
}

function getInformationTemplate(index) {
  return `
    <div class="books">

        <h2>Name: ${books[index].name}</h2>

         <img src="./img/book.jpg" alt="" srcset="">

         <div class="liked">
          <p> <strong> Price: ${books[index].price} € </strong> </p>
           <p id="counterUp"> <strong> Like ${
             books[index].likes
           }  </strong> </p>

           <p id="myImage">${getLikedImgTemplate(index)} </p>
           
         </div>
        
        
        <p>Author/in: <strong> ${books[index].author} </strong> </p>
        <h3>Comments:</h3>

        <div class="all-comments">
            <p>${getComments(index)}</p>
        </div>
        
        <input id="name_input${index}" type="text" placeholder="Bitte Namen Eingeben!"> 
        <input id="comment_input${index}" type="text" placeholder="Bitte Kommentar eingeben!">
        <button onclick="addComent(${index})" type="button">Kommentar hinzufügen</button>
        
       
    </div>
    `;
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


function getLikedImgTemplate(index){
  if (books[index].liked == true) {
    return `<img onclick="likeUp(${index})" id="myImage"  src="./img/red-heart_.png" alt="">`;
}else{
  return `<img onclick="likeDown(${index})" id="myImage"  src="./img/heart_.png" alt="">`
}
}