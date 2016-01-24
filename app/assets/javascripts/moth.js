var drawMoth = function(){
  var canvas = document.querySelector('canvas');
  var context = canvas.getContext('2d');

  // body colors
  context.fillStyle = '#542';
  context.strokeStyle = '#222';
  context.lineWidth = 2;

  // body
  context.beginPath();
  context.moveTo(30, 30);
  context.quadraticCurveTo(60, 20, 70, 70);
  context.quadraticCurveTo(20, 60, 30, 30);
  context.closePath();
  context.fill();
  context.stroke();

  // right antenna
  context.beginPath();
  context.moveTo(40, 35);
  context.quadraticCurveTo(30, 20, 35, 5);
  context.stroke();

  // left antenna
  context.beginPath();
  context.moveTo(35, 40);
  context.quadraticCurveTo(20, 30, 5, 35);
  context.stroke();

  // wing colors
  context.fillStyle = '#EDA';
  context.strokeStyle = '#FEB';

  // front right wing
  context.beginPath();
  context.moveTo(48, 38);
  context.quadraticCurveTo(50, 2, 70, 2);
  context.quadraticCurveTo(80, 0, 80, 30);
  context.lineTo(52, 42);
  context.fill();
  context.stroke();

  // front left wing
  context.beginPath();
  context.moveTo(38, 48);
  context.quadraticCurveTo(2, 50, 2, 70);
  context.quadraticCurveTo(0, 80, 30, 80);
  context.lineTo(42, 52);
  context.fill();
  context.stroke();

  // back right wing
  context.beginPath();
  context.moveTo(55, 45);
  context.quadraticCurveTo(80, 30, 87, 37);
  context.quadraticCurveTo(95, 55, 80, 70);
  context.quadraticCurveTo(70, 65, 55, 45);
  context.fill();
  context.stroke();

  // back left wing
  context.beginPath();
  context.moveTo(45, 55);
  context.quadraticCurveTo(30, 80, 37, 87);
  context.quadraticCurveTo(55, 90, 70, 80);
  context.quadraticCurveTo(65, 70, 45, 55);
  context.fill();
  context.stroke();
});