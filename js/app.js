//id cajas encriptadas

const textarea = document.getElementById('caja_desencriptada');
const area_de_bienvenida = document.getElementById('seccion_dos_bienvenida');
const area_real_oculta = document.getElementById('seccion_dos_real');

textarea.addEventListener('focus',()=>{
    area_real_oculta.style.display = 'block';
    area_de_bienvenida.style.display = 'none';
});