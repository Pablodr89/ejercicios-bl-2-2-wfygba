'Use strict';

let personas = [
  { nombre: 'Juanma', apellido: 'Cano', edad: 22 },
  { nombre: 'Juanma', apellido: 'Armario', edad: 45 },
  { nombre: 'David', apellido: 'Quiñones', edad: 18 },
  { nombre: 'Alberto', apellido: 'Rus', edad: 18 },
  { nombre: 'Alberto', apellido: 'Rus', edad: 24 },
  { nombre: 'Alberto', apellido: 'Rodriguez', edad: 80 },
];
let persons = personas;

persons.sort((x, y) => {
  let result = 0;
  if (x.nombre.localeCompare(y.nombre) > 0) {
    result = 1;
  } else if (x.nombre.localeCompare(y.nombre) < 0) {
    result = -1;
  } else {
    if (x.apellido.localeCompare(y.apellido) > 0) {
      result = 1;
    } else if (x.apellido.localeCompare(y.apellido) < 0) {
      result = -1;
    } else {
      result = x.edad - y.edad;
    }
  }
  return result;
});

console.log(persons);
