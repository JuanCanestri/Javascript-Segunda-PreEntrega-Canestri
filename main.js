// Segunda PreEntrega - Javascript - Juan Canestri

// El objetivo es crear canciones para agregar a una playlist.

// Generamos el constructor.
class Cancion {
    constructor(autor, titulo, album, genero, duracion){
        this.autor=autor
        this.titulo=titulo
        this.album=album
        this.genero=genero
        this.duracion=duracion
    }
}

// Generamos la playlist con algunas canciones incluidas previamente en un array.
let miPlaylist=[
    {autor:"Green Day", titulo: "Basket Case", album: "Dookie",genero: "Rock", duracion: "182"},
    {autor:"Green Day", titulo: "Basket Case", album: "Dookie",genero: "Rock", duracion: "182"},
    {autor:"Green Day", titulo: "Basket Case", album: "Dookie",genero: "Rock", duracion: "182"},
    {autor:"Green Day", titulo: "Basket Case", album: "Dookie",genero: "Rock", duracion: "182"},
    {autor:"Green Day", titulo: "Basket Case", album: "Dookie",genero: "Rock", duracion: "182"},
    {autor:"Green Day", titulo: "Basket Case", album: "Dookie",genero: "Rock", duracion: "182"},
    {autor:"Green Day", titulo: "Basket Case", album: "Dookie",genero: "Rock", duracion: "182"},
    {autor:"Green Day", titulo: "Basket Case", album: "Dookie",genero: "Rock", duracion: "182"},
    {autor:"Green Day", titulo: "Basket Case", album: "Dookie",genero: "Rock", duracion: "182"},
    {autor:"Green Day", titulo: "Basket Case", album: "Dookie",genero: "Rock", duracion: "182"}
]

// Menu de inicio
let seguir=true
while (seguir==true) {
    let opcion=prompt("Bienvenido a Spotify, ingrese la opcion que desea del menú. \n A - Ver playlist \n B - Ingresar cancion a la playlist \n C - Buscar una cancion \n D - Salir")
switch (opcion.toLowerCase()) {

    case "a":
        miPlaylist.forEach(elemento=>console.log(elemento))
        break

    case "b":
        
        // Ingresamos las canciones a la playlist con un bucle while.
        let continuar=true
        while (continuar=true) {
            let autor=prompt("Ingresa el autor de la cancion")
            let titulo=prompt("Ingresa el titulo de la cancion")
            let album=prompt("Ingresa el album de la cancion")
            let genero=prompt("Ingresa el genero de la cancion")
            let duracion=prompt("Ingresa la duracion de la cancion en segundos")

            // Creamos la nueva cancion con el constructor
            let agregarCancion= new Cancion(autor, titulo, album, genero, duracion)

            // Agregamos la nueva cancion a la playlist
            miPlaylist.push(agregarCancion)

            // Preguntamos si se desea agregar otra cancion
            let pregunta=prompt("Desea agregar otra cancion? (si/no)")
            if (pregunta.toLowerCase()!=="si") {
                break
            }
        }
        continue

    case "c":
        alert("Ha ingresado la opcion C")                
        break

    default:
        alert("Muchas gracias por su visita, hasta la próxima!")
        seguir=false
        break
}
}












































