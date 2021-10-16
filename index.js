// Importamos Modulo
const https = require('https')
const fs = require('fs')

//para consultar API usamos el metodo GET de HTTPS
https
.get('https://mindicador.cl/api') , (respuesta) => {
        //ON (metodo) del callback del metodo get,
        //especificamos un metodo de error del
        respuesta.on('data', data => {

            console.log(JSON.parse(data))
            //Generamos una variable para guardar el JSON de respuesta
            let indicadorMoneda = JSON.parse(data)

            //filtramos elementos del JSON alojado en la variable 
         //   JSON.parse(indicadorMoneda.find(monea) => monea.uf.codigo == monedaAPI)
        
           console.log(Object.keys(indicadorMoneda))
           console.log(Object.keys(indicadorMoneda,uf))
           console.log((indicadorMoneda.uf))
        
        }
        )
    .on('error', (err) => {
        console.log('error: ' + err.message)
}
)
}

//Crear archivo con fs (File System)
fs.writeFile('holamunto.txt' ,
 'mensaje de prueba ... doña cecis curadita un dia sabado',
 'utf-8',
 () => console.log('EeeeEEEEeeeExito!')
 )