import {obtenercanciones} from './servicioGenerarCanciones.js'

import {pitarcanciones} from './pintarcanciones.js'

//llamar a la funcion genenarToken
let canciones=await obtenercanciones()

//llamar la funcion pintarcanciones
pitarcanciones(canciones.tracks)

