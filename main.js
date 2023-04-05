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
    {autor:"green day", titulo: "basket case", album: "dookie",genero: "rock", duracion: "182"},
    {autor:"green day", titulo: "holiday", album: "holiday",genero: "rock", duracion: "233"},
    {autor:"green day", titulo: "she", album: "dookie",genero: "rock", duracion: "134"},
    {autor:"the strokes", titulo: "reptilia", album: "room on fire",genero: "rock", duracion: "220"},
    {autor:"the strokes", titulo: "last nite", album: "is this it",genero: "rock", duracion: "194"},
    {autor:"the strokes", titulo: "someday", album: "is this it",genero: "rock", duracion: "184"},
    {autor:"michael jackson", titulo: "black or white", album: "dangerous",genero: "pop", duracion: "255"},
    {autor:"michael jackson", titulo: "man in the mirror", album: "bad",genero: "pop", duracion: "319"},
    {autor:"chemical brothers", titulo: "star guitar", album: "come with us",genero: "electronica", duracion: "387"},
    {autor:"chemical brothers", titulo: "the golden path", album: "brotherhood",genero: "electronica", duracion: "287"}
]

// Menu Principal
let seguir=true
while (seguir==true) {
    let opcion=prompt("Bienvenido a Spotify, ingrese la opcion que desea del menú. \n A - Ver playlist \n B - Ingresar cancion a la playlist \n C - Filtrar la playlist \n D - Salir")
switch (opcion.toLowerCase()) {

    case "a":
        // Usamos forEach para mostrar los objetos de la playlist
        miPlaylist.forEach(elemento=>console.log(elemento))
        break

    case "b":
        
        // Ingresamos nuevas canciones a la playlist con un bucle while para decidir cuantas canciones agregar.
        let continuar=true
        while (continuar=true) {
            let autor=prompt("Ingresa el autor de la cancion")
            let titulo=prompt("Ingresa el titulo de la cancion")
            let album=prompt("Ingresa el album de la cancion")
            let genero=prompt("Ingresa el genero de la cancion")
            let duracion=prompt("Ingresa la duracion de la cancion en segundos")

            // Creamos la nueva cancion con el constructor
            let agregarCancion= new Cancion(autor, titulo, album, genero, duracion)

            // Pusheamos la nueva cancion a la playlist
            miPlaylist.push(agregarCancion)

            // Preguntamos si se desea agregar otra cancion
            let pregunta=prompt("Desea agregar otra cancion? (si/no)")
            if (pregunta.toLowerCase()!=="si") {
                break
            }
        }
        continue

    case "c":
        // Filtramos la playlist segun Autor, Titulo, Album o Genero. Mostrara por consola la nueva playlist segun el filtro usado.
        let whileFilter=true
        // Usamos un bucle while para el Sub Menu en el que determinamos el criterio para filtrar.
        while (whileFilter==true) {            
            let filtrarPlaylist=prompt("Como te gustaria filtrar la playlist? \n 1 - Autor \n 2 - Titulo \n 3 - Album \n 4 - Genero \n 5 - Volver al menú principal")
            switch (filtrarPlaylist.toLowerCase()) {
                case "1":
                    let filtroAutor=prompt("Ingrese el nombre del autor")
                    let autoresFiltrados=miPlaylist.filter(cancion=>cancion.autor===filtroAutor)
                    autoresFiltrados.forEach(elemento=>console.log(elemento))
                    break
                case "2":
                    let filtroTitulo=prompt("Ingrese el nombre de la cancion")
                    let titulosFiltrados=miPlaylist.filter(cancion=>cancion.titulo===filtroTitulo)
                    titulosFiltrados.forEach(elemento=>console.log(elemento))
                    break
                case "3":
                    let filtroAlbum=prompt("Ingrese el album de la cancion")
                    let albumFiltrados=miPlaylist.filter(cancion=>cancion.album===filtroAlbum)
                    albumFiltrados.forEach(elemento=>console.log(elemento))
                    break
                case "4":
                    let filtroGenero=prompt("Ingrese el genero de la cancion")
                    let generosFiltrados=miPlaylist.filter(cancion=>cancion.genero===filtroGenero)
                    generosFiltrados.forEach(elemento=>console.log(elemento))
                    break

                // Volvemos al menu principal al romper el bucle while.
                case "5":
                    whileFilter=false
                    break
                default:
                    alert("Por favor, ingrese una opcion válida")
                    break
            }
        }
        break
    
    // Mensaje despedida al seleccionar la opcion Salir del menú principal.
    default:
        alert("Muchas gracias por su visita, hasta la próxima!")
        seguir=false
        break
}
}












































