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

function tomar_texto(){
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
    console.log(texto_encriptado);
    
      
}