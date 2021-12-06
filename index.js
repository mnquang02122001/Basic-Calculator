var output = document.querySelector('.result');
var numbers = document.getElementsByClassName('num');
var oldValue = 0;
var isMul = false,
  isPlus = false,
  isDiv = false,
  isMinus = false,
  isExpo = false,
  isEqual = false;
for (var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', function () {
    if (!isEqual) {
      output.innerHTML += this.innerHTML;
    }
  });
}
var operands = document.getElementsByClassName('operands');
for (var i = 0; i < operands.length; i++) {
  operands[i].addEventListener('click', function () {
    if (
      output.innerHTML != '' &&
      !isMul &&
      !isDiv &&
      !isPlus &&
      !isMinus &&
      !isExpo
    ) {
      oldValue = parseFloat(output.innerHTML);
      output.innerHTML = '';
      if (this.innerHTML == '*') {
        isMul = true;
      } else if (this.innerHTML == '+') {
        isPlus = true;
      } else if (this.innerHTML == '-') {
        isMinus = true;
      } else if (this.innerHTML == '/') {
        isDiv = true;
      } else if (this.innerHTML == 'x<sup>y</sup>') {
        isExpo = true;
      }
      isEqual = false;
    }
  });
}
var oneSideOperands = document.getElementsByClassName('instant_result');
for (var i = 0; i < oneSideOperands.length; i++) {
  oneSideOperands[i].addEventListener('click', function () {
    if (output.innerHTML != '') {
      if (this.innerHTML == 'Sin') {
        output.innerHTML = Math.sin(
          (parseFloat(output.innerHTML) * Math.PI) / 180
        );
      } else if (this.innerHTML == 'Cos') {
        output.innerHTML = Math.cos(
          (parseFloat(output.innerHTML) * Math.PI) / 180
        );
      } else if (this.innerHTML == 'Tan') {
        output.innerHTML = Math.tan(
          (parseFloat(output.innerHTML) * Math.PI) / 180
        );
      } else if (this.innerHTML == 'e<sup>x</sup>') {
        output.innerHTML = Math.E ** parseFloat(output.innerHTML);
      } else if (this.innerHTML == '%') {
        output.innerHTML = parseFloat(output.innerHTML) / 100;
      } else if (this.innerHTML == '+/-') {
        output.innerHTML = -parseFloat(output.innerHTML);
      } else if (this.innerHTML == 'Vx') {
        output.innerHTML = Math.sqrt(parseFloat(output.innerHTML));
      }
      isEqual = true;
    }
  });
}
document.getElementById('equal').addEventListener('click', function () {
  if (output.innerHTML != '' && oldValue != 0) {
    if (isMul) {
      output.innerHTML = oldValue * parseFloat(output.innerHTML);
      isMul = false;
    } else if (isPlus) {
      output.innerHTML = oldValue + parseFloat(output.innerHTML);
      isPlus = false;
    } else if (isMinus) {
      output.innerHTML = oldValue - parseFloat(output.innerHTML);
      isMinus = false;
    } else if (isDiv) {
      output.innerHTML = oldValue / parseFloat(output.innerHTML);
      isDiv = false;
    } else if (isExpo) {
      output.innerHTML = oldValue ** parseFloat(output.innerHTML);
      isExpo = false;
    }
    isEqual = true;
    oldValue = parseFloat(output.innerHTML);
  }
});
document.getElementById('C').addEventListener('click', function () {
  oldValue = 0;
  output.innerHTML = '';
  isMul = false;
  isDiv = false;
  isMinus = false;
  isPlus = false;
  isExpo = false;
  isEqual = false;
});
document.getElementById('dot').addEventListener('click', function () {
  if (!output.innerHTML.includes('.') && !isEqual) {
    output.innerHTML += this.innerHTML;
  }
});
