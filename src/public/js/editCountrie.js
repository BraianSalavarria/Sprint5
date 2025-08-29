
  const giniContainer = document.getElementById("gini-container");
  const tablaGiniBody = document.querySelector("#tabla-paises tbody");
  const tablaGini = document.getElementById('tabla-paises')


  // funcion que para el boton eliminar de tabla gini que se carga al comienz
  tablaGini.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('eliminar-gini')) {
      // e.target es el botón que se clickeó
      const fila = e.target.closest('tr'); // Encuentra la fila que contiene el botón
      if (fila) {
        fila.remove(); // Borra la fila del DOM
      }
    }
  });


  // Función para crear fila en la tabla gini
  function agregarFilaGini(year, value) {

    // Si existe el mensaje "no hay datos", lo eliminamos
  const mensajeRow = document.getElementById("mensaje");
  if (mensajeRow) {
    mensajeRow.remove();
  }

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${year}</td>
      <td>${value}</td>
      <td><button type="button" class="btn btn-danger btn-sm eliminar-gini">Eliminar</button></td>
    `;

    // Añadir evento de eliminar al boton eliminar de la fila
    tr.querySelector(".eliminar-gini").addEventListener("click", () => {
      tr.remove();
    });

    tablaGiniBody.appendChild(tr);
  }


  // funcion para agregar valores del indice gini y los agrega a la tabla
  document.getElementById("add-gini").addEventListener("click", () => {
    const yearInput = document.getElementById("giniYear");
    const valueInput = document.getElementById("giniValue");

    const year = yearInput.value.trim();
    const value = valueInput.value.trim();

    if (!year || !value) {
      alert("Completa año y valor antes de agregar.");
      return;
    }

    agregarFilaGini(year, value);

    // Limpiar inputs
    yearInput.value = "";
    valueInput.value = "";
  });

  // Botón par borrar los datos ingresados en el los campos para agregar indice gini
  giniContainer.querySelectorAll(".remove-gini").forEach(btn => {
    btn.addEventListener("click", () => {
      giniContainer.querySelectorAll("input").forEach(input => input.value = "");
    });
  });

  // Envío del formulario con Fetch
  document.getElementById("editcountrie").addEventListener("submit", async (e) => {
    e.preventDefault();

    // Recoger datos Gini de la tabla
    const giniDataArray = [];
    tablaGiniBody.querySelectorAll("tr").forEach(tr => {
      const tds = tr.querySelectorAll("td");
      if (tds.length >= 2) {
        giniDataArray.push({
          year: tds[0].innerText,
          value: parseFloat(tds[1].innerText)
        });
      }
    });

    // Crear objeto con todos los datos del formulario
    const data = {
      id: document.getElementById("id").value,
      name: {
        common: document.getElementById("nombreComun").value,
        official: document.getElementById("nombreOficial").value
      },
      capital: document.getElementById("capital").value,
      region: document.getElementById("region").value,
      subregion: document.getElementById("subregion").value,
      borders: document.getElementById("fronteras").value.split(",").map(b => b.trim()),
      population: parseInt(document.getElementById("poblacion").value),
      area: parseFloat(document.getElementById("area").value),
      independent: document.getElementById("independent").value === "true",
      timezones: document.getElementById("timezones").value.split(",").map(t => t.trim()),
      creador: document.getElementById("creador").value,
      gini: giniDataArray
    };


    try{
            
          
            const response = await fetch(`/countries/actualizar/${data.id}`,{
                method:'PUT',
                headers: {
                        'Content-Type': 'application/json'
                        },
                body: JSON.stringify(data)      
            });

            if(response.ok){
               const message = await response.json();
               console.log(message.message);
               window.location.assign('/countries/paisActualizadoExitosamente')
            
            }else{
                    const errorData = await response.json();
                    const { status, message, errors } = errorData;
                    console.log(message)
                    console.log(status)
                    console.log(errors)
                    if (errors && errors.length > 0) {
                        const errorMessages = errors.map(err => `• ${err.message}`).join('\n');
                        alert(`Errores de validación:\n${errorMessages}`);
                    } else {
                        alert(`Error ${status || response.status}: ${message || 'Error desconocido'}`);
                    }
                
                 }


    }catch(error){
            alert(`Error al enviar la solicitud: ${error}`)
            console.log(`Error al enviar la solicitud: ${error}`)
    }

  });
