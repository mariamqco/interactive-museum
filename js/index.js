
let collection = new Collection();
collection.startCollection();

function showInfoOnMouseOver(x,pieceIndex,descripIndex){
    x.innerHTML = "<p>"+collection.getPieces()[pieceIndex].getDescription()[descripIndex]+"</p>";
}

function hideInfoOnMouseLeave(x,pieceIndex,descripIndex){
    x.innerHTML = "";
    let image = document.createElement('img');    
    image.src = collection.getPieces()[pieceIndex].getImage()[descripIndex];    
    x.appendChild(image);
}

function showInfoOnDoubleClick(x,pieceIndex){
    x.src = collection.getPieces()[pieceIndex].getImage()[1]; 
    x.style.width="";
    x.style.height="";
    let divStr = '<div class="piece-info-container"><p>'+collection.getPieces()[pieceIndex].getDescription()[0]+'</p><p>'+collection.getPieces()[pieceIndex].getDescription()[1]+'</p></div>';
    x.insertAdjacentHTML('beforebegin',divStr );
    let divStr1 = '<div class="piece-info-container"><p>'+collection.getPieces()[pieceIndex].getDescription()[2]+'</p><p>'+collection.getPieces()[pieceIndex].getDescription()[3]+'</p></div>';
    x.insertAdjacentHTML('afterend',divStr1);      
}

function showInfoOnMouseDown(x,pieceIndex,descripIndex){
    let parent = x.parentElement;
    if(descripIndex === 0){        
        parent.getElementsByClassName('piece-info-container')[1].innerHTML = "<p>"+collection.getPieces()[pieceIndex].getDescription()[descripIndex]+"</p>";        
    }
    if(descripIndex === 1){
        parent.getElementsByClassName('piece-info-container')[2].innerHTML = "<p>"+collection.getPieces()[pieceIndex].getDescription()[descripIndex]+"</p>";
    }
    if(descripIndex === 2){
        parent.getElementsByClassName('piece-info-container')[0].innerHTML = "<p>"+collection.getPieces()[pieceIndex].getDescription()[descripIndex]+"</p>";
    }     
}

function showInfoOnMouseDown(x,pieceIndex,descripIndex){
    let parent = x.parentElement;
    x.innerHTML = "<p>"+collection.getPieces()[pieceIndex].getDescription()[descripIndex]+"</p>"       
}

function hideInfoOnMouseUp(x,pieceIndex,descripIndex){
    x.innerHTML = "";
    let image = document.createElement('img');    
    image.src = collection.getPieces()[pieceIndex].getImage()[descripIndex];    
    x.appendChild(image);
}
