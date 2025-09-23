function getBooksTemplate(index) {
  return /*html*/ `
    
 
    <article class="books">

        <h2>Name: ${books[index].name}</h2>

         <img class="header-img" src="./img/book.jpg" alt="" srcset="">

         <div class="liked">
            <p> <strong> Price: ${books[index].price} € </strong> </p>
            <p id="counterUp"> <strong> Like ${books[index].likes}</strong> </p>
            <p id="myImage">${getLikedImgTemplate(index)} </p>
          </div>
        
        
        <p>Author/in: <strong> ${books[index].author} </strong> </p>
        <h3>Comments:</h3>

        <section class="all-comments">
            <p>${getComments(index)}</p>
        </section>

        <form onsubmit="addComent(${index})"  class="add-comments" id='content'>
        <input id="name_input${index}" type="text" placeholder="Bitte Namen Eingeben!" required> 
        <input id="comment_input${index}" type="text" placeholder="Bitte Kommentar eingeben!" required>
        <button type="submit">Kommentar hinzufügen</button>
        </form>
       
    </article>
    `;
}

function getCommentTemplate(index,i){
 return `
        
        <h3>Name: ${books[index].comments[i].name}</h3>
        <p>Comment: ${books[index].comments[i].comment}</p>
        
        `;
}

function getLikedImgTemplate(index) {
  if (books[index].liked == true) {
    return `<img class="heart-img" onclick="changeLike(${index})" id="myImage"  src="./img/red-heart_.png" alt="">`;
  } else {
    return `<img class="heart-img" onclick="changeLike(${index})" id="myImage"  src="./img/heart_.png" alt="">`;
  }
}
