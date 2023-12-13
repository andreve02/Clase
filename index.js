// Ejercicio 1: Retornar el array de autos
function mostrarInformacionAutos(autosPrueba) {
  return autosPrueba
}

// Ejercicio 2: Filtrar autos por marca
function filtrarPorMarca(autos) {
  return autos.filter((auto) => auto.marca === marca);

}

// Ejercicio 3: Calcular el precio promedio de todos los autos
function calcularPrecioPromedio() {

}

// Ejercicio 4: Encontrar el auto más caro
function encontrarAutoMasCaro() {

}

// Ejercicio 5: Incrementar el precio de todos los autos en un 10%
function incrementarPrecio() {

}

// Ejercicio 6: Encontrar el auto con el menor kilometraje
function encontrarAutoMenorKilometraje() {

}

// Ejercicio 7: Ordenar autos por precio de menor a mayor y devolver un array con los precios
function ordenarPorPrecio() {

}

// Ejercicio 8: Obtener un array con las marcas únicas de los autos
function obtenerMarcasUnicas() {

}

// Ejercicio 9: Filtrar autos por rango de precios
function filtrarPorRangoDePrecio() {

}

// Ejercicio 10: Calcular el total de kilometraje de todos los autos
function calcularTotalKilometraje(autosPrueba) {
return  autosPrueba.reduce((total, autosPrueba) => total + autosPrueba.kilometraje, 0);
}



// No tocar este exports. Es para el test
module.exports = {
  mostrarInformacionAutos,
  filtrarPorMarca,
  calcularPrecioPromedio,
  encontrarAutoMasCaro,
  incrementarPrecio,
  encontrarAutoMenorKilometraje,
  ordenarPorPrecio,
  obtenerMarcasUnicas,
  filtrarPorRangoDePrecio,
  calcularTotalKilometraje
};