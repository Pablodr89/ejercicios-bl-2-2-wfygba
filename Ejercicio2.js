let arrayObjetos = [
  { nombre: 'Pablo', apellido: 'Dominguez' },
  { nombre: 'Fernando', apellido: 'Perez' },
  { nombre: 'Jonatan', apellido: 'Viera' },
  { nombre: 'Rafa', apellido: 'Chavez' },
];
//Metodos de array
let array = [];

function datosArray(param) {
  if (param == 'nombre') {
    arrayObjetos.forEach((prop) => {
      array.push(prop.nombre);
    });
  } else if (param == 'apellido') {
    arrayObjetos.forEach((prop) => {
      array.push(prop.apellido);
    });
  }
  console.log(array);
}
datosArray('nombre');

//Con maps
let map = [];

function datosMap(param) {
  if (param == 'nombre') {
    arrayObjetos.map((prop) => {
      map.push(prop.nombre);
    });
  } else if (param == 'apellido') {
    arrayObjetos.map((prop) => {
      map.push(prop.apellido);
    });
  }
  console.log(map);
}
datosMap('apellido');
