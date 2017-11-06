// function celsi(x){
//   var KELVIN = 273.15;
//   var res = x + KELVIN;
//   return res;
// }
// console.log(celsi(2));

function celsi_in_faren(x) {
  var FARENG = 32;
  var one_sels_frm_faren = 1.8;
  var result = x * one_sels_frm_faren + FARENG;
  return result;
}

console.log(celsi_in_faren(4));
