//1. URI PARA DONDE VOY 
const URI="https://accounts.spotify.com/api/token"

//2.almaceno los datos que voy a enviar
let dato1="client_id=870552a7570e4200bd539dcfc066cc5b"
let dato2="client_secret=bc4de3c53e8846d2a431e0d5d598231a"
let dato3="grant_type=client_credentials"

//3.configuro la peticon
const PETICION={
    method:"POST",
    headers:{
        "Content-type":"application/x-www-form-urlencoded"
    },
    body:dato1+"&"+dato2+"&"+dato3
}

//4. Consumir el servicio
export async function generarToken(){

    let respuesta = await fetch(URI,PETICION)
    return (respuesta.json())
}