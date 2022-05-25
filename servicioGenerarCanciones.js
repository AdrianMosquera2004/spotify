import {generarToken} from './servicioGenerarToken.js'

//llamar a la funcion genenarToken
let tokenRespuesta=await generarToken()
let token=`${tokenRespuesta.token_type} ${tokenRespuesta.access_token}`

//URI DEL SERVICIO
const URI="https://api.spotify.com/v1/artists/128ftF9X7Kd7Di2fq3wYVs/top-tracks?market=US"

//Configuro la peticion
const PETICON={
    method:"GET",
    headers:{Authorization:token}
}

//Consumo el servicio
export async function obtenercanciones(){
    let respuesta=await fetch(URI,PETICON)
    return respuesta.json()
}
