class Collection{
    constructor(){
        this.pieces = [];
    }

    getPieces(){
        return this.pieces
    }

    setPieces(pieces){
        this.pieces = pieces;   
    }

    startCollection(){
        let piece1 = new Piece("Pando");
        piece1.setImage(["./img/pando.jpg","./img/pando2.jpg","./img/pando1.jpg"])
        piece1.setDescription(
            [
            "Pando, o el gigante temblón (en inglés, The Trembling Giant) es una colonia clonal surgida a partir de un único álamo temblón masculino (Populus tremuloides) localizada en el estado de Utah, en Estados Unidos. A partir de marcadores genéticos se ha determinado que toda ella forma parte de un único organismo viviente con un sistema masivo de raíces bajo tierra. Se estima que la planta pesa de forma colectiva aproximadamente unas 6615 toneladas, lo que la convierte en el organismo viviente más pesado. El sistema radicular de Pando se considera entre los organismos vivientes más viejos del mundo, con una edad aproximada de 80 000 años."
            ,
            "Pando es un álamo de la especie Populus tremuloides (álamo temblón) que surgió de una semilla. Ésta creció y echó raíces. Con el paso del tiempo, más y más árboles empezaron a surgir de esas mismas raíces, entrelazándose y compartiendo un mismo código genético en un proceso ininterrumpido. Pese a que algunos árboles individuales pueden morir, el organismo principal sigue viviendo."
            ,
            "Por desgracia, este organismo está en riesgo de desaparecer y esta vez no es por la mano del hombre. La causa de ello son los ciervos y alces que pastan a su alrededor para alimentarse y que causa su deterioro.Debido a la escasa proliferación del puma, su depredador natural, los ciervos pastorean libremente por los alrededores de la colonia clonal. Esto permite que se alimenten de las partes superiores de los troncos que empiezan a formarse, lo que causa su muerte. También se comen los primeros retoños, lo que impide que se formen nuevos árboles. A su vez, esto hace que se frene la renovación natural del sistema.Si a ello le sumamos las enfermedades causadas por hongos y la mancha foliar, es fácil predecir que el sistema en cuestión peligra en los años venideros."
            ]
            );    
        this.pieces.push(piece1); 
        }

}