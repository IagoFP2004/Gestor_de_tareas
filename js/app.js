var inputTarea = document.getElementById("nuevaTarea");
var botonAnhadir = document.getElementById("anhadirTarea");
var contadorTareas = document.getElementById("numeroTareas");
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
      var checkbox = document.createElement("input");

      li.textContent = tarea;
      checkbox.type = "checkbox";
      checkbox.addEventListener("click", function() {
         if (checkbox.checked) {
            li.style.textDecoration = "line-through"; // Marcar como completada
            li.style.backgroundColor = "lightgreen"; // Cambiar el color de fondo
            li.style.color = "black"; // Cambiar el color del texto
         } else {
            li.style.textDecoration = "none"; // Desmarcar
            li.style.backgroundColor = ""; // Cambiar el color de fondo
            li.style.color = "white"; // Cambiar el color del texto
         }
      });
      lista.appendChild(li);
      li.appendChild(checkbox);
      actualizarContador();
   })
}

function actualizarContador() {
   contadorTareas.textContent = "Tareas Pendientes: " + tareas.length;
}

actualizarContador(); // Inicializar el contador de tareas al cargar la página