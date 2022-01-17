//Task 2
let x;
switch (typeof x) {
  case 'number':
  console.log(x + '-Это число');
  break;
  case 'string':
  console.log(x + '-Это строка' );
  break;
  case 'boolean':
  console.log(x + ' -Это логический тип')
  break;
  default:
  console.log ('Тип X не определен')
}