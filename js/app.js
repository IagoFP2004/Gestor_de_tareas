var inputTarea = document.getElementById("nuevaTarea");
var botonAnhadir = document.getElementById("anhadirTarea");
var tareas = [];

botonAnhadir.addEventListener("click", function() {
   var nuevaTarea = inputTarea.value.trim();
   if (nuevaTarea !== "" && !tareas.includes(nuevaTarea)) {
      tareas.push(nuevaTarea);
      inputTarea.value = ""; // Limpiar el campo de entrada
      mostrarTareas(tareas); // Mostrar las tareas actualizadas
   } else {
      inputTarea.value = ""; // Limpiar el campo de entrada
   }
}) 

function mostrarTareas(tareas) {
   var lista = document.getElementById("listaTareas");
   lista.innerHTML = ""; // Limpiar la lista antes de mostrar
   tareas.forEach((tarea)=> {
      var li = document.createElement("li");
      li.textContent = tarea;
      lista.appendChild(li);
   })
}