const promesa1 = new Promise((resolve, reject) => {
  const usuarios = [
    {
      id: 1,
      nombre: "Jesus",
      activo: false,
    },
    {
      id: 2,
      nombre: "Melissa",
      activo: true,
    },
  ];

  if (usuarios.length > 0) {
    const resp = {
      usuarios,
      msg: "Usuarios obtenidos",
    };

    resolve(resp);
  } else {
    const resp = {
      usuarios,
      msg: "No existen usuarios",
    };

    reject(resp);
  }
});

const llamarApisPromise = () => {
  promesa1
    .then((respuesta) => {
      console.log(respuesta);
    })
    .catch((error) => {
      console.log(error);
    });
};

const llamarApisAsyncAwait = async () => {
  try {
    const respuesta = await promesa1;
    console.log(respuesta);
  } catch (error) {
    console.log(error);
  }
};

// llamarApisPromise();
llamarApisAsyncAwait();
