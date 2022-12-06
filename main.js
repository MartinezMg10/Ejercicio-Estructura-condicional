/* 1. Leer dos (2) números y los imprima en forma ascendente */

/* let numer1 ,numer2 = 0

numer1 = parseInt(prompt("digite el primer numero"))
numer2 = parseInt(prompt("digite el segundo numero"))

if(numer1 < numer2){
    console.log(numer1)
    console.log(numer2)
}else{
        console.log(numer2)
        console.log(numer1)
    } */
/* 
    2. (sentencia switch) Diseñar un algoritmo que lea por teclado un número comprendido
    entre 1 y 10. Se desea visualizar si el número es par o impar. En primer lugar, se deberá
    detectar si el número está comprendido en el rango válido (1 a 10) y a continuación si
    el número es 1, 3, 5, 7, 9, escribir un mensaje de “impar”; si es 2, 4, 6, 8, 10, escribir un
    mensaje de “par”. */
/*  let numero = 0

 numero = parseInt(prompt("digite un numero comprendido entre 1 y 10"))

 switch (numero) {
    case 1:
        console.log('Impar');
        break;
    case 3:
        console.log('Impar');
        break;
      
    case 5:
      console.log('Impar');
      break;
          
    case 7:
        console.log('Impar');
        break;
              
    case 9:
        console.log('Impar');
        break;
    case 2:
            console.log('par');
            break;
    case 4:
            console.log('Par');
            break;
          
    case 6:
          console.log('Par');
          break;
              
    case 8:
            console.log('Par');
            break;
                  
    case 10:
            console.log('Par');
            break;
    default:
            console.log('El numero ingresado esta fuera del rango establecido');

 } */

/*  3. (sentencia switch) Diseñar un algoritmo que lea un número entero entre 1 y 10, y nos
muestre por pantalla el número ingresado en letra (1 = uno). Si el número leído no está
comprendido entre 1 y 10 mostrar un mensaje de error. */

/* let numero = 0

numero = parseInt(prompt("digite un numero comprendido entre 1 y 10"))

switch (numero) {
    case 1:
       console.log('Uno');
       break;
    case 2:
           console.log('Dos');
           break;
    case 3:
       console.log('Tres');
       break;
    case 4:
        console.log('Cuatro');
        break; 
    case 5:
     console.log('Cinco');
     break;
    case 6:
        console.log('Seis');
        break;        
    case 7:
       console.log('Siete');
       break;
    case 8:
        console.log('Ocho');
        break;          
    case 9:
       console.log('Nueve');
       break;
    case 10:
           console.log('Diez');
           break;
   default:
           console.log('Error'); 
}*/

/* 4. Determinar la cantidad total a pagar por una llamada telefónica, teniendo en cuenta lo
siguiente:
• toda llamada que dure tres minutos o menos tiene un coste de 200 pesos.
• cada minuto adicional a partir de los tres primeros es un paso de contador y cuesta
100 pesos 
 */

/* let duracionLlamada, totalPago = 0

duracionLlamada = parseInt(prompt("Digite la duracion de la llamada en minutos"))

if(duracionLlamada <= 3){
    totalPago = 200
    console.log( `la llamada tiene un costo de ${totalPago} pesos.`)
}else if(duracionLlamada > 3){
    totalPago = 200 + (duracionLlamada - 3) * 100
    console.log( `la llamada tiene un costo de ${totalPago} pesos.`)
}else{

}  */

/* 5. En una Granja existen N conejos, C1 blancos y C2 negros. Se venden X conejos negros
y Y conejos blancos. Hacer un algoritmo que:
a) Imprima la cantidad de conejos vendida
b) Si P1 es el precio de venta de los conejos blancos y P2 es el precio de venta de los
conejos negros, imprima el monto total de la venta.
c) Imprima el color de los conejos que se vendieron más.  */


/* let N,c1,c2,x,y,p1,p2, montoTotal= 0

N = parseInt(prompt("Digite la cantidad de conejos que existen"))
c1 = parseInt(prompt("Digite la cantidad de conejos negros que hay"))
c2 = parseInt(prompt("Digite la cantidad de conejos blancos que hay"))
x = parseInt(prompt("Digite la cantidad de conejos negros vendidos"))
y = parseInt(prompt("Digite la cantidad de conejos blancos vendidos"))
p1 = parseInt(prompt("Digite el precio de venta de los conejos blancos")) 
p2 = parseInt(prompt("Digite el precio de venta de los conejos negros"))
montoTotal  = (x * p2)+(y * p1)

console.log(`La cantidad de conejos vendidos es de ${x + y}`)
console.log(`El monto total de la venta es de $${montoTotal}`)

if(x < y){
    console.log("El color de conejos que se vendio mas es el blanco")
}else if(y < x){
    console.log("El color de conejos que se vendio mas es el negro")
}else if(y == x){
    console.log("Los dos colores se vendieron por igual")
}else{

}
 */

/* 
6. Diseñe un algoritmo que permita calcular la nota definitiva para los estudiantes,
determinadas sobre las siguientes condiciones:
a. NOTA PREVIOS será el promedio de los previos por el 60%. Cada estudiante tendrá
3 evaluaciones.
b. NOTA TRABAJOS será el promedio de los trabajos por el 40%. Cada estudiante
presentara 2 trabajos.
c. NOTA FINAL será la suma de la nota de los previos y nota de los trabajos.
d. Nota mínima 1,0 nota máxima: 5,0  */
 
