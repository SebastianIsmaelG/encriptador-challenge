//id cajas encriptadas

const textarea = document.getElementById('caja_desencriptada');
const area_de_bienvenida = document.getElementById('seccion_dos_bienvenida');
const area_real_oculta = document.getElementById('seccion_dos_real');

//remplaza un div de la foto con el div de procesado
textarea.addEventListener('focus',()=>{
    area_real_oculta.style.display = 'block';
    area_de_bienvenida.style.display = 'none';
});
textarea.addEventListener('blur', () => {
    area_de_bienvenida.style.display = 'none';
});

function remplazar(elemento){
    let x = elemento.value.toLowerCase();
    // el texto sin tildes
    x = x.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
    //x = x.split(/[^A-Za-z0-9\#\& ñÑ]+/g);
    //x = x.split(/[^a-z0-9\#\& ñÑ]+/g);
    x = x.split(/[^a-z0-9\& ñÑ]+/g);
    x = x.join("");
    elemento.value = x;
}

function encriptar(){
    var texto = document.getElementById("caja_desencriptada").value;
    
    //quitar caracteres especiales
    minusculas = texto.toLowerCase();

    texto_separado = minusculas.split("");

    texto_separado = texto_separado.map(caracter => {
        // Convierte caracter de a a x y devuelve para hacer 
        return caracter === 'e' ? 'enter':
               caracter === 'i' ? 'imes':
               caracter === 'a' ? 'ai':
               caracter === 'o' ? 'ober':
               caracter === 'u' ? 'ufat':
               caracter;
        
      });

    //join y junta el texto
    var texto_encriptado = texto_separado.join("");
     
    //caja encriptada
    var caja_encriptada = document.getElementById("caja_encriptada");
    caja_encriptada.value = "";
    caja_encriptada.value = texto_encriptado;

}

function copiar_texto(){
    
    //copiamos al portapapeles
    navigator.clipboard.writeText(caja_encriptada.value)
        .then(() => {
            window.alert('Texto copiado al portapapeles');
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });

    
}

function desencriptar(){

    var caja_encriptada = document.getElementById("caja_encriptada");
    caja_encriptada.value = "";

    var texto = document.getElementById("caja_desencriptada").value;

     //quitar caracteres especiales
     minusculas = texto.toLowerCase();

     minusculas = minusculas.replace(/enter/g, 'e')
                             .replace(/imes/g, 'i')
                             .replace(/ai/g, 'a')
                             .replace(/ober/g, 'o')
                             .replace(/ufat/g, 'u');
      
 
     //caja del resultado
     var caja_encriptada = document.getElementById("caja_encriptada");
     caja_encriptada.value = "";
     caja_encriptada.value = minusculas;
}
