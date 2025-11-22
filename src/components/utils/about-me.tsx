export const calculeAge = (day: string) => {
  const hoy = new Date();
  const nacimiento = new Date(day);
  
  // Validar que la fecha sea válida
  if (isNaN(nacimiento.getTime())) {
      throw new Error("Fecha de nacimiento inválida");
  }
  
  // Calcular diferencias
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const mesActual = hoy.getMonth();
  const mesNacimiento = nacimiento.getMonth();
  const diaActual = hoy.getDate();
  const diaNacimiento = nacimiento.getDate();

  // Ajustar si aún no ha pasado el mes de cumpleaños
  // O si está en el mes pero no ha llegado el día
  if (mesActual < mesNacimiento || 
      (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
      edad--;
  }

  return edad;
}
 