/* let notaPrevios,nota1,nota2,nota3, notaT1,notaT2,notaTrabajos, notaFinal = 0

nota1 = parseFloat(prompt("Digite la nota de la primera evaluacion: \n Nota mínima 1,0 nota máxima: 5,0 "))
nota2 = parseFloat(prompt("Digite la nota de la segunda evaluacion: \n Nota mínima 1,0 nota máxima: 5,0 "))
nota3 = parseFloat(prompt("Digite la nota de la tercera evaluacion: \n Nota mínima 1,0 nota máxima: 5,0 "))
notaT1 = parseFloat(prompt("Digite la nota del primer trabajo: \n Nota mínima 1,0 nota máxima: 5,0 "))
notaT2 = parseFloat(prompt("Digite la nota del segundo trabajo: \n Nota mínima 1,0 nota máxima: 5,0 "))

 */

/* 
if(nota1 <= 5 && nota1 >= 1){
    if(nota2 <= 5 && nota2 >= 1){
        if(nota3 <= 5 && nota3 >= 1){
            notaPrevios = ((nota1 + nota2 + nota3) / 3) * 0.6
        }else{

        }
    }
}

if(notaT1 <= 5 && notaT1 >= 1){
    if(notaT1 <= 5 && notaT1 >= 1){
        notaTrabajos = ((notaT1 + notaT2)/ 2) * 0.4
    }else{

    }
}

if(notaPrevios > 0 && notaTrabajos > 0){
    notaFinal = notaPrevios + notaTrabajos
    console.log(` La nota definitiva es de ${notaFinal}` )
}else{
    console.log("No se pudo hallar la nota." )
}
 */



 
/* 7. Hacer un algoritmo que imprima el nombre de un artículo, clave, precio original, cantidad
y su precio con descuento. El descuento lo hace en base a la clave, si la clave es 1 el
descuento es del 10% y si la clave es 2 el descuento es del 20% (solo existen dos
claves).  */

/* let articulo, clave, precioOriginal,cantidad,precioDescuento = 0

articulo = prompt("Escriba el nombre del articulo")
clave = prompt("Ingrese la clave del articulo")
precioOriginal = prompt("Escriba el precio del articulo")
cantidad = prompt("Escriba la cantidad")

if(clave == 1){
    precioDescuento = precioOriginal - (precioOriginal * 0.1)
}else if(clave == 2){
    precioDescuento = precioOriginal - (precioOriginal * 0.2)
}else{
    precioDescuento = precioOriginal
}

document.write( `El nombre del articulo es ${articulo}, la clave del articulo es ${clave},el precio del articulo es de $${precioOriginal}, la cantidad es de ${cantidad} articulos y el precio con descuento es de $${precioDescuento} `)
 */


/* 8. En un hospital existen tres áreas: Psiquiatría, Pediatría, Traumatología. El presupuesto
anual del hospital se reparte a estas tres (3) áreas; usted debe realizar un algoritmo que
permita ingresar el valor del presupuesto anual, ingresar el porcentaje correspondiente
a cada área, realizar el cálculo del presupuesto que corresponde a cada área, si la suma
de los porcentajes no corresponde al 100% debe mostrar un mensaje de error.
Mostrar el porcentaje asignado a cada área y el presupuesto obtenido. */

/* let psiquiatria,pediatria,traumatologia,presupuestoAnual = 0

presupuestoAnual = parseInt(prompt("Digite el presupuesto anual del hospital"))
psiquiatria = parseInt(prompt("Digite el presupuesto anual destinado a psiquiatria"))
pediatria = parseInt(prompt("Digite el presupuesto anual destinado a pediatria"))
traumatologia = parseInt(prompt("Digite el presupuesto anual destinado a traumatologia"))
porcentajeFinal = psiquiatria + traumatologia + pediatria

if(porcentajeFinal == 100){
    presupuestoPsi = psiquiatria * presupuestoAnual / 100
    presupuestoPed = pediatria * presupuestoAnual / 100
    preasupuestoTra = traumatologia * presupuestoAnual / 100
    console.log( `El porcentaje de psiquiatria es de ${psiquiatria}% y su presupuesto anual asignado   es ${presupuestoPsi}.`)
    console.log(`el porcentaje de pediatria es de ${pediatria}% y su presupuesto anual asignado es ${presupuestoPed} `)
    console.log(`el porcentaje de traumatologia es de ${traumatologia}% y su presupuesto anual asignado es ${preasupuestoTra} 
    `)
}else if(porcentajeFinal != 100){
    console.log("ERROR")
} */

/* 9. Diseñar un algoritmo para determinar el precio del tiquete de ida y vuelta en avión,
conociendo la distancia a recorrer, sabiendo que si el número de días de estancia es
superior o igual a 7 y la distancia superior a 800 km el billete tiene una reducción del
30%. El precio por km es de $2,5 dólares. */
/* 
let valorKm, estancia, distanciaKm,precio,descuento,precioIda, precioVuelta, distanciaTotal = 0

valorKm = 2.5
estancia = parseInt(prompt("Ingrese los dias de estancia"))
distanciaKm = parseFloat(prompt("Ingrese la distancia en kilometros del vuelo de ida"))
distanciaTotal = distanciaKm * 2
precio = valorKm * distanciaKm

if(estancia >= 7 && distanciaTotal > 800){
    descuento = precio * 0.3
    precioTotal = precio - descuento
}else{
    precioTotal = precio
}

precioIda = precioTotal / 2
precioVuelta = precioTotal / 2

document.write( `El precio del tiquete de ida es de $${precioIda} dolares y El precio del tiquete de vuelta es de $${precioVuelta} dolares` )
 */