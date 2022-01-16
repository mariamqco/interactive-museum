
let collection = new Collection();
collection.startCollection();

function showInfoOnMouseOver(x,pieceIndex,descripIndex){
    x.innerHTML = "<p>"+collection.getPieces()[pieceIndex].getDescription()[descripIndex]+"</p>";
}

function hideInfoOnMouseLeave(x,pieceIndex,descripIndex){
    x.innerHTML = "";
    let image = document.createElement('img');    
    image.src = collection.getPieces()[pieceIndex].getImage()[descripIndex]
    console.log(collection.getPieces()[pieceIndex].getImage()[descripIndex]);
    x.appendChild(image);
}x