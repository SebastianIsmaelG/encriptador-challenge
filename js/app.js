//id cajas encriptadas

const textarea = document.getElementById('caja_desencriptada');
const area_de_bienvenida = document.getElementById('seccion_dos_bienvenida');
const area_real_oculta = document.getElementById('seccion_dos_real');

textarea.addEventListener('focus',()=>{
    area_real_oculta.style.display = 'block';
    area_de_bienvenida.style.display = 'none';
});
textarea.addEventListener('blur', () => {
    area_de_bienvenida.style.display = 'none';
});

function remplazar(elemento){
    let x = elemento.value;
    x = x.split(/[^A-Za-z0-9\#\& ]+/g);
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
    //tomo el valor de la caja, ver como saber si esta encriptado, desencriptar, borrar el texto de la caja encriptada y colocar el nuevo texto
}
