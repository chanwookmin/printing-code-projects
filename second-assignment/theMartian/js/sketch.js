var r = new Rune({
  container: "#canvas",
  width: 850,
  height: 1100,
  debug: true
});

//drawLargeCircle(r.width, r.height/6, r.width*10/6+100);
r.rect(0,0,r.width, r.height).fill(0);

r.ellipse(r.width, r.height/6, r.width*10/6+100, r.width*10/6+100).fill(255).stroke(0)

drawCircle(r.width/4, r.height/4,70);
drawCircle(r.width-170, r.height-300,100);
drawCircle(r.width-100, r.height-900,170);
drawCircle(r.width-260, r.height-600,300);
drawCircle(r.width-400, r.height-1050,140);


drawRect();
//drawRect(10, r.height-50, 100)
//r.rect(10,10,10,10);

// function drawRect(x,y,size){
//   var _x, _y, _size;

//   _x = x;
//   _y = y;
//   _size = size;

//   if(_size_x<_size_y){
//     r.rect(_x, _y, _size_x*3, _size_y/6);
//   }else{
//     r.rect(_x, _y, _size_x/3, _size_y*6);
//   }

//   if(_x<500){
//     if(_y>r.height/2){
//     console.log(_x);
//     drawRect(_x+10*Rune.random(1.1,1.2),_y*Rune.random(0.9,1),_size_x,_size_y);
//   }
//   }


function drawRect(){
  var strokeW = 3;

  r.rect(-77, 946, 112,52)
    .fill(255)
    .strokeWidth(strokeW)
    .stroke(0)
  r.rect(-28, 972, 26,36)
    .fill(255)
    .strokeWidth(strokeW)
    .stroke(0)
  r.rect(-15, 938, 29,52)
    .fill(255)
    .strokeWidth(strokeW)
    .stroke(0)
  r.rect(-39, 926, 100, 100)
    .fill(255)
    .strokeWidth(strokeW)
    .stroke(0)
  r.rect(20, 861, 24, 100)
    .fill(255)
    .strokeWidth(strokeW)
    .stroke(0)
  r.rect(24, 886, 126, 22)
    .fill(255)
    .strokeWidth(strokeW)
    .stroke(0)
  r.rect(78, 817, 52, 109)
    .fill(255)
    .strokeWidth(strokeW)
    .stroke(0)
  r.rect(108, 792, 8, 105)
    .fill(255)
    .strokeWidth(strokeW)
    .stroke(0)
  r.rect(95, 810, 137, 14)
    .fill(255)
    .strokeWidth(strokeW)
    .stroke(0)
  r.rect(151, 795, 61, 22)
    .fill(255)
    .strokeWidth(strokeW)
    .stroke(0)
  r.rect(198, 747, 5, 98)
    .fill(255)
    .strokeWidth(strokeW)
    .stroke(0)
  r.rect(180, 723, 127, 34)
    .fill(255)
    .strokeWidth(strokeW)
    .stroke(0)
  r.rect(229, 711, 47, 36)
    .fill(255)
    .strokeWidth(strokeW)
    .stroke(0)
  r.rect(262, 653, 6, 85)
    .fill(255)
    .strokeWidth(strokeW)
    .stroke(0)
  r.rect(265, 647, 34, 16)
    .fill(255)
    .strokeWidth(strokeW)
    .stroke(0)
  r.rect(278, 638, 14, 17)
    .fill(255)
    .strokeWidth(strokeW)
    .stroke(0)
  r.rect(282, 624, 21, 27)
    .fill(255)
    .strokeWidth(strokeW)
    .stroke(0)
}

function drawCircle(x,y,size){
  var _x, _y, _size;
  
  _x = x;
  _y = y;
  _size = size;

  r.ellipse(_x, _y ,_size, _size)
    .fill(0)
    .stroke(0)

  _x = _x + Rune.random(-_size/10, _size/10);
  _y = _y + Rune.random(-_size/10, _size/10);
  _size = _size * Rune.random(0.9, 1.3);

  r.ellipse(_x, _y ,_size, _size)
    .fill(255)
    .stroke(0)

  _x = _x + Rune.random(-_size/10, _size/10);
  _y = _y + Rune.random(-_size/10, _size/10);
  _size = _size * Rune.random(0.8, 1);

  r.ellipse(_x, _y ,_size, _size)
    .fill(0)
    .stroke(0)

}






// r.rect(0,0,850, 1100)
//   .fill(155)

// for(var i=0; i<20; i++){
//   r.rect(Math.random()*i*20, 1100-i*5, Math.random()*i*20,Math.random()*i*20)
//     //.fill(0)
//     .stroke(0)
// }

//   r.ellipse(260, 230, 260, 300)
//   .fill(255)
//   .stroke(255)

// r.triangle(170, 350, 300, 663 ,404, 200)
//   .fill(255)
//   .stroke(0)



r.draw();