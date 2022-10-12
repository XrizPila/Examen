// Librerias o paquetes necesarios para Node
const express = require('express')
const req = require ('express/lib/request')
const routes = express.Router() 
/*routes.get('/api',(req, res)=>{
    res.send('USANDO RUTAS')
})*/
routes.get('/api/listarLibro',(req, res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        conn.query('SELECT * FROM libro',(err,rows)=>{
            if(err) return res.send(err)
            res.json(rows)
    })
})
})
routes.post('/api/addLibro',(req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO libro SET ?',[req.body], (err, rows)=>{
        //INSERT INTO libro SET titulos="....", autor="kaleth", pagina=500 
        if (err) return res.send(err)
        res.send('Libro Ingresado')
    })
})
})
routes.delete('/api/deleteLibro/:id', (req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM libro WHERE id = ?', [req.params.id],(err, rows)=>{
            if(err) return res.send(err)
            res.send('Libro Eliminado')
        })    
})
})
routes.put('/api/editarLibro/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE libro SET ? WHERE id = ?', [req.body, req.params.id],(err,rows)=>{
            if(err) return res.send(err)
            res.send('Libro Modificado')
        })
    })
})

    //res.send('USANDO RUTAS')
//Ultima linea de codigo
module.exports = routes