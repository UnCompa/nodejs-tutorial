//Importo el paquete
import colors from "colors";
import express from "express";

let usuarios = [
  {
    id: 1,
    username: "Pablo",
  },
  {
    id: 2,
    username: "Emi",
  },
  {
    id: 3,
    username: "Andrea",
  },
];

//Crear aplicacion ejecutando express
let app = express();
app.use(express.json());
//Levantar el servidor en un puerto
const PUERTO = 3000;

//Metodo GET - Enviar todos los datos
// 1- ruta, 2- midleware-opcional 3-request,response
app.get("/notasparaemi", (request, response) => {
  response.json(usuarios);
});
// Metodo GET con parametros (params)
// Buscar un solo objeto
app.get("/uno/:id", (req, res) => {
  let { id } = req.params;
  console.log(id);

  let usuarioEncontrado = usuarios.filter(
    (usuario) => usuario.id === parseInt(id)
  );
  console.log(usuarioEncontrado);

  res.json(usuarioEncontrado).status(200);
});

//Metodo POST - Crear un recurso
app.post("/crear", (req, res) => {
  let { id, username } = req.body;
  let newUser = {
    id,
    username,
  };
  usuarios.push(newUser);
  res.json(newUser).status(201);
});

app.listen(PUERTO, () => {
  console.log(
    `Servidor escuchando en el puerto: http://localhost:${PUERTO}`.green
  );
});
