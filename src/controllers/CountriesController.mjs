
import Countries from "../models/Countries.mjs";
import { obtenerTodosService, obtenerTodosLosPaisesAPI, actualizarService,eliminarService,eliminarTodosService,insertarService, guardarPaisesApiService, obtenerPorIdService } from "../services/CountriesService.mjs";
import { calculosEstadisticos } from "../public/js/calculosEstadisticos.js";



// CRUD - Aca nos encontramos con todas las funciones que se utilizan para la manipulacion de los datos que iran en las plantillas

//filtrado de los datos del Api
const filtradoCountriesAPI = ( countries ) => {
    return countries
    .filter( country => country.languages && country.languages.spa == 'Spanish')
    .map(({tld,cca2,ccn3,idd,cioc,unMember,landlocked,cca3,altSpellings,car,coatOfArms,postalCode, demonyms,translations, ...resto}) => ({...resto}))
    
}



//aca filtramos y guardamos todos los paises obtenidos del api
export async function guardarPaisesApiController(req, res){
    try{
        let countries = await obtenerTodosLosPaisesAPI();
        let filtradoCountries = filtradoCountriesAPI(countries)
        await guardarPaisesApiService(filtradoCountries)

        res.status(200).render('pages/success',{"message":"Los datos se guardaron sactifactoriamente.","title":"Resultado exitos"})

    }catch(error){
        console.log(error)

        res.status(500).render('pages/error-500',{"message":"Error al procesador los datos del API","title":"Error"})
    }
}

//insertamos un nuevo pais
export async function insertarCountryController(req, res) {
    try{
        let country = req.body;

        //convertimos el gini en un objeto map
        const parsedGini = {};
            if (Array.isArray(country.gini)) {
            country.gini.forEach(item => {
                parsedGini[item.year] = item.value;
            });
            }

        country.gini = parsedGini;

        let nuevoCountry = await insertarService(country);
        
        if (nuevoCountry){
            res.status(201).json({"message":"Pais agregado exitosamente"})
        }else{
            res.status(400).json({"message":"No se ha podido guardar el pais nuevo."})
        }
    
    }catch(error){
        
        res.status(500).json({ "message":"Ha ocurrido un error en el servidor"});
    }
}

//actualizamos un pais
export async function actualizarCountryController(req, res) {
    try{
        const id = req.params.id;
        let country = req.body;

        //convertimos el gini en un objeto map
        const parsedGini = {};
            if (Array.isArray(country.gini)) {
            country.gini.forEach(item => {
                parsedGini[item.year] = item.value;
            });
            }

         country.gini = parsedGini;

        const CountryActualizado = await actualizarService(id, country)
        if(CountryActualizado){
            res.status(200).json({
                message:"Pais actualizado correctamente"
            });
        }else{
             res.status(404).json({
                "message": "No se ha encontrado el pais"
            });
        }
    }catch(error){
        res.status(500).json({
            "message":"Ha ocurrido un error en el servidor."
        })
    }

}

//eliminacion de un pais
export async function eliminarCountryController(req, res) {
     try{
            const id= req.params.id;
            const countryEliminado = await eliminarService(id);
            if(countryEliminado){
                res.status(200).render('pages/success',{
                    "message":"Eliminacion de pais realizada con exito",
                    "title":"Eliminacion exitosa"
                });
            }else{
                res.status(404).render('pages/error-404',{
                    "message":"No se encontro el pais que se quiere eliminar en la BD",
                    "Title":"Error"
                });
            }

     }catch(error){
        console.log(error);
        res.status(500).render('pages/error-500',{
            "message":"Error en el servidor al eliminar pais",
            "title":"Error"
        })
     }
}


//eliminamos todos los paises
export async function eliminarTodosController(req,res){
    try{
            const documentos = await Countries.countDocuments({type: "Country"})
            console.log("nro de docuementos:", documentos.valueOf())
            
        if(documentos.valueOf() >0 ){
            const countries = await eliminarTodosService()
            console.log(`Paises eliminados en total:${countries.deletedCount}`)

                if(countries.deletedCount > 0){
                        res.status(200).render('pages/success',{"message":`Eliminacion exitosa,${countries.deletedCount} paises fueron eliminados de la base de datos`,"title":"exito"})
            
                }            
        }else{
            res.status(404).render('pages/error-404',{"message":`No se encontraron paises que eliminar en la base de datps`,"title":"Sin Datos"})
        }
           
    }catch(error){
        console.log(error)
        res.status(500).render('pages/error-500',{"message":"Error al eliminar paises","title":"Error"})
    }
}




//Renders - En esta seccion nos encontramos con todas las funciones que renderizan una plantilla ya sea con datos o no

export function insertarCountryRender(req,res) {
    res.render('pages/addCountrie',{
        "title":"Nuevo Pais"
    });
}

export async function editarCountryRender(req, res) {
    try{
    const id = req.params.id;
    const country = await obtenerPorIdService(id);
    if(country){

         res.status(200).render('pages/editCountrie',{"title":"Editar Pais",country});
    }else{
        res.status(404).render('pages/error-404',{"message":"No se ha encontrado el pais en la base de datos","title":"Error"})
    }
}catch(error){
    console.log(error);
    res.status(500).render('pages/error-500',{"message": "No se ha podido editar pais, error del servidor","title":"error"})
}
}

//confirmacion para eliminacion
export function confirmRender(req,res) {
    res.render('pages/confirm',{
        "message":"Esta seguro que quiere eliminar todos los paises de la Base de Datos?",
        "title":"Eliminar paises"
    });
    
}



//aca nostramos todos los paises de la base de datos
export async function obtenerTodosLosPaisesBDRender(req, res) {
   try{
    const countries = await obtenerTodosService()
    const estadisticas = calculosEstadisticos(countries)

    res.status(200).render('pages/listaCountries', { title: 'Lista de Países', countries: countries ,estadisticas});
   
} catch (error) {
       console.error('Error al obtener la lista de países:', error);
       res.status(500).render('pages/error-500', { title: 'Error 500', message: error.message });
   }
}

//Render exitoso para cuando actualizamos un pais
export function paisActualizadoExitosamenteRender(req,res){
    res.status(200).render('pages/success',{
        "message":"Pais actualizado exitosamente.",
        "title":"Operacion Exitosa"
    })
}

//Render exitoso para cuando creamos un pais
export function paisAgregadoExitosamenteRender(req,res){
    res.status(200).render('pages/success',{
        "message":"Pais agregado exitosamente.",
        "title":"Operacion Exitosa"
    })
}