function registrar(){
  let n=document.getElementById('nom').value,
      e=document.getElementById('edad').value,
      c=document.getElementById('correo').value,
      ci=document.getElementById('ciudad').value,
      res=document.getElementById('res');
  if(!n||!e||!c||!ci){
    res.innerHTML='<span class="icono">!</span><span>Completa todos los campos</span>';
    return;
  }
  res.innerHTML='<span class="icono">✓</span><span>¡Registro exitoso! Bienvenido '+n+'.<br>Tienes '+e+' años y vives en '+ci+'.<br>Correo: '+c+'</span>';
}
