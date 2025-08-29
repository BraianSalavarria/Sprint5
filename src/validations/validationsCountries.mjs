import { body } from "express-validator";



export const nombreOficialCountryValidation = () => [
    body('name.official')
        .notEmpty().withMessage('El nombre Oficial del pais es obligatorio.')
        .isLength({ min: 3, max: 90 }).withMessage('El nombre oficial del pais debe tener entre 3 y 90 caracteres.')
        .matches(/^[A-Za-z\s]+$/).withMessage("El nombre oficial del pais debe estar formado por sólo letras.")
        .trim()
        
];

export const nombreComunCountryValidation = () => [
    body('name.common')
        .notEmpty().withMessage('El nombre común del pais es obligatorio.')
        .isLength({ min: 3, max: 90 }).withMessage('El nombre común del pais debe tener entre 3 y 90 caracteres.')
        .matches(/^[A-Za-z\s]+$/).withMessage("El nombre común del pais debe estar formado por sólo letras.")
        .trim()
        
];

export const capitalCountryValidation = () => [
    body('capital')
        .notEmpty().withMessage('La capital del pais es obligatorio.')
        .isLength({ min: 3, max: 90 }).withMessage('El nombre de la capital debe tener entre 3 y 90 caracteres.')
        .matches(/^[A-Za-z\s]+$/).withMessage("El nombre de la capita del pais debe estar formado por sólo letras.")
        .trim()
        
];

export const regionCountryValidation = () => [
    body('region')
        .notEmpty().withMessage('La region del pais es obligatorio.')
        .isLength({ min: 3, max: 90 }).withMessage('El nombre de la region debe tener entre 3 y 90 caracteres.')
        .matches(/^[A-Za-z\s]+$/).withMessage("La región del pais debe estar formado por sólo letras.")
        .trim()
        
];

export const subregioCountryValidation = () => [
    body('subregion')
        .notEmpty().withMessage('La subregión del pais es obligatorio.')
        .isLength({ min: 3, max: 90 }).withMessage('El nombre de la subregion debe tener entre 3 y 90 caracteres.')
        .matches(/^[A-Za-z\s]+$/).withMessage("El nombre de la subregion debe estar formado por sólo letras.")
        .trim()
        
];

export const bordersCountryValidation = () =>[
   // Validar que sea array (puede estar vacío)
  body('borders')
    .isArray().withMessage('El campo "fronteras" debe ser un array.'),

  // Validar cada elemento del array (si existen)
  body('borders.*')
    .optional() // Solo valida si hay elementos en el array
    .isString().withMessage('Cada código de frontera debe ser una cadena de texto.')
    .isLength({ min: 3, max: 3 }).withMessage('Cada código debe tener exactamente 3 letras.')
    .matches(/^[A-Z]+$/).withMessage('Cada código debe contener solo letras mayúsculas.')
]

export const poblacionCountryValidation = () => [
    body('population')
        .notEmpty().withMessage('La poblacion del pais es obligatorio')
        .isInt({ min: 1 }).withMessage('La poblacion debe ser un número entero mayor a 0.')
];

export const areaCountryValidation = () => [
    body('area')
        .notEmpty().withMessage('El area del pais es obligatorio')
        .isFloat({ min: 1 }).withMessage('El area del pais debe ser un número entero mayor a 0.')
];

export const timezonesCountryValidation = () => [
    body('timezones')
    .isArray({ min: 1 }).withMessage('Las zonas horarias deben enviarse en un array con al menos un valor.'),

  body('timezones.*')
    .matches(/^UTC([+-](0[0-9]|1[0-4]):[0-5][0-9])$/)
    .withMessage('Cada zona horaria debe estar en formato válido, ej: UTC-04:00 o UTC+05:30')  
];

export const creadorCountryValidation = () => [
    body('creador')
    .trim() // quita espacios al inicio y fin
    .notEmpty().withMessage('El nombre del creador es obligatorio.')
    .isLength({ min: 5, max: 90 }).withMessage('El nombre del creador debe tener entre 5 y 90 caracteres.')
    .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/)
    .withMessage('El nombre del creador sólo puede contener letras y espacios.')
];

export const giniYearCountryValidation = () => [
    body('giniYear')
    .isEmpty().withMessage('El año del indice gini es obligatio.')
    .isInt({min:1800}).withMessage('El año debe ser un numero entero mayor al año 1800.')
    .isAlphanumeric().withMessage('El año sólo debe contener letras.')
    .trim()
]

export const giniValueCountryValidation = () => [
    body('giniValue')
    .isEmpty().withMessage('El valor del indice gini es obligatio.')
    .isFloat({min:0, max:100}).withMessage('El valor del indice gini debe ser un numero decimal')
    .isAlphanumeric().withMessage('El año sólo debe contener letras.')
    .trim()
]

