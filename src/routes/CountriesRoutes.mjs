import express from 'express';
import {obtenerTodosLosPaisesBDRender,insertarCountryRender, editarCountryRender, guardarPaisesApiController, eliminarTodosController, confirmRender, eliminarCountryController, actualizarCountryController, paisActualizadoExitosamenteRender, paisAgregadoExitosamenteRender, insertarCountryController} from '../controllers/CountriesController.mjs';
import { Home } from './Home.mjs';
import { areaCountryValidation, bordersCountryValidation, capitalCountryValidation, creadorCountryValidation, nombreComunCountryValidation,nombreOficialCountryValidation, poblacionCountryValidation, regionCountryValidation, subregioCountryValidation, timezonesCountryValidation } from '../validations/validationsCountries.mjs';
import { handleValidationErrors } from '../validations/errorMiddleware.mjs';

 const router = express.Router();


router.get('/',Home);
router.get('/guardarPaises',guardarPaisesApiController)
router.delete('/eliminarTodos',eliminarTodosController)
router.delete('/eliminar/:id',eliminarCountryController);
router.put('/actualizar/:id',nombreOficialCountryValidation(),nombreComunCountryValidation(),capitalCountryValidation(),regionCountryValidation(),subregioCountryValidation(),bordersCountryValidation(),poblacionCountryValidation(),areaCountryValidation(),timezonesCountryValidation(),creadorCountryValidation(),handleValidationErrors,actualizarCountryController);
router.post('/nuevoPais',nombreOficialCountryValidation(),nombreComunCountryValidation(),capitalCountryValidation(),regionCountryValidation(),subregioCountryValidation(),bordersCountryValidation(),poblacionCountryValidation(),areaCountryValidation(),timezonesCountryValidation(),creadorCountryValidation(),handleValidationErrors,insertarCountryController);

//renders
router.get('/lista', obtenerTodosLosPaisesBDRender);
router.get('/agregar',insertarCountryRender);
router.get('/editar/:id',editarCountryRender)
router.get('/confirmar',confirmRender)
router.get('/paisActualizadoExitosamente',paisActualizadoExitosamenteRender)
router.get('/paisCreadoExitosamente',paisAgregadoExitosamenteRender)




export default router;

