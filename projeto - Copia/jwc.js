let contador = 1;
document.getElementById("radio1").checked = true;




function nextImage(){
    contador++;
    if(contador>5){
        contador = 1;
    }

    document.getElementById("radio"+contador).checked = true;

}