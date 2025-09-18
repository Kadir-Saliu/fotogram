function getInformationTemplate(index) {
  return /*html*/`
    
 
    <article class="books">

        <h2>Name: ${books[index].name}</h2>

         <img class="header-img" src="./img/book.jpg" alt="" srcset="">

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
        
       
    </article>
    `;
}

function getLikedImgTemplate(index) {
  if (books[index].liked == true) {
    return `<img class="heart-img" onclick="likeUp(${index})" id="myImage"  src="./img/red-heart_.png" alt="">`;
  } else {
    return `<img class="heart-img" onclick="likeDown(${index})" id="myImage"  src="./img/heart_.png" alt="">`;
  }
}
