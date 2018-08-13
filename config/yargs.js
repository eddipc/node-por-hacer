const descripcion = {
    alias: 'd',
    desc: 'Descripción de la tarea por hacer',
    demand: true
}

const completado = {
  alias: 'c',
  desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
  .command('crear', 'Crear un elemanto por hacer', {descripcion})
  .command('actualizar', 'Actualiza el estado completado de una tarea', {descripcion, completado})
  .command('borrar', 'Borrar un elemento por hacer', {descripcion})
  .command('listar', 'Comando para listar todas las tareas por hacer')
  .help()
  .argv

module.exports = {
  argv
}
