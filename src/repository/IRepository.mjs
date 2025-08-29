class IRepository{

    obtenerTodos(){
        throw new Error('metodo obtenerTodos no implementado');
    }

    obtenerPorId(){
        throw new Error('metodo obtenerPorId no implementado');
    }

    insertar(){
        throw new Error('metodo insertar no implementado');
    }

    actualizar(){
        throw new Error('metodo actualizar no implementado');
    }
    
    eliminar(){
        throw new Error('metodo eliminar no implementado');
    }

    eliminarTodos(){
        throw new Error('metodo eliminarTodos no implementado');
    }

    guardarPaisesApi(countries) {
        throw new Error('metodo guardarPaisesApi no implementado');
    }


}
export default IRepository;