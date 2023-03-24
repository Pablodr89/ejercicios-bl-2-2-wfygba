'Use strict';

const texto =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis erat at metus imperdiet mattis vitae a massa. Nullam sit amet nisl fermentum, congue quam sed, posuere quam. In non volutpat orci. Duis arcu tortor, eleifend porta nunc eget, iaculis vestibulum orci. Nam fringilla tincidunt tellus, non rutrum dolor fringilla ac.  Suspendisse potenti. Duis laoreet euismod nunc, non lobortis mauris tempus quis. Sed quis elementum felis, nec porta leo. Quisque quis ante quis metus rhoncus tristique. Integer viverra enim nec ex feugiat auctor. Vestibulum molestie metus eu nibh vulputate semper  Proin vestibulum luctus lectus. Aliquam accumsan ex in tortor efficitur accumsan. Praesent sed leo sapien. Donec at libero tincidunt, pretium elit ut, cursus sapien. Proin ac nibh aliquam, ultrices diam sagittis, sagittis ante. Vestibulum viverra molestie enim non sodales. Pellentesque sit amet blandit orci.  Cras a elementum mi, tempus bibendum velit. Quisque posuere purus eget ex consequat vehicula. Aliquam purus arcu, aliquam ac lectus vel, porta sodales lacus. Fusce eu diam sit amet felis dapibus consequat. Ut ut pellentesque dui. Suspendisse eget dolor ullamcorper, facilisis sapien id, sodales massa. Aliquam erat volutpat. Nam iaculis vehicula justo, vel ultricies tellus dignissim nec. Quisque a mi lacus. Mauris fermentum erat sit amet sem porta dignissim. Curabitur iaculis vitae turpis fringilla finibus. Fusce mollis ullamcorper neque, ac luctus dolor sodales eget.';

texto.replace(/[.,]/g, ''); // Se quitan puntos y comas
//Se crean los arrays necesarios para guardar las palabras dependiendo de su tamaño
let array = [];
let array0 = [];
let array1 = [];
let array2 = [];
let array3 = [];
let array4 = [];
let array5 = [];
let array6 = [];
let array7 = [];
let array8 = [];
let array9 = [];
let array10 = [];
let array11 = [];
let array12 = [];
//Se controla dependiendo del tamaño se inserta en un array o en otro
texto.split(' ').forEach((palabra) => {
  switch (palabra.length) {
    case 0:
      array0.push(palabra);
      break;
    case 1:
      array1.push(palabra);
      break;
    case 2:
      array2.push(palabra);
      break;
    case 3:
      array3.push(palabra);
      break;
    case 4:
      array4.push(palabra);
      break;
    case 5:
      array5.push(palabra);
      break;
    case 6:
      array6.push(palabra);
      break;
    case 7:
      array7.push(palabra);
      break;
    case 8:
      array8.push(palabra);
      break;
    case 9:
      array9.push(palabra);
      break;
    case 10:
      array10.push(palabra);
      break;
    case 11:
      array11.push(palabra);
      break;
    case 12:
      array12.push(palabra);
      break;
  }
});
//Por ultimo se añaden los arrays al array inicial
array.push(
  array0,
  array1,
  array2,
  array3,
  array4,
  array5,
  array6,
  array7,
  array8,
  array9,
  array10,
  array11,
  array12
);

console.log(array);
