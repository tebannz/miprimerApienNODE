//Importamos Modulo
const https = require('https')
const fs =  require('fs')

// variables globales
let indicadorMoneda = null

//para consultar API usamos el metodo GET de HTTPS
https
.get('https://mindicador.cl/api', (respuesta) => {
    //ON (metodo) del callback del metodo get, 
    //especificamos un metodo de error
    respuesta.on('data', data => 
    {
        //console.log(JSON.parse(data))
        // Generamos una variable para guardar el JSON de respuesta
        indicadorMoneda = JSON.parse(data)
        // filtramos elementos del JSON alojado en la variable
        //console.log(Object.keys(indicadorMoneda))
        //console.log(Object.keys(indicadorMoneda.uf))
        //console.log(indicadorMoneda.uf)
    }
    )
}
)
.on('error', (err) => {
    console.log('error: ' + err.message)
}
)


// Crear archivo con fs (File System)
fs.writeFile('holamundo.txt'
, 'Problema del alumno del futuro...'
,'utf-8'
, () => { 
    console.log('Hasta aca, se creo el archivo solamente...')
    setTimeout(()=>{
        fs.readFile('holamundo.txt', 'utf-8', (err, data) => {
            console.log('Leemos el archivo creado anterioremente' + data)
            setTimeout(()=>{
                fs.rename('holamundo.txt', 'nuevoNombre.txt', () =>{
                    console.log('El archivo holamundo.txt ahora se llama nuevoNombre.txt')
                    setTimeout(()=>{
                        fs.unlink('nuevoNombre.txt', () => {
                            console.log('El archivo nuevoNombre.txt fue eliminado')
                        }
                        )
                    }, 2000)
                })
            },2000)    
        } 
        )
    },2000)
}
)
