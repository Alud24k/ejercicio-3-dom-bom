document.addEventListener("DOMContentLoaded", function () {
  const agregarTareaBtn = document.getElementById("agregarTarea");
  const listaTareas = document.getElementById("listaTareas");

  agregarTareaBtn.addEventListener("click", function (event) {
    event.preventDefault();

    const tareaInput = document.getElementById("tarea");
    const tarea = tareaInput.value.trim();

    if (tarea !== "") {
      const li = document.createElement("li");
      li.className = "list-group-item";
      li.textContent = tarea;

      const botonEliminar = document.createElement("button");
      botonEliminar.className = "btn btn-danger btn-sm float-end";
      botonEliminar.textContent = "Eliminar";

      botonEliminar.addEventListener("click", function () {
        listaTareas.removeChild(li);
      });

      li.appendChild(botonEliminar);
      listaTareas.appendChild(li);

      tareaInput.value = "";
    } else {
      alert("Por favor ingrese una tarea");
    }
  });
});
