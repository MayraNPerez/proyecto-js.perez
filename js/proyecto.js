let nombreGaleria = 'Librero.';

alert ('Bienvenido al proyecto Javascript, ' + nombreGaleria);


function saludarUsuario (){
    let nombre = prompt('¿Cuál es tu nombre?')
    alert ('Un gusto ' + nombre + ', sumérgete en el mundo literario y disfruta de los increíbles libros que tenemos para vos.')
}
saludarUsuario()


function mostrar(){
    let temas = alert('A continuación se mostrarán los diferentes generos a elección:')
}
mostrar()

const generosDisponibles = ['Ficcion ', ' Fantasia ', ' Misterio ', ' Suspenso ', ' Romance. ']
alert(generosDisponibles)

const generos = prompt('Puedes elegir tu género de preferencia y te mostraremos nuestras opciones disponibles:');

switch (generos){
    case 'ficcion':
        console.log(`Elegiste ficción, estos son los libros disponibles hasta el momento: 

        -"El juego de Ender" de Orson Scott Card.
        -"Dune" de Frank Herbert.
        -"El fin de la eternidad" de Isaac Asimov.
        -"Neuromante" de William Gibson.
        -"Fahrenheit 451" de Ray Bradbury.
        -"1984" de George Orwell.
        -"Cien años de soledad" de Gabriel García Márquez.
        -"Matar a un ruiseñor" de Harper Lee.
        -"El conde de Montecristo" de Alexandre Dumas.
        -"El guardián entre el centeno" de J.D. Salinger.
        -"Mundo Anillo" de Larry Niven.
        -"La naranja mecánica" de Anthony Burgess.`)
break;
    case 'fantasia':
        console.log(`Elegiste fantasía, estos son los libros disponibles hasta el momento:

        -"El Señor de los Anillos" de J.R.R. Tolkien.
        -"Harry Potter y la piedra filosofal" de J.K. Rowling.
        -"Crónicas de Narnia" de C.S. Lewis.
        -"Canción de hielo y fuego" (Juego de Tronos) de George R.R. Martin.
        -"El nombre del viento" de Patrick Rothfuss.
        -La rueda del tiempo" de Robert Jordan.
        -"Mistborn" de Brandon Sanderson.
        -"Elantris" de Brandon Sanderson.
        -"American Gods" de Neil Gaiman.
        -"La ciudad de las sombras" de Victoria Álvarez
        -El Archivo de las Tormentas" de Brandon Sanderson.
        -"El Ciclo de la Puerta de la Muerte" de Margaret Weis y Tracy Hickman.
        -"Las crónicas de Prydain" de Lloyd Alexander.
        -"El mar infinito" de Rick Yancey.
        -"Elantris" de Brandon Sanderson.`)
break;
    case 'misterio':
        console.log(`Elegiste misterio y suspenso, estos son los libros disponibles hasta el momento:
        
        -"El código Da Vinci" de Dan Brown.
        -"El nombre de la rosa" de Umberto Eco.
        -"El talento de Mr. Ripley" de Patricia Highsmith.
        -"La chica del tren" de Paula Hawkins.
        -"El silencio de los corderos" de Thomas Harris.
        -"El misterio de la cripta embrujada" de Eduardo Mendoza.
        -"El nombre de la rosa" de Umberto Eco.
        -"Inferno" de Dan Brown.
        -"La sombra del viento" de Carlos Ruiz Zafón.
        -"Mujer en punto cero" de Nawal El Saadawi.
        -"El libro de los Baltimore" de Joël Dicker.
        -"La verdad sobre el caso Harry Quebert" de Joël Dicker.
        -"El psicoanalista" de John Katzenbach.
        -"La ventana indiscreta" de Cornell Woolrich.
        -"La mujer en la ventana" de A.J. Finn.`)
break;
    case 'suspenso':
        console.log(`Elegiste misterio y suspenso, estos son los libros disponibles hasta el momento:
    
        -"El código Da Vinci" de Dan Brown.
        -"El nombre de la rosa" de Umberto Eco.
        -"El talento de Mr. Ripley" de Patricia Highsmith.
        -"La chica del tren" de Paula Hawkins.
        -"El silencio de los corderos" de Thomas Harris.
        -"El misterio de la cripta embrujada" de Eduardo Mendoza.
        -"El nombre de la rosa" de Umberto Eco.
        -"Inferno" de Dan Brown.
        -"La sombra del viento" de Carlos Ruiz Zafón.
        -"Mujer en punto cero" de Nawal El Saadawi.
        -"El libro de los Baltimore" de Joël Dicker.
        -"La verdad sobre el caso Harry Quebert" de Joël Dicker.
        -"El psicoanalista" de John Katzenbach.
        -"La ventana indiscreta" de Cornell Woolrich.
        -"La mujer en la ventana" de A.J. Finn.`)
break;
    case 'romance':
        console.log(`Elegiste romance, estos son los libros disponibles hasta el momento:
        
        -"Orgullo y prejuicio" de Jane Austen.
        -"Jane Eyre" de Charlotte Brontë.
        -"Memorias de una geisha" de Arthur Golden.
        -"Un amor para recordar" de Nicholas Sparks.
        -"El tiempo entre costuras" de María Dueñas.
        -"Orgullo" de Jennifer L. Armentrout.
        -"Cincuenta sombras de Grey" de E.L. James.
        -"Outlander" de Diana Gabaldon.
        -"Yo antes de ti" de Jojo Moyes.
        -"Un paseo para recordar" de Nicholas Sparks.
        -"La sombra del viento" de Carlos Ruiz Zafón.
        -"Pídeme lo que quieras" de Megan Maxwell.
        -"El amante japonés" de Isabel Allende.
        -"El cuaderno de Noah" de Nicholas Sparks.`)
break;
    default:
        prompt('La opción no es válida.')
}

let compra = confirm('Cada libro tiene un precio de 500ARS.¿Desea comprar?');
let cantidad = prompt('Ingrese a continuación la cantidad de libros a comprar:');
let cantidadIngresada = parseInt(cantidad);
let precio = 500;

if (cantidad == 1){
    alert('Usted ha realizado la compra de ' + cantidad + ' producto. El total a pagar será visible en la consola, que lo disfrute!');
    console.log('Total a pagar: ' + precio * cantidad);
} else if (cantidad == 2){
    alert('Usted ha realizado la compra de ' + cantidad + ' productos. El total a pagar será visible en la consola, que lo disfrute!');
    console.log('Total a pagar: ' + precio * cantidad)
} else if (cantidad == 3){
    alert('Usted ha realizado la compra de ' + cantidad + ' productos. El total a pagar será visible en la consola, que lo disfrute!');
    console.log('Total a pagar: ' + precio * cantidad)
} else if (cantidad == 4){
    alert('Usted ha realizado la compra de ' + cantidad + ' productos. El total a pagar será visible en la consola, que lo disfrute!');
    console.log('Total a pagar: ' + precio * cantidad)
} else {
    alert('Usted no ha ingresado un valor.');
}

console.log('Gracias por elegirnos, vuelva pronto.');
