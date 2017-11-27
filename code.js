function renderMovie(movie){
    //rendering logic
    document.getElementById("movietitle").innerText = movie.movietitle;
    document.getElementById("description").innerText = movie.description;
    document.getElementById("poster").src = movie.poster;

    let existingNode = document.getElementById("list");
    for(var i = 0; i < movie.list.length; i++){
        let newNode = document.createElement("li");
        existingNode.appendChild(newNode).innerText = movie.list[i];
    }
}

renderMovie(movieData);