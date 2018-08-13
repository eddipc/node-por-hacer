const fs = require('fs')

let listadoPorHacer = []

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer)

    let file_name = `db/data.json`

    fs.writeFile(file_name, data, (err) => {
      if (err) new Error('No se pudo grabar')
    })
}

const cargarDB = () => {
   try {
     listadoPorHacer = require('../db/data.json')
   } catch (e) {
     listadoPorHacer = []
   }
}

const getListado = () => {
  cargarDB()
  return listadoPorHacer
}

const actualizar = (descripcion, completado = true) => {
  cargarDB()

  let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)

  if(index >= 0) {
    listadoPorHacer[index].completado = completado
    guardarDB()
    return true
  } else {
    return false
  }
}

const borrar = (descripcion) => {
    cargarDB()

    let nuevoListado = listadoPorHacer.filter(tarea =>  {
      return tarea.descripcion !== descripcion
    })

    if(listadoPorHacer.length !== nuevoListado.length) {

      listadoPorHacer = nuevoListado
      guardarDB()

      return true
    } else {
      return false
    }
}

const crear = (descripcion) => {
  cargarDB()

  let porHacer = {
      descripcion,
      completado: false
  }

  listadoPorHacer.push(porHacer)

  guardarDB()

  return porHacer
}

module.exports = {
  crear,
  getListado,
  actualizar,
  borrar
}
