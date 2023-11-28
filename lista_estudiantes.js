const mostrarListaEstudiantes = (estudiantes) => {
    console.log("lista de estudantes registrados: ");
    estudiantes.forEach((estudiante) => {
        console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}`);
    });
};

module.exports = {mostrarListaEstudiantes};
