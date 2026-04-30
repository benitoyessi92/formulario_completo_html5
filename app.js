function mostrarDatos(){
  let nombre = document.getElementById("nombre").value.trim();
  let edad = document.getElementById("edad").value.trim();
  let correo = document.getElementById("correo").value.trim();
  let grupo = document.getElementById("grupo").value.trim();
  let ciudad = document.getElementById("ciudad").value;
  let telefono = document.getElementById("telefono").value.trim();
  let comentario = document.getElementById("comentario").value.trim();

  let resultado = document.getElementById("resultado");

  if(nombre==="" || edad==="" || correo==="" || grupo==="" || ciudad==="" || telefono==="" || comentario===""){
    resultado.innerHTML = "⚠️ Completa todos los campos";
    resultado.style.background = "#ffe0d6";
    resultado.style.border = "2px solid #e34f26";
  } else {
    resultado.innerHTML =
      "<strong>Datos capturados:</strong><br><br>" +
      "Nombre: " + nombre + "<br>" +
      "Edad: " + edad + "<br>" +
      "Correo: " + correo + "<br>" +
      "Grupo: " + grupo + "<br>" +
      "Ciudad: " + ciudad + "<br>" +
      "Teléfono: " + telefono + "<br>" +
      "Comentario: " + comentario;

    resultado.style.background = "#e8ffe8";
    resultado.style.border = "2px solid #2ecc71";
  }
}
