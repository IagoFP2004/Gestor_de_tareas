var inputTarea = document.getElementById("nuevaTarea");
var botonAnhadir = document.getElementById("anhadirTarea");
var contadorTareas = document.getElementById("numeroTareas");
var mensajeExito = document.getElementById("felicitacion");
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
   tareas.forEach((tarea,index)=> {
      var li = document.createElement("li");
      var checkbox = document.createElement("input");

      li.textContent = tarea;
      checkbox.type = "checkbox";
      checkbox.addEventListener("click", function() {
         if (checkbox.checked) {
            li.style.textDecoration = "line-through"; // Marcar como completada
            li.style.backgroundColor = "lightgreen"; // Cambiar el color de fondo
            li.style.color = "black"; // Cambiar el color del texto
            checkbox.disabled = true; // Deshabilitar el checkbox
           actualizarContador(); // Actualizar el contador de tareas
         } else {
            li.style.textDecoration = "none"; // Desmarcar
            li.style.backgroundColor = ""; // Cambiar el color de fondo
            li.style.color = "white"; // Cambiar el color del texto
         }
      });
      lista.appendChild(li);
      li.appendChild(checkbox);
      mostrarContador();
   })
}

function mostrarContador() {
   var lista = document.getElementById("listaTareas");
   var checkboxes = lista.querySelectorAll('input[type="checkbox"]');
   var pendientes = 0;
   checkboxes.forEach(cb => { if (!cb.checked) pendientes++; });
   contadorTareas.textContent = "Tareas Pendientes: " + pendientes;
}

function actualizarContador() {
   var lista = document.getElementById("listaTareas");
   var checkboxes = lista.querySelectorAll('input[type="checkbox"]');
   var pendientes = 0;
   checkboxes.forEach(cb => { if (!cb.checked) pendientes++; });
   contadorTareas.textContent = "Tareas Pendientes: " + pendientes;
   if (pendientes === 0) {
      mensajeExito.textContent = "¡Felicidades! Has completado todas las tareas.";
   }
}


mostrarContador(); // Inicializar el contador de tareas al cargar la página