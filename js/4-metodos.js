const obtenerClientes = async () => {
  try {
    const respuesta = await fetch(
      "https://ucamp-api.onrender.com/api/v1/customers"
    );
    const json = await respuesta.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

const obtenerCliente = async () => {
  try {
    const respuesta = await fetch(
      "https://ucamp-api.onrender.com/api/v1/customers/643ab0727ff131d0b2870c63"
    );
    const json = await respuesta.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

const crearCliente = async () => {
  try {
    const respuesta = await fetch(
      "https://ucamp-api.onrender.com/api/v1/customers",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: "Berenice",
          lastName: "Garza",
        }),
      }
    );
    const json = await respuesta.json();

    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

const actualizarCliente = async () => {
  try {
    const respuesta = await fetch(
      "https://ucamp-api.onrender.com/api/v1/customers/643af2c2c61920fa698bbd19",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjNmM2UzYTBmM2QwMzQyN2Y3YWY5ZWY4IiwiaWF0IjoxNjgxNTg1NTIyLCJleHAiOjE2ODE1OTk5MjJ9.XFN9N6AGl9oViPlyYLgb5OwrtqRB5-L4dKI1XE7UoUc",
        },
        body: JSON.stringify({
          firstName: "Bertin",
        }),
      }
    );
    const json = await respuesta.json();

    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

const eliminarCliente = async () => {
  try {
    const respuesta = await fetch(
      "https://ucamp-api.onrender.com/api/v1/customers/643af2c2c61920fa698bbd19",
      {
        method: "DELETE",
      }
    );
    const json = await respuesta.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};
