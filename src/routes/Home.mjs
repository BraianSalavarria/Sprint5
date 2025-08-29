import express from 'express';

export async function Home(req, res){
    try{
        res.render('pages/home',{ title:'Bienvenido al Administrador de Paises' });

    }catch(error){
        res.status(500).json({mensaje: 'Error al obtener los paises',error: error.message});
    }
}
    