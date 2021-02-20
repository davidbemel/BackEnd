function validar(formulario) {

  if (formulario.nombre.value.trim().length == 0) {
    alert("Nombre obligatorio");
    return false;
  }

  if (formulario.contrasena.value.trim().length == 0) {
    alert("Contraseña obligatorio");
    return false;
  }

  if (formulario.contrasena.value != formulario.confirmacion.value) {
    alert("Confirmación no coincide");
    return false;
  }

  return true;

}
