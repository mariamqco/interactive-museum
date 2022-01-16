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
        
        let piece2 = new Piece("Old Tjikko");
        piece2.setImage(["./img/Old-Tjikko1.jpg","./img/Old-Tjikko.jpg"]);
        piece2.setDescription(
            [
            "El Old Tjikko es una pícea de Noruega de 9558 años de antigüedad, ubicado en el Parque nacional de Fulufjället, Provincia de Dalarna en Suecia. originalmente ganó fama como el árbol más antiguo del mundo. Old Tjikko es, sin embargo, un árbol clonal que ha regenerado nuevos troncos, ramas y raíces durante milenios en lugar de un árbol individual de gran edad. Old Tjikko es el árbol clonado más antiguo del mundo. Sin embargo, hay muchos ejemplos de colonias clonales (múltiples árboles conectados por un sistema de raíces comunes) mucho más antiguas, como Pando."
            ,
            "La edad del árbol fue determinada por un test de datación por radiocarbono del sistema de raíces debajo del árbol, no por dendrocronología, es decir contar los anillos del árbol. Alrededor de Old Tjikko hay otros ejemplares de pinos que viven en ese lugar desde el final de la última Edad de Hielo. Muchos de ellos ya superaron los 8.000 años de edad."
            ,
            "Tjikko, nacido en la Era Glaciar ha sobrevivido todos estos años gracias a un proceso llamado clonación vegetal: cuando el tronco muere, el sistema central radicular se mantiene vivo, y de él brotan nuevos tallos que, por clonación, regeneran todo el tronco. Los troncos de los árboles que presentan esta capacidad pueden morir y volver a crecer muchas veces y el material genético de cada tronco, siempre es idéntico al anterior."
            ,
            "Durante miles de años el árbol no fue más que un arbusto debido a que las condiciones eran muy frías para que pudiera crecer más. Sin embargo, a medida que el planeta se va calentando puede tener un desarrollo normal, tanto es así que ahora mismo mide 5 metros de alto."
            ]
            );    
        this.pieces.push(piece2); 

        let piece3 = new Piece("Matusalén");
        piece3.image = ["./img/Methuselah.jpg","./img/Methuselah1.jpg","./img/Methuselah2.jpg"];
        piece3.setDescription(
            [
            "El árbol vivo más viejo del mundo tiene 4.847 años, se llama Matusalén, en un guiño al personaje bíblico que vivió hasta los 969 años, y se encuentra en el Bosque Nacional Inyo, en el centro de California, Estados Unidos. Es un ejemplar de Pinus longaeva, la especie que descubrió en la década de 1930 Edmund Schulman, un paleontólogo que se dedicaba a fechar sequías y eventos cósmicos a través de los anillos de los árboles." 
            ,
            "Estos pinos crecen a más de 3.000 metros sobre el nivel del mar, en una tierra árida azotada por vientos helados. Y es esa adversidad del ambiente lo que los hace tan longevos. Gracias a los intempestivos vientos, su tronco se fortalece y forma una gruesa capa de resina que los protege de la putrefacción y de parásitos u hongos. Así que, según los expertos, Matusalén es un pino torcido, enredado en sí mismo, un árbol que parece más muerto que vivo, una suerte de escultura natural."
            ,
            "Sin embargo, por muchos detalles que hayan salido a la luz sobre el aspecto de Matusalén, a menos que seas uno de los científicos que lo investigan no podrás conocerlo. El Servicio Forestal de Estados Unidos se niega a revelar sus coordenadas exactas para evitar vandalismos. Ni siquiera se ha difundido fotografía alguna de Matusalén, por lo que las imágenes mostradas no pertenece al árbol en cuestión, sino a otro ejemplar milenario del Bosque Nacional de Inyo."           
            ]
            );  
        this.pieces.push(piece3);  

        let piece4 = new Piece("Ginkgo");
        piece4.image = ["./img/ginkgo"];
        piece4.setDescription(
            [
            "Ginkgo es un género de gimnospermas. Este clado, de amplia distribución temporal pues se conocen fósiles desde el Triásico hasta el Mioceno, tuvo su máxima diversidad durante el Mesozoico. De las más de 30 especies conocidas únicamente una de ellas Ginkgo biloba sobrevive en la actualidad. Los científicos creen que, en el pasado, el mundo contenía muchas especies diferentes de ginkgo." 
            ,
            "Las plantas fosilizadas halladas en una mina de carbón en la región central de China que se remontan a hace 170 millones de años muestran árboles ginkgo con solo ligeras variaciones en la forma de sus hojas y en el número de semillas. La especie Ginkgo biloba constituye uno de los mejores ejemplos de relicto o fósil viviente conocidos y existe hace 250 millones de años."
            ,
            "La especie suele describirse como fósil viviente —una categoría en la que también figuran el cangrejo cacerola y el helecho Osmunda regalis— porque es un resto de un grupo que antes era diverso y que existió hace millones de años. Como el ginkgo es una especie tan antigua, retiene características que no suelen observarse en árboles modernos."    
            ]
            ); 
        this.pieces.push(piece4); 

        let piece5 = new Piece("Tuátara");
        piece5.image = ["./img/Tuatara.jpg"]
        piece5.setDescription(
            [
            "Los tuátaras o esfenodontes (género Sphenodon) son reptiles endémicos de las islas aledañas a Nueva Zelanda, constituyen al único género del orden Sphenodontia que ha sobrevivido hasta la actualidad, prácticamente sin cambios desde la Era Mesozoica. El significado de su nombre común proviene del maorí y quiere decir espalda espinosa, para ellos el tuátara es considerado un taonga (tesoro especial).​ A primera vista (por convergencia evolutiva) son parecidas a las iguanas, con las que, sin embargo, no están cercanamente emparentadas."    
            ,
            "Las dos especies actuales de tuátaras y la extinta conocida tienen parientes muy cercanos que existieron hace ya 200 millones de años, a la par de los dinosaurios. En esas épocas habitaban el supercontinente de Gondwana habiéndose distribuido, según parece, desde el área que hoy corresponde a América del Sur pasando por la Antártida hasta Australia. Al separarse de Australia por deriva continental, Nueva Zelanda se convertiría en el único reducto actual de Sphenodontidae, motivo por el cual se califica a estos animales como fósiles vivientes.  Aunque los tuátaras hayan conservado características morfológicas de sus antepasados del Mesozoico (240 - 230 millones de años), no hay evidencias de un registro fósil continuo que lo defina. "
            ]
            );
        this.pieces.push(piece5)
        }

}