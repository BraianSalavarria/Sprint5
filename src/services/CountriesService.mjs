import e from 'express';
import ContriesRepository from '../repository/ContriesRepository.mjs';

const API_URL = process.env.API_URL


//obtenemos los datos del EndPoint
export const obtenerTodosLosPaisesAPI = async () => {
  
  try {
    const response = await fetch(API_URL);
    if(!response.ok) {
        throw new Error(`Error al obtener los países: ${response.status}`);
    }
    let data = await response.json();
    return data;

  } catch (error) {
    console.error('ERROR AL OBTENER LOS PAISES:', error.message);
    throw error;
  }

};

//servicio donde guardamos los paises en la base de datos
export const guardarPaisesApiService = async (countries) => {
    return  await ContriesRepository.guardarPaisesApi(countries);
};

//obtenemos todos los datos de la base de datos
export const obtenerTodosService = async () => {
    return await ContriesRepository.obtenerTodos();
};

export const obtenerPorIdService = async (id) => {
    return await ContriesRepository.obtenerPorId(id)
}

export const insertarService = async (country) => {
    return await ContriesRepository.insertar(country);
};

export const actualizarService = async (id, country) => {
    return await ContriesRepository.actualizar(id, country);
};

export const eliminarService = async (id) => {
    return await ContriesRepository.eliminar(id);
};

export const eliminarTodosService = async () => {
    return await ContriesRepository.eliminarTodos();
};


