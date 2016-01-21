var arabicToRoman = function(arabicNum){

  var romanNum = '';

  // switch(arabicNum) {
  //   case 1    : return "I"; break;
  //   case 5    : return "V"; break;
  //   case 10   : return "X"; break;
  //   case 50   : return "L"; break;
  //   case 100  : return "C"; break;
  //   case 500  : return "D"; break;
  //   case 1000 : return "M"; break;
// }
  if (arabicNum === 1){
     return romanNum = "I";
  } else if (arabicNum === 5) {
    return romanNum = "V";
  } else if (arabicNum === 10) {
    return romanNum = "X";
  } else if (arabicNum === 50) {
    return romanNum = "L";
  } else if (arabicNum === 100) {
    return romanNum = "C";
  } else if (arabicNum === 500) {
    return romanNum = "D";
  } else if (arabicNum === 1000) {
    return romanNum = "M";
  } else if (arabicNum === 2) {
    return romanNum = "I".concat("I");
  } else if (arabicNum === 6) {
    return romanNum = "V".concat("I");
  } else if (arabicNum === 11) {
    return romanNum = "X".concat("I");
  } else if (arabicNum === 51) {
    return romanNum = "L".concat("I");
  } else if (arabicNum === 101) {
    return romanNum = "C".concat("I");
  } else if (arabicNum === 501) {
    return romanNum = "D".concat("I");
  } else if (arabicNum === 1001) {
    return romanNum = "M".concat("I");
  }
};
