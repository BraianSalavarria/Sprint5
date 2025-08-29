import Countries from '../models/Countries.mjs';
import  IRepository from './IRepository.mjs'

 class CountriesRepository extends IRepository{

    
    async guardarPaisesApi(countries) {
        try {
                 await Countries.insertMany(countries);
                console.log('PAISES GUARDADOS EN BD..');
                const total = await Countries.countDocuments();
                console.log(`Total de países en la BD: ${total}`);

        } catch (error) {
            console.error('ERROR AL GUARDAR PAISES EN LA BASE DE DATOS:', error);
            throw error;
        }
    }   

    async obtenerTodos(){
        return await Countries.find({type: "Country"});
    }
    async obtenerPorId(id){
        return await Countries.findById(id)
    }

    async insertar(country){
       try {
            const nuevoPais = new Countries(country);
            return await nuevoPais.save();

       } catch (error) {
           console.log('Error al guardar el país en la Base de Datos:', error);
           throw new Error('Error al guardar el país en la Base de Datos');
       }
    }

    async actualizar(id, country){
        const countryActualizado = await Countries.findByIdAndUpdate(id, country, {new: true});

        if (!countryActualizado) {
            throw new Error('Error al actualizar el país en la Base de Datos, al parecer no existe ese pais en la BD');
        }

        return countryActualizado;
    }

    async eliminar(id){
        const countryEliminado = await Countries.findByIdAndDelete(id);
        return countryEliminado;
    }

    async eliminarTodos() {
        try {
           const result = await Countries.deleteMany({type:"Country"});
            console.log('TODOS LOS PAISES ELIMINADOS DE LA BD..');
            return result;
        } catch (error) {
            console.error('ERROR AL ELIMINAR PAISES EN LA BASE DE DATOS:', error);
            throw error;
        }
    }

}
    

export default new CountriesRepository();