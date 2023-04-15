const cuerpoTabla = document.getElementById("cuerpoTabla");

const mostrarResultados = (resultados) => {
  cuerpoTabla.innerHTML = "";
  resultados.forEach((cliente) => {
    cuerpoTabla.innerHTML += `<tr>
        <th scope="row">${cliente.id}</th>
        <td>${cliente.firstName}</td>
        <td>${cliente.lastName}</td>
        <td>
          <button
            type="button"
            class="btn btn-danger"
            onclick="eliminarCliente('${cliente.id}')"
          >
            Eliminar
          </button>
        <td>
        <td>
          <button
            type="button"
            class="btn btn-warning"
            onclick="actualizarCliente('${cliente.id}')"
          >
            Editar
          </button>
        <td>
    </tr>`;
  });
};

const obtenerClientes = async () => {
  try {
    const respuesta = await axios.get(
      "https://ucamp-api.onrender.com/api/v1/customers"
    );
    const datos = respuesta.data;
    const resultados = datos?.data;

    mostrarResultados(resultados);

    console.log(resultados);
  } catch (error) {
    console.log(error);
  }
};

const obtenerCliente = async () => {
  try {
    const respuesta = await axios.get(
      "https://ucamp-api.onrender.com/api/v1/customers/643ab0727ff131d0b2870c63"
    );
    const datos = respuesta.data;
    console.log(datos);

    // const respuesta = await fetch(
    //   "https://ucamp-api.onrender.com/api/v1/customers/643ab0727ff131d0b2870c63"
    // );
    // const json = await respuesta.json();
    // console.log(json);
  } catch (error) {
    console.log(error);
  }
};

const crearCliente = async () => {
  try {
    const respuesta = await axios.post(
      "https://ucamp-api.onrender.com/api/v1/customers",
      {
        firstName: "Manuel",
        lastName: "Garza",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const datos = respuesta.data;
    console.log(datos);
  } catch (error) {
    console.log(error);
  }
};

const actualizarCliente = async () => {
  try {
    const respuesta = await axios.put(
      "https://ucamp-api.onrender.com/api/v1/customers/643ab32ea305def8e4236a0b",
      {
        firstName: "Jose",
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjNmM2UzYTBmM2QwMzQyN2Y3YWY5ZWY4IiwiaWF0IjoxNjgxNTg1NTIyLCJleHAiOjE2ODE1OTk5MjJ9.XFN9N6AGl9oViPlyYLgb5OwrtqRB5-L4dKI1XE7UoUc",
        },
      }
    );
    const datos = respuesta.data;
    console.log(datos);
  } catch (error) {
    console.log(error);
  }
};

const eliminarCliente = async (id) => {
  try {
    const respuesta = await axios.delete(
      `https://ucamp-api.onrender.com/api/v1/customers/${id}`
    );
    const datos = respuesta.data;
    console.log(datos);
  } catch (error) {
    console.log(error);
  }
};

window.addEventListener("load", obtenerClientes);
