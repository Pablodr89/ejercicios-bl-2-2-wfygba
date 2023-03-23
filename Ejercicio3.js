let fecha1 = '23/05/1989';
let fecha2 = '26/03/1997';
let fecha1Date = new Date(fecha1.split('/').reverse().join('/'));
let fecha2Date = new Date(fecha2.split('/').reverse().join('/'));
let diasTrans =
  (fecha2Date.getTime() - fecha1Date.getTime()) / (1000 * 60 * 60 * 24);

console.log(
  'Entre el ' +
    fecha1 +
    ' y el ' +
    fecha2 +
    ' han pasado ' +
    Math.floor(diasTrans) +
    ' dias'
);
