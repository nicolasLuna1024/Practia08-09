const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para manejar datos JSON en las solicitudes
app.use(express.json());

// Ruta para la raíz
app.get("/", (req, res) => {
res.send("Hello world!");
});

// Datos de los integrantes
const integrantes = [
{
    id: 1,
    nombre: "Nicolas",
    apellido: "Luna",
    edad: 21,
    email: "nicolas.luna@epn.edu.ec",
},
{
    id: 2,
    nombre: "Joel",
    apellido: "...",
    edad: 27,
    email: "joel....@epn.edu.ec",
},
{
    id: 3,
    nombre: "Gabriel",
    apellido: "Oña",
    edad: 20,
    email: "gabriel.oña@epn.edu.ec",
},
{
    id: 4,
    nombre: "Angel",
    apellido: "Maldonado",
    edad: 20,
    email: "angel.maldonado@epn.edu.ec",
},
];

// Ruta para obtener un integrante por ID
app.get("/integrantes/:id", (req, res) => {
const id = parseInt(req.params.id);
const integrante = integrantes.find((int) => int.id === id);

if (integrante) {
    res.status(200).json(integrante);
} else {
    res.status(404).json({ error: "Integrante no encontrado" });
}
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
